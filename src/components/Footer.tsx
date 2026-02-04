import { socialLinks } from '../data/portfolio-data';
import { SocialIcon } from './icons/SocialIcon';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="logo-text">&lt;Dev /&gt;</span>
                        <p>Building the future, one line of code at a time.</p>
                    </div>
                    <div className="footer-socials">
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
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} All Rights Reserved. Made with ❤️</p>
                </div>
            </div>
        </footer>
    );
}
