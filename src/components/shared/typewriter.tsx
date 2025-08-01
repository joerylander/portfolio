'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  /** Shared text that stays constant (e.g., "I'm a ") */
  prefix?: string;
  /** Words to cycle through (e.g., ["Freelancer", "Developer", "Designer"]) */
  words: string[];
  /** Optional text after the cycling word */
  suffix?: string;
  /** Typing speed in milliseconds per character @default 100 */
  speed?: number;
  /** Backspacing speed in milliseconds per character @default 50 */
  backspaceSpeed?: number;
  /** Pause duration between typing and backspacing in milliseconds @default 2000 */
  pauseDuration?: number;
  /** Whether to show the blinking caret @default true */
  showCaret?: boolean;
  /** Additional CSS classes to apply to the component */
  className?: string;
  /** Whether to loop through words continuously @default true */
  loop?: boolean;
  /** Called when animation completes (single word or full cycle) */
  onComplete?: () => void;
  /** Called after each full cycle through all words */
  onCycleComplete?: () => void;
  /** Initial delay before animation starts in milliseconds @default 0 */
  initialDelay?: number;
}

/**
 * A typewriter effect component that types and optionally cycles through multiple words.
 *
 * @example
 * ```tsx
 * // Simple typewriter with cycling words
 * <Typewriter
 *   prefix="I'm a "
 *   words={['Developer', 'Designer', 'Freelancer']}
 *   showCaret={true}
 * />
 *
 * // Single word with custom timing
 * <Typewriter
 *   words={['Hello World']}
 *   speed={150}
 *   loop={false}
 * />
 * ```
 */
export default function Typewriter({
  prefix = '',
  words,
  suffix = '',
  speed = 100,
  backspaceSpeed = 50,
  pauseDuration = 2000,
  showCaret = true,
  className,
  loop = true,
  onComplete,
  onCycleComplete,
  initialDelay = 0,
}: TypewriterProps) {
  const [isClient, setIsClient] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !words.length) return;

    let currentWordIndex = 0,
      currentCharIndex = 0,
      isTyping = true,
      timer: NodeJS.Timeout;

    const typeNext = () => {
      const currentWord = words[currentWordIndex];

      if (isTyping) {
        // Typing phase
        if (currentCharIndex <= currentWord.length) {
          const currentText = currentWord.slice(0, currentCharIndex);
          setDisplayText(currentText + suffix);
          currentCharIndex++;
          timer = setTimeout(typeNext, speed);
        } else {
          // Finished typing current word
          if (
            words.length === 1 ||
            (currentWordIndex === words.length - 1 && !loop)
          ) {
            // Single word or last word without looping
            onComplete?.();
            if (words.length > 1) onCycleComplete?.();
            return;
          } else {
            // Start pause, then backspace
            timer = setTimeout(() => {
              isTyping = false;
              currentCharIndex = currentWord.length;
              typeNext();
            }, pauseDuration);
          }
        }
      } else {
        // Backspacing phase
        if (currentCharIndex > 0) {
          currentCharIndex--;
          const currentText = currentWord.slice(0, currentCharIndex);
          setDisplayText(currentText + suffix);
          timer = setTimeout(typeNext, backspaceSpeed);
        } else {
          // Finished backspacing, move to next word
          currentWordIndex = (currentWordIndex + 1) % words.length;
          isTyping = true;
          currentCharIndex = 0;

          if (currentWordIndex === 0 && loop) {
            onCycleComplete?.();
          }

          timer = setTimeout(typeNext, speed);
        }
      }
    };

    // Start the animation
    timer = setTimeout(typeNext, initialDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [
    isClient,
    words,
    prefix,
    suffix,
    speed,
    backspaceSpeed,
    pauseDuration,
    loop,
    onComplete,
    onCycleComplete,
    initialDelay,
  ]);

  // Show static text during SSR and before hydration
  if (!isClient) {
    return (
      <p className={className}>
        {prefix ? prefix + ' ' : ''}
        <span className={cn('inline-block')}>
          {words[0] || ''}
          {suffix}
        </span>
      </p>
    );
  }

  return (
    <p className={className}>
      {prefix ? prefix + ' ' : ''}
      <span
        className={cn(
          'border-b-accent-foreground inline-block border-b-2',
          showCaret && 'blinking-caret',
        )}
      >
        {displayText}
      </span>
    </p>
  );
}
