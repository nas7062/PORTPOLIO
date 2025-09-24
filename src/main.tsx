import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import LenisProvider from './LenisProvider.tsx';
import { ModalProvider } from './components/Modal/ModalProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LenisProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </LenisProvider>
  </StrictMode>
);
