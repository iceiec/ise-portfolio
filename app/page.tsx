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
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

type SectionId = (typeof navItems)[number]['id'];

const heroMessages = [
  'Open to work as a full-stack developer',
  'I am Pierre Isaiah I. Aguinaldo',
  'I am a full-stack developer',
];

const stats = [
  { value: '6+', label: 'Projects delivered' },
  { value: '10+', label: 'Tools and technologies' },
  
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
  },
  {
   title: 'E-commerce Platform v2',
  category: 'Company Project',
  image: '/nda.png',
  description:
  'An enhanced version of a full-stack e-commerce platform with additional business features, workflow improvements, and UI refinements built using the same modern technology stack.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
  },
  {
    title: 'Backend Messaging System',
    category: 'Company Project',
    image: '/nda.png',
    description:
  'A full-stack backend messaging system built with Next.js and Supabase, featuring secure authentication, real-time communication, and an intuitive admin interface.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
  },
  {
    title: 'Tomb Navigation & Contract Management',
    category: 'Mobile System',
    image: '/ceme.png',
    description:
      'A Flutter-based mobile system for cemetery navigation and contract management, designed around clarity, guided workflows, and practical utility. Click to see the case study!',
    tags: ['Flutter', 'Firebase', 'AI Integration', 'Maps API', 'Google Gemini'],
  },
  {
    title: 'Balai Alegria E-Commerce',
    category: 'Booking platform case study',
    image: '/balai.png',
    description:
      'A resort booking experience with a secure payment flow and a clean interface that makes discovery, booking, and checkout feel straightforward.',
    tags: ['HTML/CSS', 'Express.JS', 'Node.Js', 'PayMongo API'],
    link: 'https://balai-orpin.vercel.app/',
  },
  {
    title: 'FJA Basketball Scheduling Web Application',
    category: 'Dashboard case study',
    image: '/fja.png',
    description:
      'An operations-focused scheduling and reporting system that streamlines workflows, automates monthly reports, and reduces manual coordination.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
  },
] as const;

