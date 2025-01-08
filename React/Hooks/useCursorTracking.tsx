import { RefObject, useEffect, useState } from 'react';

interface CursorTrackingProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseMove?: () => void;
  ref: RefObject<HTMLElement>;
}

/**
 * Custom hook to track the cursor position and trigger events when the cursor enters, leaves or moves inside a given
 * element.
 *
 * @param param0.onMouseEnter - Function to be called when the cursor enters the element.
 * @param param0.onMouseLeave - Function to be called when the cursor leaves the element.
 * @param param0.onMouseMove - Function to be called when the cursor moves inside the element.
 * @param param0.ref - Reference to the element to track the cursor.
 */
const useCursorTracking = ({ onMouseEnter, onMouseLeave, onMouseMove, ref }: CursorTrackingProps) => {
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (isInside) {
        if (!isMouseInside) {
          setIsMouseInside(true);
          if (onMouseEnter) {
            onMouseEnter();
          }
        }
        if (onMouseMove) {
          onMouseMove();
        }
      } else {
        if (isMouseInside) {
          setIsMouseInside(false);
          if (onMouseLeave) {
            onMouseLeave();
          }
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref, isMouseInside, onMouseEnter, onMouseLeave, onMouseMove]);

  return { isMouseInside };
};

export default useCursorTracking;
