import { useEffect, useState } from 'react';

export function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if device has fine pointer (mouse)
        const mediaQuery = window.matchMedia('(pointer: fine)');
        setIsDesktop(mediaQuery.matches);

        if (!mediaQuery.matches) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
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
    }, []);

    if (!isDesktop) return null;

    return (
        <div
            className="cursor-glow"
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
                transition: 'opacity 0.3s ease',
                opacity: isVisible ? 1 : 0,
            }}
        />
    );
}
