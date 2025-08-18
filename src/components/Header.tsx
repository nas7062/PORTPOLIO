import { useState } from 'react';
import HamButton from './HamButton';
import logoImage from '../assets/logo.png';
const links = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
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
        <img
          src={logoImage}
          alt="로고"
          width={50}
          height={50}
          className="rounded-full absolute md:left-16 cursor-pointer hidden md:block"
          onClick={() => scrollToId('home')}
        />
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
