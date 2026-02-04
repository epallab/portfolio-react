import { useEffect, useState } from 'react';

export function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(pointer: fine)');
        setIsDesktop(mediaQuery.matches);

        if (!mediaQuery.matches) return;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    // Smooth follow effect for the outer ring
    useEffect(() => {
        if (!isDesktop) return;

        let animationFrameId: number;

        const animateCursor = () => {
            setCursorPosition((prev) => {
                const dx = mousePosition.x - prev.x;
                const dy = mousePosition.y - prev.y;
                return {
                    x: prev.x + dx * 0.15, // Smooth factor
                    y: prev.y + dy * 0.15,
                };
            });
            animationFrameId = requestAnimationFrame(animateCursor);
        };

        animateCursor();

        return () => cancelAnimationFrame(animationFrameId);
    }, [mousePosition, isDesktop]);

    if (!isDesktop) return null;

    return (
        <>
            {/* Trailing Glow Ring */}
            <div
                className="cursor-ring"
                style={{
                    position: 'fixed',
                    left: cursorPosition.x,
                    top: cursorPosition.y,
                    width: '40px',
                    height: '40px',
                    border: '2px solid rgba(99, 102, 241, 0.5)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)',
                    transition: 'opacity 0.3s ease, transform 0.1s ease',
                    opacity: isVisible ? 1 : 0,
                    backdropFilter: 'blur(2px)',
                }}
            />
            {/* Instant Dot */}
            <div
                className="cursor-dot"
                style={{
                    position: 'fixed',
                    left: mousePosition.x,
                    top: mousePosition.y,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--accent-primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    transform: 'translate(-50%, -50%)',
                    transition: 'opacity 0.3s ease',
                    opacity: isVisible ? 1 : 0,
                    boxShadow: '0 0 10px var(--accent-primary)',
                }}
            />
        </>
    );
}
