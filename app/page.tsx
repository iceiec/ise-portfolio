'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ArrowRight, Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Code, Database, Settings } from 'lucide-react';

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const expertise = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, interactive web applications with React, Next.js, and modern CSS',
      icon: Code,
    },
    {
      title: 'Backend Development',
      description: 'Developing scalable APIs and server logic with Node.js, Express.js, and RESTful architecture',
      icon: Settings,
    },
    {
      title: 'Database Design',
      description: 'Designing efficient databases with PostgreSQL, MongoDB, and Firebase for optimal performance',
      icon: Database,
    },
    {
      title: 'Mobile Apps',
      description: 'Creating native mobile applications with Flutter for iOS and Android platforms',
      icon: Menu,
    },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce application with secure authentication, payment processing, and role-based access control.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      category: 'fullstack',
      featured: true,
      link: '#',
    },
    {
      title: 'Tomb Navigation App',
      description: 'Mobile application for cemetery navigation with contract management and AI-powered features.',
      tech: ['Flutter', 'Firebase', 'Maps API'],
      category: 'mobile',
      featured: false,
      link: '#',
    },
    {
      title: 'Backend Messaging System',
      description: 'Real-time messaging system with authentication, admin interface, and secure communication.',
      tech: ['Node.js', 'Express', 'Supabase', 'TypeScript'],
      category: 'backend',
      featured: false,
      link: '#',
    },
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Academic Projects',
      date: '2023 - 2024',
      description: 'Built multiple full-stack applications with modern technologies and best practices',
    },
    {
      title: 'Internship - Software Development',
      company: 'Tech Company',
      date: '2023',
      description: 'Worked on frontend and backend development, learned production-grade code practices',
    },
    {
      title: 'Web Development',
      company: 'Personal Projects',
      date: '2022 - Present',
      description: 'Continuously learning and building projects to improve skills in full-stack development',
    },
  ];

  const technologies = {
    Frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Flutter', 'Bootstrap'],
    Backend: ['Node.js', 'Express.js', 'PHP', 'RESTful APIs'],
    Database: ['Supabase', 'Firebase', 'PostgreSQL', 'MongoDB', 'MySQL'],
    Tools: ['Git', 'GitHub', 'Vercel', 'Agile/Scrum', 'Adobe Photoshop'],
  };

  const filteredProjects = activeFilter 
    ? projects.filter(p => p.category === activeFilter) 
    : projects;

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="#" className="text-xl font-bold text-primary">
              Pierre Isaiah
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#expertise" className="text-sm text-foreground/70 hover:text-primary transition">
                Expertise
              </Link>
              <Link href="#work" className="text-sm text-foreground/70 hover:text-primary transition">
                Work
              </Link>
              <Link href="#experience" className="text-sm text-foreground/70 hover:text-primary transition">
                Experience
              </Link>
              <Link href="#contact" className="text-sm text-foreground/70 hover:text-primary transition">
                Contact
              </Link>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 hover:bg-muted rounded-lg transition"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg transition"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border mt-4 pt-4 flex flex-col gap-3">
              <Link href="#expertise" className="text-sm py-2 text-foreground/70 hover:text-primary transition">
                Expertise
              </Link>
              <Link href="#work" className="text-sm py-2 text-foreground/70 hover:text-primary transition">
                Work
              </Link>
              <Link href="#experience" className="text-sm py-2 text-foreground/70 hover:text-primary transition">
                Experience
              </Link>
              <Link href="#contact" className="text-sm py-2 text-foreground/70 hover:text-primary transition">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Pierre Isaiah Aguinaldo
              </h1>
              <p className="text-lg text-foreground/70 mb-2">
                Full-Stack Developer
              </p>
              <p className="text-base text-foreground/60 mb-6">
                Building production-grade web and mobile applications with clean code, modern technologies, and attention to detail.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://github.com/iceiec"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-border text-foreground rounded-lg hover:bg-muted transition font-medium"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden border border-border shadow-lg">
                <Image
                  src="/profile.png"
                  alt="Pierre Isaiah Aguinaldo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-12">My Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 border border-border rounded-lg hover:border-primary/50 transition">
                  <Icon size={32} className="text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-12">My Work</h2>

          {/* Featured Project */}
          {featuredProject && (
            <div className="mb-12 p-8 border border-border rounded-lg bg-card hover:border-primary/50 transition">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-primary">Featured Project</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{featuredProject.title}</h3>
              <p className="text-foreground/70 mb-4">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-muted text-sm rounded text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={featuredProject.link}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition"
              >
                View Project
                <ExternalLink size={16} />
              </a>
            </div>
          )}

          {/* Project Filter */}
          <div className="flex gap-3 mb-8 flex-wrap">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground/70 hover:text-foreground'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === 'fullstack'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground/70 hover:text-foreground'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === 'mobile'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground/70 hover:text-foreground'
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setActiveFilter('backend')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === 'backend'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground/70 hover:text-foreground'
              }`}
            >
              Backend
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.title} className="p-6 border border-border rounded-lg hover:border-primary/50 transition">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-muted text-xs rounded text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-12">Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4 text-primary">{category}</h3>
                <ul className="space-y-2">
                  {techs.map((tech) => (
                    <li key={tech} className="text-sm text-foreground/70 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mt-1"></div>
                  {index !== experience.length - 1 && (
                    <div className="w-0.5 h-20 bg-border mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-primary font-medium">{item.company}</p>
                  <p className="text-sm text-foreground/60 mb-2">{item.date}</p>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 border-t border-border">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-foreground/70 mb-8">
              I'm always interested in hearing about new opportunities. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:isaiah.aguinaldo2@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
              >
                <Mail size={18} />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/isaiahaguinaldo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition font-medium"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/iceiec"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition font-medium"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Pierre Isaiah Aguinaldo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
