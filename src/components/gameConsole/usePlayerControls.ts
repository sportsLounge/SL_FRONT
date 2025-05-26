import { useEffect, useState } from 'react';

export const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    sprint: false,
    shoot: false,
  });

  useEffect(() => {
    const handleKeyDown = (e:KeyboardEvent) => {
      if (e.code === 'KeyW') setMovement((m) => ({ ...m, forward: true }));
      if (e.code === 'KeyS') setMovement((m) => ({ ...m, backward: true }));
      if (e.code === 'KeyA') setMovement((m) => ({ ...m, left: true }));
      if (e.code === 'KeyD') setMovement((m) => ({ ...m, right: true }));
      if (e.code === 'ShiftLeft') setMovement((m) => ({ ...m, sprint: true }));
      if (e.code === 'Space') setMovement((m) => ({ ...m, shoot: true }));
    };

    const handleKeyUp = (e:KeyboardEvent) => {
      if (e.code === 'KeyW') setMovement((m) => ({ ...m, forward: false }));
      if (e.code === 'KeyS') setMovement((m) => ({ ...m, backward: false }));
      if (e.code === 'KeyA') setMovement((m) => ({ ...m, left: false }));
      if (e.code === 'KeyD') setMovement((m) => ({ ...m, right: false }));
      if (e.code === 'ShiftLeft') setMovement((m) => ({ ...m, sprint: false }));
      if (e.code === 'Space') setMovement((m) => ({ ...m, shoot: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};