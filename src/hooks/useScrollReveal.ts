import { useState, useEffect, useCallback } from 'react';

export function useScrollReveal(delay: number = 0) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const ref = useCallback(
        (node: HTMLElement | null) => {
            if (!node || hasAnimated) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setTimeout(() => {
                            setIsVisible(true);
                            setHasAnimated(true);
                        }, delay);
                        observer.unobserve(node);
                    }
                },
                { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
            );

            observer.observe(node);

            return () => observer.disconnect();
        },
        [delay, hasAnimated]
    );

    return { ref, isVisible };
}

export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            let current = '';

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;

                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        current = id;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeSection;
}