const skills = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: [
      'JavaScript (ES6+)',
      'TypeScript',
      'PHP',
      'Java',
      'C#',
      'Dart',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Frontend Development',
    icon: Layers3,
    items: [
      'React',
      'Next.js',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend Development',
    icon: Code2,
    items: [
      'Node.js',
      'Express.js',
      'Laravel',
      'FastAPI',
      'RESTful API Development',
    ],
  },
  {
    title: 'Databases / BaaS',
    icon: Database,
    items: ['Supabase', 'Firebase', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Security / Authentication',
    icon: Sparkles,
    items: ['JWT', 'Role-Based Access Control (RBAC)', 'Authentication & Authorization'],
  },
  {
    title: 'Tools & Version Control',
    icon: Github,
    items: ['Git', 'GitHub', 'Trello', 'Vercel', 'AI-Assisted Development Tools', 'GitHub Copilot'],
  },
  {
    title: 'Design Tools',
    icon: Layers3,
    items: ['Figma', 'Canva', 'Adobe Photoshop'],
  },
] as const;

const skillDescriptions: Record<string, string> = {
  'JavaScript (ES6+)': 'Modern JavaScript syntax, async/await, and browser APIs.',
  TypeScript: 'Typed JavaScript for safer large-scale codebases.',
  Python: 'Scripting, automation, and backend services.',
  PHP: 'Server-side scripting and Laravel experience.',
  Java: 'Object-oriented programming and ecosystem basics.',
  'C#': 'General-purpose language; familiarity with .NET basics.',
  Dart: 'Flutter mobile development language.',
  'React.js': 'Component-driven UI, hooks, and state management.',
  'Next.js': 'Server rendering, routing, and optimized builds.',
  HTML5: 'Semantic markup and accessibility basics.',
  CSS3: 'Layout, responsive design, and modern CSS features.',
  Bootstrap: 'Rapid responsive UI building with components.',
  'Responsive Web Design': 'Designing layouts that adapt to devices.',
  'Node.js': 'Server-side JavaScript runtime and ecosystems.',
  'Express.js': 'Lightweight web servers and REST APIs.',
  FastAPI: 'High-performance Python APIs with async support.',
  'RESTful API Development': 'Designing resource-based API endpoints.',
  MySQL: 'Relational database design and CRUD operations.',
  Supabase: 'BaaS with auth, real-time, and Postgres under-the-hood.',
  Firebase: 'Realtime DB, auth, and hosting for quick apps.',
  PostgreSQL: 'Advanced relational DB features and SQL.',
  JWT: 'Token-based authentication for stateless APIs.',
  'Authentication & Authorization': 'Managing access and identity flows.',
  RBAC: 'Role-based permission modeling.',
  Git: 'Version control fundamentals and branching.',
  GitHub: 'Repository hosting, PR workflow, and actions basics.',
  Trello: 'Task tracking and simple kanban workflows.',
  'Agile/Scrum': 'Iterative planning, standups, and sprints.',
  Figma: 'Interface design and collaborative prototyping.',
  'Adobe Photoshop': 'Image editing and visual polish.',
  Canva: 'Quick visual assets and marketing graphics.',
};

const skillEmoji: Record<string, string> = {
  'JavaScript (ES6+)': '🟨',
  TypeScript: '🔷',
  Python: '🐍',
  PHP: '🐘',
  Java: '☕',
  'C#': '♯',
  Dart: '🎯',
  'React.js': '⚛️',
  'Next.js': '➡️',
  HTML5: '🌐',
  CSS3: '🎨',
  Bootstrap: '🅱️',
  'Responsive Web Design': '📱',
  'Node.js': '🟩',
  'Express.js': '🚂',
  FastAPI: '⚡',
  'RESTful API Development': '🔗',
  MySQL: '🐬',
  Supabase: '🧩',
  Firebase: '🔥',
  PostgreSQL: '🐘',
  JWT: '🔐',
  'Authentication & Authorization': '🔒',
  RBAC: '🛡️',
  Git: '🔧',
  GitHub: '🐙',
  Trello: '📋',
  'Agile/Scrum': '⚙️',
  Figma: '🎨',
  'Adobe Photoshop': '🖌️',
  Canva: '🖼️',
};

const getSkillIcon = (item: string) => {
  const key = item.toLowerCase();

  if (key.includes('git')) return <Github size={14} />;
  if (key.includes('mysql') || key.includes('postgres') || key.includes('firebase') || key.includes('supabase'))
    return <Database size={14} />;
  if (key.includes('react') || key.includes('next')) return <Layers3 size={14} />;
  if (key.includes('node') || key.includes('express')) return <Code2 size={14} />;
  if (key.includes('jwt') || key.includes('auth')) return <Sparkles size={14} />;

  // JS / TS badge
  if (key.includes('javascript')) {
    return (
      <div className="flex h-5 w-6 items-center justify-center rounded-sm bg-yellow-500 dark:bg-yellow-400 text-xs font-semibold text-slate-900 dark:text-slate-950">JS</div>
    );
  }

  if (key.includes('typescript')) {
    return (
      <div className="flex h-5 w-6 items-center justify-center rounded-sm bg-sky-500 dark:bg-sky-400 text-xs font-semibold text-white dark:text-slate-950">TS</div>
    );
  }

  // fallback: initials badge
  const initials = item
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // pick color deterministically
  const colors = ['bg-emerald-500 dark:bg-emerald-400', 'bg-cyan-500 dark:bg-cyan-400', 'bg-amber-500 dark:bg-amber-400', 'bg-sky-500 dark:bg-sky-400', 'bg-pink-500 dark:bg-pink-400'];
  let hash = 0;
  for (let i = 0; i < item.length; i++) hash = (hash << 5) - hash + item.charCodeAt(i);
  const color = colors[Math.abs(hash) % colors.length];

  return <div className={`flex h-5 w-6 items-center justify-center rounded-sm text-xs font-semibold text-white dark:text-slate-950 ${color}`}>{initials}</div>;
};

const tombMobileScreens = ['/mob1.png', '/mob2.png', '/mob3.png', '/mob4.png', '/mob5.png', '/mob6.png', '/mob7.png', '/mob8.png'];

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [heroMessageIndex, setHeroMessageIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const stages = [
      { progress: 20, delay: 300 },
      { progress: 50, delay: 800 },
      { progress: 78, delay: 1300 },
      { progress: 99, delay: 1800 },
      { progress: 100, delay: 2300 },
    ];

    const timers = stages.map((stage) =>
      window.setTimeout(() => setLoadingProgress(stage.progress), stage.delay)
    );

    const finalTimer = window.setTimeout(() => {
      setIsExiting(true);
      window.setTimeout(() => setIsLoading(false), 600);
    }, 2800);

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.clearTimeout(finalTimer);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroMessageIndex((current) => (current + 1) % heroMessages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setScrollProgress(progress);

      const currentSection = navItems.find(({ id }) => {
        const element = document.getElementById(id);
        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!rootRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-heading', {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.1,
      });

      gsap.from('.hero-copy', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
      });

      gsap.from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.25,
      });

      gsap.from('.hero-stat', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 72%',
        },
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
      });

      gsap.to('.hero-parallax', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        const speed = Number(element.dataset.parallax ?? '8');

        gsap.to(element, {
          yPercent: speed * -1,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current ?? element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      if (focusRef.current) {
        const focusCards = gsap.utils.toArray<HTMLElement>('[data-focus-card]');

        const focusTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: focusRef.current,
            start: 'top top',
            end: '+=120%',
            pin: true,
            scrub: 1,
          },
        });

        focusTimeline
          .fromTo(
            '.focus-kicker',
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
          )
          .fromTo(
            '.focus-heading',
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            '<0.05'
          )
          .fromTo(
            focusCards,
            { opacity: 0, y: 40, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.16,
              duration: 0.7,
              ease: 'power2.out',
            },
            '<0.12'
          )
          .fromTo(
            '.focus-side-line',
            { scaleX: 0 },
            { scaleX: 1, transformOrigin: 'left center', duration: 0.5, ease: 'power2.out' },
            '<'
          );
      }

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 82%',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-project]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%',
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);


  const scrollToSection = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openTombProject = () => {
    setOpenProject('tomb');
  };

  const closeProject = () => {
    setOpenProject(null);
  };

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      {isLoading && (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-600 ease-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
          <div className="loading-screen flex flex-col items-center gap-6 text-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border border-primary/30 bg-foreground/5" />
              <div className="absolute inset-2 rounded-full border border-secondary/40" />
              <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-secondary" style={{ animationDuration: '2s' }} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary animate-[fadeIn_0.6s_ease]">
                Initializing portfolio
              </p>
              <p className="mt-2 text-sm text-foreground/60 animate-[fadeIn_0.8s_ease_0.1s_both]">
                Building a premium experience
              </p>
            </div>
            <div className="mt-6 w-48">
              <div className="h-px overflow-hidden rounded-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent">
                <div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-foreground/50">{Math.round(loadingProgress)}%</p>
            </div>
          </div>
        </div>
      )}

      <aside className="fixed inset-y-0 left-0 z-50 hidden w-24 border-r border-border bg-background/50 backdrop-blur-xl xl:flex">
        <div className="flex h-full w-full flex-col items-center justify-between px-4 py-6">
          <Link
            href="#home"
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-sm font-semibold tracking-[0.3em] text-foreground hover:bg-muted transition-colors"
          >
            PI
          </Link>

          <div className="flex flex-1 items-center py-8">
            <div className="relative h-full w-px rounded-full bg-border">
              <div
                className="absolute left-0 top-0 w-px rounded-full bg-gradient-to-b from-primary via-secondary to-accent"
                style={{ height: `${scrollProgress}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-foreground/60">
            <a href="https://github.com/iceiec" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/isaiahaguinaldo"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:isaiah.aguinaldo2@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </aside>

      <div className="xl:pl-24">
        <header className="sticky top-0 z-40 border-b border-border bg-background/50 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
            <Link href="#home" className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
              Pierre Isaiah
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-border bg-card p-1 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    activeSection === item.id
                      ? 'bg-primary/15 text-primary font-medium'
                      : 'text-foreground/60 hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:bg-muted transition-colors text-foreground"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <a
              href="/PierreIsaiahAguinaldo_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-hidden="true"
              tabIndex={-1}
              className="hidden"
            >
              Resume
              <ArrowRight size={16} />
            </a>
          </div>
        </header>

        <main>
          <section
            id="home"
            ref={heroRef}
            className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-24 lg:pb-32 lg:pt-28"
          >
            <div className="absolute inset-0 -z-10 opacity-dark:40 opacity-light:20 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] dark:from-primary/15 dark:via-background dark:to-background from-primary/8 via-background to-background" />
            <div className="hero-parallax absolute -right-24 top-8 h-72 w-72 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl" />
            <div className="hero-parallax absolute left-[-5rem] top-48 h-96 w-96 rounded-full bg-secondary/10 dark:bg-secondary/8 blur-3xl" />

            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
              <div>
                <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80">
                  <Sparkles size={16} className="text-primary" />
                  Full-stack developer
                </div>

                <h1 className="hero-heading mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  <span key={heroMessageIndex} className="inline-block animate-[fadeIn_0.5s_ease]">
                    {heroMessages[heroMessageIndex]}
                  </span>
                </h1>

                <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-foreground/70 sm:text-xl">
                  Full-Stack Developer focused on building production-grade applications with clean architecture, polished UX, and seamless performance. I transform business requirements into robust web and mobile solutions.
                </p>

                <p className="hero-copy mt-4 max-w-2xl text-base leading-7 text-foreground/60">
                  React.js, Next.js, Node.js, TypeScript, Supabase, Firebase — built 6+ projects from concept to deployment.
                </p>
                  

                <div className="hero-cta mt-8 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold transition hover:bg-primary/90 shadow-lg hover:shadow-primary/25"
                  >
                    View selected work
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    Start a conversation
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                    <MapPin size={14} className="text-primary" />
                    Philippines
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                    <Code2 size={14} className="text-secondary" />
                    Full-stack developer
                  </span>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="hero-stat rounded-2xl border border-border bg-card p-5 shadow-lg dark:shadow-black/50 light:shadow-black/5 hover:border-primary/50 transition-all"
                    >
                      <div className="text-3xl font-semibold text-foreground">{stat.value}</div>
                      <p className="mt-2 text-sm leading-6 text-foreground/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div data-parallax="10" className="hero-parallax absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 dark:from-primary/15 via-secondary/10 dark:via-secondary/8 to-accent/20 dark:to-accent/15 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/50 dark:bg-card/30 p-4 shadow-2xl dark:shadow-black/50 light:shadow-black/10 backdrop-blur-xl">
                  <div data-parallax="6" className="relative h-[500px] overflow-hidden rounded-[1.5rem] border border-border">
                    <Image
                      src="/profile.png"
                      alt="Portrait of Pierre Isaiah Aguinaldo"
                      fill
                      priority
                      className="object-cover"
                      style={{ objectPosition: 'center 18%' }}
                    />
                    <div data-parallax="2" className="absolute inset-0 bg-gradient-to-t dark:from-background via-background/30 dark:via-background/20 to-transparent from-card via-card/20" />

                    <div data-parallax="4" className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-primary/30 dark:border-primary/20 bg-background/60 dark:bg-background/70 px-3 py-2 text-xs font-medium text-primary dark:text-primary/90 backdrop-blur-md">
                      Open to SWE and full-stack opportunities
                    </div>

                    <div data-parallax="3" className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border bg-background/70 dark:bg-background/60 p-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">Focus</p>
                        <p className="mt-2 text-sm font-medium text-foreground">Clean architecture, sharp UI, practical motion</p>
                      </div>
                      <div className="rounded-2xl border border-border bg-background/70 dark:bg-background/60 p-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">Goal</p>
                        <p className="mt-2 text-sm font-medium text-foreground">Join a team building useful, modern products</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="relative px-6 py-20 lg:py-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-secondary)/0.04,transparent_40%)]" />
            <div className="mx-auto max-w-7xl">
              <p data-parallax="7" className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">Experience</p>
              <h2 data-parallax="6" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Practical experience, academic grounding, and a portfolio built for real hiring conversations.
              </h2>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {timeline.map((item) => (
                  <article
                    key={item.title}
                    data-reveal
                    className="rounded-[1.75rem] border border-border bg-card p-6 shadow-lg dark:shadow-black/50 light:shadow-black/5 hover:border-secondary/50 transition-all"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">{item.year}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium text-foreground/70">{item.org}</p>
                    <p className="mt-4 leading-7 text-foreground/70">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="relative px-6 py-20 lg:py-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-primary)/0.05,transparent_50%)]" />
            <div className="mx-auto max-w-7xl">
              <p data-parallax="7" className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Case studies</p>
              <h2 data-parallax="6" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Projects presented with the same care I would bring to a real product review.
              </h2>

              <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    data-project
                    className={`group overflow-hidden rounded-[1.9rem] border border-border bg-card shadow-lg dark:shadow-black/50 light:shadow-black/5 transition duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl dark:hover:shadow-primary/10 light:hover:shadow-primary/20 ${
                      project.title === 'Tomb Navigation & Contract Management' ? 'cursor-pointer' : ''
                    }`}
                    onClick={project.title === 'Tomb Navigation & Contract Management' ? openTombProject : undefined}
                  >
                    <div data-parallax="5" className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t dark:from-background dark:via-background/20 from-card via-card/20 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-border bg-background/65 dark:bg-background/70 px-3 py-2 text-xs font-medium text-foreground/80 backdrop-blur-md">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-foreground transition group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-4 leading-7 text-foreground/70">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/70 hover:border-primary/50 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                        >
                          Open live project
                          <ExternalLink size={16} />
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {openProject === 'tomb' && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/80 px-4 py-8 backdrop-blur-sm"
              onClick={closeProject}
            >
              <div
                className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-border bg-card p-6 shadow-2xl dark:shadow-black/50 light:shadow-black/10 sm:p-8"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeProject}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted hover:bg-muted/80 text-foreground transition"
                  aria-label="Close project modal"
                >
                  ×
                </button>

                <div className="max-w-3xl pr-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Tomb Navigation & Contract Management</p>
                  <h3 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                    Mobile case study with guided navigation and contract management workflows.
                  </h3>
                  <p className="mt-5 text-base leading-7 text-foreground/70">
                    A Flutter mobile app built to help users navigate cemetery spaces and manage contracts with clearer structure, faster access, and a more practical mobile experience. 
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {tombMobileScreens.map((screen, index) => (
                    <div
                      key={screen}
                      className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] border border-border bg-muted"
                    >
                      <Image
                        src={screen}
                        alt={`Tomb Navigation mobile screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {['Flutter', 'Firebase', 'AI Integration', 'Maps API', 'Mobile UX'].map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <section id="skills" className="relative px-6 py-20 lg:py-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--color-secondary)/0.05,transparent_45%)]" />
            <div className="mx-auto max-w-7xl">
              <p data-parallax="7" className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">Skills</p>
              <h2 data-parallax="6" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                A focused stack that supports modern full-stack and mobile delivery.
              </h2>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {skills.map((group) => {
                  const Icon = group.icon;

                  return (
                    <article
                      key={group.title}
                      data-reveal
                      className="rounded-[1.75rem] border border-border bg-card p-6 shadow-lg dark:shadow-black/50 light:shadow-black/5 hover:border-secondary/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-muted/50 text-primary">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                      </div>

                      <div className="mt-6 space-y-3">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="group relative flex items-center justify-between rounded-2xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground/70 transition-transform hover:translate-x-1 hover:scale-[1.01] hover:bg-muted/60 hover:text-foreground"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex items-center justify-center">{getSkillIcon(item)}</span>
                              <span>{item}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-110" />
                              <ArrowRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>

                            <div className="pointer-events-none absolute -top-12 left-4 z-50 hidden w-max rounded-md bg-background/90 dark:bg-background/95 px-3 py-1 text-xs text-foreground shadow transition-all group-hover:block group-hover:opacity-100">
                              {skillDescriptions[item] ?? ''}
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="contact" className="relative px-6 py-20 lg:py-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,var(--color-primary)/0.06,transparent_45%)]" />
            <div className="mx-auto max-w-5xl">
              <div data-parallax="8" className="rounded-[2rem] border border-border bg-gradient-to-br dark:from-card dark:via-card/80 light:from-card light:via-background to-primary/10 p-8 shadow-xl dark:shadow-black/50 light:shadow-black/10 sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Contact</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Let's talk about full-time SWE opportunities, internships, or a product idea worth building.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
                  I'm looking for a team where I can contribute, learn fast, and keep building polished experiences that feel credible from day one.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  <a
                    href="mailto:isaiah.aguinaldo2@gmail.com"
                    className="rounded-[1.5rem] border border-border bg-muted/50 p-5 transition hover:border-primary/50 hover:bg-muted/80 hover:shadow-lg"
                  >
                    <Mail className="text-primary" size={28} />
                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-foreground/50">Email</p>
                    <p className="mt-2 text-sm font-medium text-foreground">isaiah.aguinaldo2@gmail.com</p>
                  </a>

                  <a
                    href="https://linkedin.com/in/isaiahaguinaldo"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-border bg-muted/50 p-5 transition hover:border-primary/50 hover:bg-muted/80 hover:shadow-lg"
                  >
                    <Linkedin className="text-primary" size={28} />
                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-foreground/50">LinkedIn</p>
                    <p className="mt-2 text-sm font-medium text-foreground">Isaiah Aguinaldo</p>
                  </a>

                  <a
                    href="https://github.com/iceiec"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-border bg-muted/50 p-5 transition hover:border-primary/50 hover:bg-muted/80 hover:shadow-lg"
                  >
                    <Github className="text-primary" size={28} />
                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-foreground/50">GitHub</p>
                    <p className="mt-2 text-sm font-medium text-foreground">View my repositories</p>
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-foreground/60">Available for internships, junior SWE roles, and freelance collaborations.</p>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold transition hover:bg-primary/90 shadow-lg hover:shadow-primary/25"
                  >
                    Back to top
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-border px-6 py-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Pierre Isaiah Aguinaldo. All rights reserved.</p>
              <p>Designed with React, Next.js, and GSAP.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
