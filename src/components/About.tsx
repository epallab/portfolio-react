import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.png';
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
                            <img src={profileImage} alt="Profile" className="profile-img" />
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
