export default function Footer() {
  return (
    <footer className="border-t border-brand-lightBorder mt-16 md:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-brand-mutedText">
        <p className="text-sm font-sans">
          Site crafted by{" "}
          <a href="mailto:manihk@google.com" className="text-brand-accent hover:text-brand-accentHover hover:underline">
            Mani HK
          </a>
          .
        </p>
        <p className="text-xs mt-2 font-sans">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
