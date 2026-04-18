import { useState } from 'react';
import { Terminal, Settings, Menu, X } from 'lucide-react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', id: 'systems' },
    { label: 'Experience', id: 'architectures' },
    { label: 'Education', id: 'documentation' },
    { label: 'Skills', id: 'neural-labs' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center px-4 md:px-8 py-2 md:py-4">
        <div className="text-lg md:text-xl font-bold tracking-tight text-on-background font-heading uppercase cursor-pointer" onClick={() => scrollToSection('home')}>
          ARNAB_KUNDU
        </div>
        
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)} 
              className="text-on-surface-variant hover:text-primary transition-colors font-heading text-xs lg:text-sm uppercase font-bold cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <a href="mailto:arnabkundu854@gmail.com" className="text-on-surface-variant hover:bg-surface-container p-2 rounded transition-all duration-300">
            <Terminal size={18} />
          </a>
          <button onClick={() => scrollToSection('contact')} className="hidden sm:flex text-on-surface-variant hover:bg-surface-container p-2 rounded transition-all duration-300">
            <Settings size={18} />
          </button>
          <a href="mailto:arnabkundu854@gmail.com" className="bg-primary px-3 md:px-4 py-2 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-transform">
            Contact
          </a>
          
          <button 
            className="md:hidden text-on-surface-variant p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[48px] z-40 bg-white/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }} 
                className="text-left text-lg font-heading text-on-surface-variant hover:text-primary py-3 border-b border-outline-variant/20"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                scrollToSection('contact');
                setMobileMenuOpen(false);
              }} 
              className="text-left text-lg font-heading text-primary py-3 border-b border-outline-variant/20"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}