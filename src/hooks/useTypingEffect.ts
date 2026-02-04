import { useState, useEffect } from 'react';

export function useTypingEffect(
    texts: string[],
    typingSpeed: number = 100,
    deletingSpeed: number = 50,
    pauseDuration: number = 2000
): string {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Typing
                    if (charIndex < currentText.length) {
                        setDisplayText(currentText.substring(0, charIndex + 1));
                        setCharIndex((prev) => prev + 1);
                    } else {
                        // Pause at end before deleting
                        setTimeout(() => setIsDeleting(true), pauseDuration);
                    }
                } else {
                    // Deleting
                    if (charIndex > 0) {
                        setDisplayText(currentText.substring(0, charIndex - 1));
                        setCharIndex((prev) => prev - 1);
                    } else {
                        setIsDeleting(false);
                        setTextIndex((prev) => (prev + 1) % texts.length);
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return displayText;
}
