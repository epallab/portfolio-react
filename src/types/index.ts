// Portfolio TypeScript Types

export interface Skill {
    name: string;
    percent: number;
}

export interface SkillCategory {
    id: string;
    title: string;
    icon: 'frontend' | 'backend' | 'mobile' | 'database';
    skills: Skill[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: 'ecommerce' | 'enterprise' | 'mobile' | 'api';
    technologies: string[];
    liveUrl?: string;
    codeUrl?: string;
}

export interface Experience {
    id: string;
    date: string;
    title: string;
    company: string;
    description: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: 'github' | 'linkedin' | 'twitter';
}

export interface NavLink {
    label: string;
    href: string;
}
