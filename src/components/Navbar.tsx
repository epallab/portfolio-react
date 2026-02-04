import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolio-data';
import { useScrollPosition, useActiveSection } from '../hooks/useScrollReveal';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollY = useScrollPosition();
    const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'experience', 'contact']);

    const isScrolled = scrollY > 50;

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="nav-logo">
                    <span className="logo-text">&lt;Dev /&gt;</span>
                </a>

                <button
                    className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Toggle navigation"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                onClick={handleNavClick}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
