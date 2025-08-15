// components/HamburgerXButton.tsx
import { motion, type Transition } from 'framer-motion';
import { useState } from 'react';

type Props = {
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
  className?: string;
  label?: string;
};

const transition: Transition = { type: 'spring', stiffness: 700, damping: 30 };

export default function HamButton({ isOpen, onToggle, className = '', label = 'Menu' }: Props) {
  const isControlled = typeof isOpen === 'boolean';
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isControlled ? isOpen : internalOpen;

  const toggle = () => {
    const next = !open;
    if (!isControlled) setInternalOpen(next);
    onToggle?.(next);
  };

  return (
    <motion.button
      type="button"
      aria-label={open ? `Close ${label}` : `Open ${label}`}
      aria-expanded={open}
      onClick={toggle}
      initial={false}
      animate={open ? 'open' : 'closed'}
      className={`absolute left-16 top-4  z-50 inline-flex h-10 w-10 items-center justify-center
                  text-neutral-900 dark:text-white cursor-pointer ${className}`}
    >
      <motion.span
        className="absolute block h-[3px] w-10 rounded bg-current"
        style={{ top: '50%', left: '50%', translateX: '-50%' }}
        variants={{
          closed: { rotate: 0, y: -8 },
          open: { rotate: 45, y: 0 },
        }}
        transition={transition}
      />
      <motion.span
        className="absolute block h-[3px] w-10 rounded bg-current "
        style={{ top: '60%', left: '50%', translateX: '-50%' }}
        variants={{
          closed: { opacity: 1, scaleX: 1, y: 0 },
          open: { opacity: 0, scaleX: 0, y: 0 },
        }}
        transition={transition}
      />
      <motion.span
        className="absolute block h-[3px] w-10 rounded bg-current"
        style={{ top: '70%', left: '50%', translateX: '-50%' }}
        variants={{
          closed: { rotate: 0, y: 8 },
          open: { rotate: -45, y: 0 },
        }}
        transition={transition}
      />
      <span className="sr-only">{label}</span>
    </motion.button>
  );
}
