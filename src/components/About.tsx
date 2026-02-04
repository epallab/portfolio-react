import { useEffect, useState } from 'react';
import { aboutStats } from '../data/portfolio-data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <div className="image-wrapper">
                            <div className="image-placeholder">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="about-text">
                        <h3>Full-Stack Developer & Problem Solver</h3>
                        <p>
                            I'm a passionate full-stack developer with expertise in building modern web and mobile
                            applications. With a strong foundation in both frontend and backend technologies, I
                            create seamless digital experiences that are not only visually appealing but also
                            highly functional and scalable.
                        </p>
                        <p>
                            My journey in software development has led me through diverse projects, from
                            enterprise-level applications using Java and Spring Boot to dynamic web applications
                            with the MERN stack, and cross-platform mobile apps with React Native.
                        </p>
                        <div className="about-stats">
                            {aboutStats.map((stat, index) => (
                                <StatCounter key={index} number={stat.number} label={stat.label} />
                            ))}
                        </div>
                        <a href="#contact" className="btn btn-primary">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface StatCounterProps {
    number: string;
    label: string;
}

function StatCounter({ number, label }: StatCounterProps) {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
    const [count, setCount] = useState(0);
    const targetNumber = parseInt(number);

    useEffect(() => {
        if (isIntersecting && count < targetNumber) {
            const increment = targetNumber / 50;
            const timer = setInterval(() => {
                setCount((prev) => {
                    const next = prev + increment;
                    if (next >= targetNumber) {
                        clearInterval(timer);
                        return targetNumber;
                    }
                    return next;
                });
            }, 40);
            return () => clearInterval(timer);
        }
    }, [isIntersecting, targetNumber, count]);

    return (
        <div className="stat" ref={ref}>
            <span className="stat-number">
                {Math.floor(count)}
                {number.includes('+') ? '+' : ''}
            </span>
            <span className="stat-label">{label}</span>
        </div>
    );
}
