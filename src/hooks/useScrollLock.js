import { useEffect } from 'react';

export default function useScrollLock(isOpen) {
  useEffect(() => {
    // Locks the screen when menu isOpen
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
}
