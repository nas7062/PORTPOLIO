import { useState } from 'react';
import HamButton from './HamButton';
import ThemeToggle from './ThemeToggle';
const links = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'project', label: 'PROJECT' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50  ">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* 왼쪽: 햄버거(모바일) */}
        <HamButton isOpen={open} onToggle={setOpen} label="navigation menu" className="md:hidden" />
        {/* 텍스트 로고 */}
        <button
          onClick={() => scrollToId('home')}
          className="absolute hidden sm:block left-4 md:left-16 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <span className="text-xl md:text-3xl font-semibold tracking-[0.15em] transition-colors">
            10012
          </span>
        </button>
        {/* 오른쪽: 링크(데스크톱) */}
        <nav className="absolute right-32 text-2xl hidden md:flex  items-center gap-8 ">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="cursor-pointer hover:opacity-70 transition"
            >
              {l.label}
            </button>
          ))}
          <ThemeToggle />
        </nav>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <nav className="md:hidden border-t border-gray-300 bg-white">
          <ul className="flex flex-col p-4">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollToId(l.id)}
                  className="block w-full text-left py-3 hover:bg-neutral-50"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
