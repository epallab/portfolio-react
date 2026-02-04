import { experiences } from '../data/portfolio-data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { Experience as ExperienceType } from '../types';

export function Experience() {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">My professional journey</p>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.id} experience={exp} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface TimelineItemProps {
    experience: ExperienceType;
    delay: number;
}

function TimelineItem({ experience, delay }: TimelineItemProps) {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    return (
        <div
            ref={ref}
            className={`timeline-item ${isIntersecting ? 'active' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <span className="timeline-date">{experience.date}</span>
                <h3 className="timeline-title">{experience.title}</h3>
                <h4 className="timeline-company">{experience.company}</h4>
                <p className="timeline-description">{experience.description}</p>
            </div>
        </div>
    );
}
