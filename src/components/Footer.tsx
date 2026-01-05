export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 max-w-2xl mx-auto">
      <p className="text-muted text-xs sm:text-sm">
        © {currentYear} Pranav Raj
      </p>
    </footer>
  );
}
