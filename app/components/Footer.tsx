export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} OMNA. Todos los derechos reservados.
          KIT DE MEXICO SA de CV y KIT TECH LLC
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">
            Política de Privacidad
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Términos de Servicio
          </a>
        </div>
      </div>
    </footer>
  );
}
