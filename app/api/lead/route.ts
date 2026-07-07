import { NextResponse } from "next/server";

/**
 * Lead capture → Airtable (tabla Leads).
 * Env vars (.env.local y Vercel):
 *   AIRTABLE_TOKEN     PAT con scope data.records:write y acceso a la base
 *   AIRTABLE_BASE_ID   id de la base (app…)
 *   AIRTABLE_TABLE     nombre o id (tbl…) de la tabla de leads
 */
const BASE_ID = process.env.AIRTABLE_BASE_ID ?? "apphqXFFqbTBVBN6o";
const TABLE = process.env.AIRTABLE_TABLE ?? "tblSmghHJNimrCDdv"; // tabla "Contactos"

type Lead = {
  pais?: string; nombre?: string; apellido?: string; email?: string; telefono?: string;
  empresa?: string; tipoEmpresa?: string; facturacion?: string; cuelloBotella?: string;
  origen?: string; utmSource?: string;
};

export async function POST(req: Request) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "AIRTABLE_TOKEN no configurada" }, { status: 500 });
  }

  let lead: Lead;
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }
  if (!lead.email || !lead.nombre) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  // clave = nombre EXACTO de la columna en Airtable (tabla Contactos).
  const raw: Record<string, string | undefined> = {
    "Nombre": lead.nombre,
    "Apellido": lead.apellido,
    "Correo": lead.email,
    "Whatsapp": lead.telefono,
    "Empresa": lead.empresa,
    "País": lead.pais,
    "¿Qué tipo de empresa son?": lead.tipoEmpresa,
    "Tamaño de empresa": lead.facturacion,
    "¿Mayor cuello de botella?": lead.cuelloBotella,
    "¿Cómo te enteraste de nosotros?": lead.origen,
    "utm_source": lead.utmSource,
  };
  const fields: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    const val = (v ?? "").toString().trim();
    if (val) fields[k] = val;
  }

  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ records: [{ fields }], typecast: true }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Airtable rechazó el registro", detail: await res.text() }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
