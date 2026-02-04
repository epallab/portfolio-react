import { projects } from '../data/portfolio-data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { Project } from '../types';

export function Projects() {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Some of my recent work that I'm proud of</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: Project;
    delay: number;
}

function ProjectCard({ project, delay }: ProjectCardProps) {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLElement>({ threshold: 0.15 });

    return (
        <article
            ref={ref}
            className={`project-card ${isIntersecting ? 'active' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="project-image">
                <div className={`project-placeholder ${project.image}`}></div>
                <div className="project-overlay">
                    {project.liveUrl && (
                        <a href={project.liveUrl} className="project-link" aria-label="View Project">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                            </svg>
                        </a>
                    )}
                    {project.codeUrl && (
                        <a href={project.codeUrl} className="project-link" aria-label="View Code">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
