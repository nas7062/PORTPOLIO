import { useState } from 'react';
import ModalContext from './ModalContext';
import ModalController from './ModalController';
import ModalContainer from './ModalContainer';

export function ModalProvider({ children }) {
  const flagState = useState(1);
  const [modalController] = useState(() => new ModalController(flagState));

  return (
    <ModalContext.Provider value={modalController}>
      <>{children}</>
      <ModalContainer />
    </ModalContext.Provider>
  );
}
