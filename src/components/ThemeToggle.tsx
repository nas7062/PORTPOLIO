import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >
      {theme === 'dark' ? <SunIcon className="w-8 h-8 text-yellow-500 border border-yellow-500 rounded-full p-1 cursor-pointer " /> : 
      <MoonIcon className="w-8 h-8 text-gray-500 border border-gray-500 rounded-full p-1 cursor-pointer" />}
    </button>
  );
}
