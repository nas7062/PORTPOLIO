import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from './useModal';

const MODAL_ID = 'modal-container';

export default function ModalContainer() {
  const modal = useModal();
  const topComponentInfo = modal?.top;
  const [containerEl, setContainerEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById(MODAL_ID) as HTMLElement | null;
    if (!el) {
      el = document.createElement('div');
      el.id = MODAL_ID;
      document.body.appendChild(el);
    }
    setContainerEl(el);
  }, []);

  if (!topComponentInfo || !containerEl) return null;

  const Component = topComponentInfo.Component;

  return createPortal(
    <div>
      <Component
        resolve={topComponentInfo.resolve}
        reject={topComponentInfo.reject}
        {...(topComponentInfo.props ?? {})}
      />
    </div>,
    containerEl
  );
}
