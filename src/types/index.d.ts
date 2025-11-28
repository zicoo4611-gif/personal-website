// This file defines TypeScript types and interfaces used throughout the project.

export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface AboutInfo {
    bio: string;
    skills: string[];
    experience: Experience[];
}

export interface Experience {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}