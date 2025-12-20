import { useEffect, useRef, ReactNode } from 'react';
import { annotate } from 'rough-notation';
import type { RoughAnnotation } from 'rough-notation/lib/model';

interface RoughHighlightProps {
  children: ReactNode;
  type?: 'highlight' | 'circle' | 'underline' | 'box' | 'crossed-off' | 'strike-through' | 'bracket';
  color?: string;
  animate?: boolean;
  animationDuration?: number;
  delay?: number;
  strokeWidth?: number;
  padding?: number;
  multiline?: boolean;
}

const RoughHighlight = ({
  children,
  type = 'highlight',
  color = '#00f2ff',
  animate = true,
  animationDuration = 1000,
  delay = 500,
  strokeWidth = 2,
  padding = 5,
  multiline = true,
}: RoughHighlightProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);

  useEffect(() => {
    if (ref.current && !annotationRef.current) {
      const annotation = annotate(ref.current, {
        type,
        color,
        animate,
        animationDuration,
        strokeWidth,
        padding,
        multiline,
      });
      annotationRef.current = annotation;

      const timer = setTimeout(() => {
        annotation.show();
      }, delay);

      return () => {
        clearTimeout(timer);
        annotation.remove();
      };
    }
  }, [type, color, animate, animationDuration, delay, strokeWidth, padding, multiline]);

  return (
    <span ref={ref} className="relative inline-block">
      {children}
    </span>
  );
};

export default RoughHighlight;
