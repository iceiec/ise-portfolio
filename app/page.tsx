'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Github,
  Database,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

type SectionId = (typeof navItems)[number]['id'];

const stats = [
  { value: '6+', label: 'Projects delivered' },
  { value: '10+', label: 'Technologies' },
];

const timeline = [
  {
    year: 'NOVEMBER 2025 - MAY 2026',
    title: 'Software Engineer Intern',
    org: 'Argon Software Development Service',
    copy:
      'Developed a production-grade full-stack web application from architecture to deployment using React.js, Node.js, Express.js, and Supabase. Built RESTful APIs, designed database schemas, implemented a platform-wide messaging system, and collaborated through Agile development and client coordination.',
  },
  {
    year: '2022 - 2026',
    title: 'Bachelor of Science in Information Technology',
    org: 'National University - Bulacan',
    copy:
      'Focused on mobile and web application development, with a steady emphasis on turning classroom projects into usable products.',
  },
  {
    year: 'Selected work',
    title: 'Full-Stack and mobile projects',
    org: 'Balai Alegria, FJA, Tomb Navigation, etc.',
    copy:
      'Academic and client-style projects that sharpened my ability to design, ship, and present complete end-to-end experiences.',
  },
] as const;

const projects = [
  {
    title: 'E-commerce Website (Full-Stack Web Application)',
    category: 'Company Project',
    image: '/nda.png',
    description:
      'A full-stack e-commerce application built with Next.js, TypeScript, and Supabase, featuring secure authentication, PayPal integration, role-based access control, and a responsive user experience.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PayPal API'],
    link: '#',
  },
  {
    title: 'E-commerce Platform v2',
    category: 'Company Project',
    image: '/nda.png',
    description:
      'An enhanced version of a full-stack e-commerce platform with additional business features, workflow improvements, and UI refinements built using the same modern technology stack.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Backend Messaging System',
    category: 'Company Project',
    image: '/nda.png',
    description:
      'A full-stack backend messaging system built with Next.js and Supabase, featuring secure authentication, real-time communication, and an intuitive admin interface.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Tomb Navigation & Contract Management',
    category: 'Mobile System',
    image: '/ceme.png',
    description:
      'A Flutter mobile app built to help users navigate cemetery spaces and manage contracts with clearer structure, faster access, and a more practical mobile experience.',
    tags: ['Flutter', 'Firebase', 'AI Integration', 'Maps API', 'Mobile UX'],
    link: '#',
  },
  {
    title: 'Balai Alegria Website',
    category: 'Web Application',
    image: '/balai.png',
    description:
      'A full-stack web application for a cultural center featuring event management, booking system, and community engagement tools.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    link: 'https://balai-alegria.vercel.app',
  },
  {
    title: 'FJA Management System',
    category: 'Web Application',
    image: '/fja.png',
    description:
      'A comprehensive management system for organizational operations with role-based access control and data visualization.',
    tags: ['React', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    link: '#',
  },
] as const;

const skillCategories = [
  {
    category: 'Frontend',
    icon: Layers3,
    skills: ['React.js', 'Next.js', 'Flutter', 'HTML', 'CSS', 'Bootstrap', 'JavaScript (ES6+)', 'Tailwind CSS'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Backend',
    icon: Code2,
    skills: ['Node.js', 'Express.js', 'PHP', 'RESTful API', 'REST API'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    category: 'Database & BaaS',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'Supabase', 'Firebase', 'PostgreSQL'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Tools & Workflow',
    icon: Sparkles,
    skills: ['Git', 'GitHub', 'Trello', 'Agile/Scrum', 'Vercel', 'Adobe Photoshop', 'Canva', 'JWT', 'Authentication & Authorization', 'RBAC'],
    color: 'from-blue-500 to-purple-500',
  },
];

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Smooth scroll to section
    const scrollToSection = (id: SectionId) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Update active section on scroll
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    // GSAP animations
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('[data-hero-item]', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Project cards animation
      gsap.from('[data-project-card]', {
        scrollTrigger: {
          trigger: '[data-projects-section]',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });

      // Skills cards animation
      gsap.from('[data-skill-card]', {
        scrollTrigger: {
          trigger: '[data-skills-section]',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.95,
        stagger: 0.08,
        duration: 0.6,
        ease: 'back.out',
      });

      // Timeline items animation
      gsap.from('[data-timeline-item]', {
        scrollTrigger: {
          trigger: '[data-experience-section]',
          start: 'top 80%',
        },
        opacity: 0,
        x: -40,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, [mounted]);

  const filteredProjects = selectedFilter
    ? projects.filter(p => p.tags.includes(selectedFilter))
    : projects;

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl transition-all">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="#home" className="font-bold text-xl text-primary hover:opacity-80 transition-opacity">
            PI
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-primary/15 text-primary'
                    : 'text-foreground/60 hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 px-6 py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all text-left ${
                    activeSection === item.id
                      ? 'bg-primary/15 text-primary'
                      : 'text-foreground/60 hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 md:py-20 space-y-20 md:space-y-32">
        {/* Hero Section */}
        <section id="home" className="relative py-12 md:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.1),rgba(255,255,255,0))]" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div data-hero-item className="space-y-4">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">Full-Stack Developer</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Build Fast.
                  </span>
                  <span className="block mt-2">Ship Quality.</span>
                </h1>
              </div>

              <div data-hero-item className="space-y-4">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  I transform ideas into production-ready applications. From concept to deployment, I bring technical excellence and creative problem-solving to every project.
                </p>
                <p className="text-sm text-foreground/60">
                  React • Next.js • Node.js • TypeScript • Supabase • Firebase
                </p>
              </div>

              <div data-hero-item className="flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                >
                  View My Work
                </button>
                <a
                  href="mailto:isaiah.aguinaldo2@gmail.com"
                  className="px-6 py-3 border border-border bg-card rounded-lg font-semibold hover:bg-muted transition-all"
                >
                  Get In Touch
                </a>
              </div>

              <div data-hero-item className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-lg bg-card border border-border/50">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="text-sm text-foreground/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div data-hero-item className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Pierre Isaiah Aguinaldo"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12" data-projects-section>
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              A selection of projects that showcase my ability to build scalable, user-focused applications from start to finish.
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === null
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card hover:bg-muted'
              }`}
            >
              All
            </button>
            {allTags.slice(0, 8).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedFilter(selectedFilter === tag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card hover:bg-muted'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                data-project-card
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-foreground/60 mt-2">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-full text-xs bg-muted border border-border/50 text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12" data-experience-section>
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold">Experience & Education</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                data-timeline-item
                className="group relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:w-6 md:h-6" />
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[7px] top-8 w-0.5 h-24 bg-gradient-to-b from-primary to-primary/0 md:left-[11px]" />
                )}

                <div className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-primary font-semibold text-sm">{item.org}</p>
                    </div>
                    <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">{item.year}</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12" data-skills-section>
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Skills</p>
            <h2 className="text-4xl md:text-5xl font-bold">Technical Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.category}
                  data-skill-card
                  className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-muted border border-border/50 text-foreground/70 hover:border-primary/50 hover:text-foreground transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20">
          <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-card via-card to-muted p-8 md:p-16 text-center space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold">Let's Build Something Great</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="mailto:isaiah.aguinaldo2@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                <Mail size={18} />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/isaiahaguinaldo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border bg-card rounded-lg font-semibold hover:bg-muted transition-all"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/iceiec"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border bg-card rounded-lg font-semibold hover:bg-muted transition-all"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-foreground/60">
                © {new Date().getFullYear()} Pierre Isaiah Aguinaldo. Available for freelance and full-time opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
