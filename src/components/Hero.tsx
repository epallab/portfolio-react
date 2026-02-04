import { useTypingEffect } from '../hooks/useTypingEffect';
import { roles, socialLinks } from '../data/portfolio-data';
import { SocialIcon } from './icons/SocialIcon';

export function Hero() {
    const typedText = useTypingEffect(roles, 100, 50, 2000);

    return (
        <section id="home" className="hero">
            <div className="hero-bg"></div>
            <div className="hero-content">
                <p className="hero-greeting">Hello, I'm</p>
                <h1 className="hero-name">Biswa</h1>
                <h2 className="hero-title">
                    <span className="typing-text">{typedText}</span>
                    <span className="cursor">|</span>
                </h2>
                <p className="hero-description">
                    Crafting exceptional digital experiences with modern technologies.
                    Specialized in building scalable web and mobile applications.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">
                        View My Work
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Get In Touch
                    </a>
                </div>
                <div className="hero-socials">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label={social.name}
                        >
                            <SocialIcon name={social.icon} />
                        </a>
                    ))}
                </div>
            </div>
            <div className="scroll-indicator">
                <span>Scroll Down</span>
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
}
