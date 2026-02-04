import type { SkillCategory, Project, Experience, SocialLink, NavLink } from '../types';

export const navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export const roles: string[] = [
    'Full-Stack Developer',
    'Java Expert',
    'React Specialist',
    'React Native Developer',
    'MERN Stack Developer',
    'Spring Boot Engineer',
];

export const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
];

export const aboutStats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
];

export const skillCategories: SkillCategory[] = [
    {
        id: 'frontend',
        title: 'Frontend Development',
        icon: 'frontend',
        skills: [
            { name: 'React.js', percent: 95 },
            { name: 'JavaScript / TypeScript', percent: 90 },
            { name: 'HTML5 / CSS3', percent: 95 },
        ],
    },
    {
        id: 'backend',
        title: 'Backend Development',
        icon: 'backend',
        skills: [
            { name: 'Java', percent: 90 },
            { name: 'Spring Boot', percent: 88 },
            { name: 'Node.js / Express', percent: 85 },
        ],
    },
    {
        id: 'mobile',
        title: 'Mobile Development',
        icon: 'mobile',
        skills: [
            { name: 'React Native', percent: 92 },
            { name: 'Expo', percent: 88 },
            { name: 'Mobile UI/UX', percent: 85 },
        ],
    },
    {
        id: 'database',
        title: 'Database & Tools',
        icon: 'database',
        skills: [
            { name: 'MongoDB', percent: 88 },
            { name: 'PostgreSQL / MySQL', percent: 85 },
            { name: 'Git / Docker', percent: 90 },
        ],
    },
];

export const projects: Project[] = [
    {
        id: 'shophub',
        title: 'ShopHub E-Commerce Platform',
        description:
            'A full-featured e-commerce platform with user authentication, product management, shopping cart, payment integration, and admin dashboard.',
        image: 'ecommerce',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 'erp',
        title: 'Enterprise Resource Manager',
        description:
            'A comprehensive ERP system with real-time analytics dashboard, role-based access control, inventory management, and automated reporting.',
        image: 'enterprise',
        technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 'fittrack',
        title: 'FitTrack Mobile App',
        description:
            'A cross-platform fitness tracking app with workout plans, progress tracking, social features, and integration with health devices.',
        image: 'mobile',
        technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 'secureapi',
        title: 'SecureAPI Gateway',
        description:
            'A robust API gateway with JWT authentication, rate limiting, request validation, and comprehensive API documentation.',
        image: 'api',
        technologies: ['Java', 'Spring Boot', 'Redis', 'Docker'],
        liveUrl: '#',
        codeUrl: '#',
    },
];

export const experiences: Experience[] = [
    {
        id: 'exp1',
        date: '2023 - Present',
        title: 'Senior Full-Stack Developer',
        company: 'Tech Solutions Inc.',
        description:
            'Leading development of enterprise applications using Spring Boot microservices and React. Mentoring junior developers and implementing best practices for code quality.',
    },
    {
        id: 'exp2',
        date: '2021 - 2023',
        title: 'Full-Stack Developer',
        company: 'Digital Agency Co.',
        description:
            'Developed MERN stack applications for clients across various industries. Built and deployed React Native mobile applications for iOS and Android.',
    },
    {
        id: 'exp3',
        date: '2019 - 2021',
        title: 'Junior Developer',
        company: 'StartUp Labs',
        description:
            'Started career building web applications with JavaScript and Node.js. Gained experience with agile methodologies and collaborative development.',
    },
];

export const contactInfo = {
    email: 'hello@example.com',
    location: 'Available Worldwide',
    phone: '+1 (234) 567-890',
};
