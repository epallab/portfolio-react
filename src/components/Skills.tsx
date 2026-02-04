import { skillCategories } from '../data/portfolio-data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { SkillCategory as SkillCategoryType } from '../types';

export function Skills() {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">Technologies I work with to bring ideas to life</p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={category.id} category={category} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface SkillCategoryProps {
    category: SkillCategoryType;
    delay: number;
}

function SkillCategory({ category, delay }: SkillCategoryProps) {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    const iconMap = {
        frontend: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.157 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.126l-.654 7.078z" />
            </svg>
        ),
        backend: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
        ),
        mobile: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
            </svg>
        ),
        database: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V13z" />
            </svg>
        ),
    };

    return (
        <div
            ref={ref}
            className={`skill-category ${isIntersecting ? 'active' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="category-header">
                <div className={`category-icon ${category.icon}-icon`}>{iconMap[category.icon]}</div>
                <h3>{category.title}</h3>
            </div>
            <div className="skill-list">
                {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} percent={skill.percent} animate={isIntersecting} />
                ))}
            </div>
        </div>
    );
}

interface SkillBarProps {
    name: string;
    percent: number;
    animate: boolean;
}

function SkillBar({ name, percent, animate }: SkillBarProps) {
    return (
        <div className="skill-item">
            <div className="skill-info">
                <span className="skill-name">{name}</span>
                <span className="skill-percent">{percent}%</span>
            </div>
            <div className="skill-bar">
                <div
                    className="skill-progress"
                    style={{ width: animate ? `${percent}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
}
