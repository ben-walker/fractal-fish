import { useEffect, useRef, useState } from 'react';

const useComponentVisible = (visible: boolean) => {
  const [open, setOpen] = useState(visible);

  const ref = useRef<HTMLDivElement>(null);

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleEscape, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscape, true);
    };
  });

  return { ref, open, setOpen };
};

export { useComponentVisible };
