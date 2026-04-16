export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} OMNA · Omnipresent Technology, Applied</p>
        <a href="mailto:manuel@omna.ai" className="hover:text-foreground transition-colors">
          manuel@omna.ai
        </a>
      </div>
    </footer>
  );
}
