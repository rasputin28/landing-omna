const clients = [
  "Jägermeister",
  "Telefónica",
  "Speede",
  "Fuller",
  "Ecomfylead",
  "SAP",
  "NetSuite",
];

export default function LogoBar() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 border-y border-border/40 overflow-hidden">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted mb-8">
        Empresas que decidieron operar diferente
      </p>
      <div className="relative">
        <div className="flex gap-12 animate-scroll-left w-max">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-xl font-semibold text-muted/60 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-muted">
        Jägermeister, Telefónica, Speede, Fuller, Ecomfylead y más de 135 empresas en 9 países
      </p>
    </section>
  );
}
