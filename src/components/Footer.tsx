export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 sm:mt-24 py-8 sm:py-12 px-4 sm:px-6 max-w-3xl mx-auto">
      <p className="text-muted/30 text-[11px]">
        © {currentYear} Pranav Raj
      </p>
    </footer>
  );
}

