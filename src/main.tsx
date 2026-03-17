import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import LenisProvider from './LenisProvider.tsx';
import { ModalProvider } from './components/Modal/ModalProvider.tsx';
import { ThemeProvider } from 'next-themes';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider attribute="class" defaultTheme="system"  enableSystem>
      <LenisProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </LenisProvider>
    </ThemeProvider>
);
