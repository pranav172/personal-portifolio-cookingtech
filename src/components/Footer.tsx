export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 max-w-2xl mx-auto">
      <p className="text-muted/60 text-xs">
        © {currentYear} Pranav Raj
      </p>
    </footer>
  );
}

