import { useEffect } from 'react';

const useDetectKey = () => {
  useEffect(() => {
    const handleMouseDown = () => {
      document.body.classList.add('using-mouse');
    };
    const handleKeyDown = (e) => {
      if (e.key === '9') {
        document.body.classList.remove('using-mouse');
      }
    };

    document.body.addEventListener('mousedown', handleMouseDown);

    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('mousedown', handleMouseDown);
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default useDetectKey;
