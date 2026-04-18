import { Home, Briefcase, GraduationCap, Cpu, Mail } from 'lucide-react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: Briefcase, label: 'Work', id: 'systems' },
    { icon: GraduationCap, label: 'Education', id: 'documentation' },
    { icon: Cpu, label: 'Skills', id: 'neural-labs' },
  ];

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 z-40 w-16 h-screen bg-surface border-r border-outline-variant/30">
      <div className="flex flex-col items-center py-6 h-full">
        <div className="w-10 h-10 bg-surface-container rounded-full overflow-hidden border border-primary/30 mb-6">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/me.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="flex flex-col gap-4 flex-1">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              title={item.label}
            >
              <item.icon size={18} />
            </button>
          ))}
        </div>
        
        <div className="flex flex-col gap-3 mt-auto">
          <a 
            href="mailto:arnabkundu854@gmail.com" 
            className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
            title="Email"
          >
            <Mail size={18} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
            title="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.575-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}