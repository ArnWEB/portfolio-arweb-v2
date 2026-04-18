import { Mail, Link2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full py-8 md:py-12 bg-surface border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-primary font-bold text-[10px] tracking-widest uppercase font-heading">
            ARNA8 // ALL_RIGHTS_RESERVED
          </div>
          <div className="text-on-surface-variant text-[10px] tracking-widest uppercase font-heading">
            ©2026 ARNAB KUNDU // AI_ENGINEER
          </div>
        </div>

        <div className="flex gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] tracking-widest uppercase font-heading" href="https://github.com/ArnWEB" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] tracking-widest uppercase font-heading" href="https://www.linkedin.com/in/arnweb/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] tracking-widest uppercase font-heading" href="mailto:arnabkundu854@gmail.com">
            Contact
          </a>
        </div>

        <div className="flex gap-4">
          <a href="mailto:arnabkundu854@gmail.com" className="w-10 h-10 rounded-sm bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-all border border-outline-variant/20">
            <Mail className="text-on-surface-variant" size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-sm bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-all border border-outline-variant/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-on-surface-variant">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.575-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/arnweb/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-sm bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-all border border-outline-variant/20">
            <Link2 className="text-on-surface-variant" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}