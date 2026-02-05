import { useState, useEffect } from 'react';
import userData from '../data/userData.json';
import userDataEs from '../data/userData_es.json';
import { useLanguage } from './useLanguage';

export interface UserData {
  personal: {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    profileImage: string;
  };
  brand: {
    name: string;
    tagline: string;
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  about: {
    description: string[];
    whatIDo: string[];
    stats: Array<{ number: string; label: string }>;
  };
  skills: {
    categories: Array<{
      title: string;
      skills: string[];
      color: string;
    }>;
    proficiency: Array<{
      skill: string;
      level: number;
    }>;
  };
  projects: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    status: 'PoC' | 'Implemented';
    results: string[];
    github?: string;
    demo?: string;

    caseStudyPath?: string;
  }>;
  experience: {
    work: Array<{
      title: string;
      company: string;
      location: string;
      period: string;
      description: string;
      achievements: string[];
    }>;
    education: Array<{
      degree: string;
      school: string;
      location: string;
      period: string;
      description: string;
      achievements: string[];
    }>;
    certifications: Array<{
      title: string;
      issuer: string;
      date: string;
    }>;
  };
}

export const useUserData = (): UserData => {
  const { language } = useLanguage();
  // Initialize with the data corresponding to the current language
  const [data, setData] = useState<UserData>((language === 'es' ? userDataEs : userData) as UserData);

  useEffect(() => {
    // Update data when language changes
    setData((language === 'es' ? userDataEs : userData) as UserData);
  }, [language]);

  return data;
};