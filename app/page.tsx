'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'focus', label: 'Focus' },
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
  { value: '10+', label: 'Projects delivered' },
  { value: '10+', label: 'Tools and technologies' },
  
];

const roleSummaries = [
  {
    title: 'Full-stack delivery',
    copy:
      'I start by reviewing the system documentation and constraints, then move through the frontend, backend, and database so the build stays aligned end to end.',
  },
  {
    title: 'Frontend systems',
    copy:
      'I design responsive, professional interfaces that are easy to navigate, consistent across devices, and polished enough for real users.',
  },
  {
    title: 'Collaboration mindset',
    copy:
      'I communicate clearly, iterate with intention, and keep work organized so teams can review, ship, and maintain it with confidence.',
  },
] as const;

const timeline = [
  {
    year: 'NOVEMBER 2025 - MAY 2026',
    title: 'Software Engineer Intern',
    org: 'Argon Software Development Service',
    copy:
      'Built responsive web and mobile features with Laravel, Livewire, and Tailwind CSS while collaborating through Agile planning and Git-based reviews.',
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
  image: '',
  description:
  'A full-stack e-commerce application built with Next.js, TypeScript, and Supabase, featuring secure authentication, PayPal integration, role-based access control, and a responsive user experience.',
  tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PayPal API'],
  },
  {
   title: 'E-commerce Platform v2',
  category: 'Company Project',
  description:
  'An enhanced version of a full-stack e-commerce platform with additional business features, workflow improvements, and UI refinements built using the same modern technology stack.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
  },
  {
    title: 'Backend Messaging System',
    category: 'Company Project',
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
      'Responsive Web Design',
      'Component-Based Architecture',
      'UI Development',
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
      'Server-Side Development',
    ],
  },
  {
    title: 'Databases / BaaS',
    icon: Database,
    items: ['Supabase', 'Firebase', 'MySQL', 'PostgreSQL', 'SQL', 'Data Modeling', 'Authentication'],
  },
  {
    title: 'Security / Authentication',
    icon: Sparkles,
    items: ['JWT', 'Role-Based Access Control (RBAC)', 'Authentication & Authorization'],
  },
  {
    title: 'Tools & Version Control',
    icon: Github,
    items: ['Git', 'GitHub', 'Trello', 'Vercel', 'npm', 'AI-Assisted Development Tools', 'GitHub Copilot'],
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
      <div className="flex h-5 w-6 items-center justify-center rounded-sm bg-yellow-400 text-xs font-semibold text-slate-900">JS</div>
    );
  }

  if (key.includes('typescript')) {
    return (
      <div className="flex h-5 w-6 items-center justify-center rounded-sm bg-sky-400 text-xs font-semibold text-slate-900">TS</div>
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
  const colors = ['bg-emerald-400', 'bg-cyan-400', 'bg-amber-400', 'bg-sky-400', 'bg-pink-400'];
  let hash = 0;
  for (let i = 0; i < item.length; i++) hash = (hash << 5) - hash + item.charCodeAt(i);
  const color = colors[Math.abs(hash) % colors.length];

  return <div className={`flex h-5 w-6 items-center justify-center rounded-sm text-xs font-semibold text-slate-900 ${color}`}>{initials}</div>;
};

const tombMobileScreens = ['/mob1.png', '/mob2.png', '/mob3.png', '/mob4.png', '/mob5.png', '/mob6.png', '/mob7.png', '/mob8.png'];

export default function Portfolio() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const focusRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [heroMessageIndex, setHeroMessageIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

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
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-600 ease-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
          <div className="loading-screen flex flex-col items-center gap-6 text-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border border-cyan-400/30 bg-white/5" />
              <div className="absolute inset-2 rounded-full border border-emerald-400/40" />
              <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-cyan-400 border-r-emerald-400" style={{ animationDuration: '2s' }} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-cyan-300 animate-[fadeIn_0.6s_ease]">
                Loading portfolio
              </p>
              <p className="mt-2 text-sm text-slate-300 animate-[fadeIn_0.8s_ease_0.1s_both]">
                Crafting a premium full-stack experience
              </p>
            </div>
            <div className="mt-6 w-48">
              <div className="h-px overflow-hidden rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">{Math.round(loadingProgress)}%</p>
            </div>
          </div>
        </div>
      )}

      <aside className="fixed inset-y-0 left-0 z-50 hidden w-24 border-r border-white/8 bg-background/70 backdrop-blur-xl xl:flex">
        <div className="flex h-full w-full flex-col items-center justify-between px-4 py-6">
          <Link
            href="#home"
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sm font-semibold tracking-[0.3em] text-white"
          >
            PI
          </Link>

          <div className="flex flex-1 items-center py-8">
            <div className="relative h-full w-px rounded-full bg-white/10">
              <div
                className="absolute left-0 top-0 w-px rounded-full bg-gradient-to-b from-cyan-400 via-sky-400 to-emerald-400"
                style={{ height: `${scrollProgress}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-white/60">
            <a href="https://github.com/iceiec" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/isaiahaguinaldo"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
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
        <header className="sticky top-0 z-40 border-b border-white/8 bg-background/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
            <Link href="#home" className="text-lg font-semibold tracking-tight text-white">
              Pierre Isaiah
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    activeSection === item.id
                      ? 'bg-white/12 text-white'
                      : 'text-white/65 hover:bg-white/6 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

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
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%)]" />
            <div className="hero-parallax absolute -right-24 top-8 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="hero-parallax absolute left-[-5rem] top-48 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
              <div>
                <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
                  <Sparkles size={16} className="text-cyan-300" />
                  Full-stack developer
                </div>

                <h1 className="hero-heading mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  <span key={heroMessageIndex} className="inline-block animate-[fadeIn_0.5s_ease]">
                    {heroMessages[heroMessageIndex]}
                  </span>
                </h1>

                <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  An aspiring Full-Stack Developer with hands-on experience building web and mobile applications through academic and internship projects. 
                </p>

                <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  I enjoy creating responsive, scalable, and user-focused solutions while continuously expanding my knowledge of modern technologies and best development practices.
                </p>
                  

                <div className="hero-cta mt-8 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                  >
                    View selected work
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Start a conversation
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <MapPin size={14} className="text-cyan-300" />
                    Philippines
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <Code2 size={14} className="text-emerald-300" />
                    Full-stack developer
                  </span>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="hero-stat rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(2,6,23,0.28)]"
                    >
                      <div className="text-3xl font-semibold text-white">{stat.value}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div data-parallax="10" className="hero-parallax absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-emerald-400/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-4 shadow-[0_30px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl">
                  <div data-parallax="6" className="relative h-[500px] overflow-hidden rounded-[1.5rem] border border-white/10">
                    <Image
                      src="/profile.png"
                      alt="Portrait of Pierre Isaiah Aguinaldo"
                      fill
                      priority
                      className="object-cover"
                      style={{ objectPosition: 'center 18%' }}
                    />
                    <div data-parallax="2" className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    <div data-parallax="4" className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-slate-950/60 px-3 py-2 text-xs font-medium text-cyan-100 backdrop-blur-md">
                      Open to SWE and full-stack opportunities
                    </div>

                    <div data-parallax="3" className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/45">Focus</p>
                        <p className="mt-2 text-sm font-medium text-white">Clean architecture, sharp UI, practical motion</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/45">Goal</p>
                        <p className="mt-2 text-sm font-medium text-white">Join a team building useful, modern products</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="focus"
            ref={focusRef}
            className="relative px-6 py-20 lg:py-28"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06),transparent_45%)]" />
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
                <div data-parallax="8">
                  <p className="focus-kicker text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
                    Role focus
                  </p>
                  <h2 className="focus-heading mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Built to read like a candidate profile, not just a gallery of screens.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    This pinned section gives recruiters a quick, high-confidence summary of what I bring to a team: full-stack thinking, polished frontend work, and a collaborative delivery mindset.
                  </p>
                  <p className="mt-8 max-w-xl text-sm leading-6 text-slate-400">
                    Use this as a quick read on how I approach delivery before reviewing the case studies below.
                  </p>
                  <div className="focus-side-line mt-8 h-px w-full origin-left bg-gradient-to-r from-cyan-400 via-emerald-400 to-transparent" />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {roleSummaries.map((role, index) => (
                    <article
                      key={role.title}
                      data-focus-card
                      className="group min-h-64 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.18)] backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                          0{index + 1}
                        </span>
                        <div className="h-2 w-2 rounded-full bg-emerald-300" />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold text-white">{role.title}</h3>
                      <p className="mt-4 leading-7 text-slate-300">{role.copy}</p>
                      <div className="mt-6 rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-white/70 transition group-hover:border-cyan-300/30 group-hover:text-white">
                        Scroll to see how this translates into the case studies below.
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="relative px-6 py-20 lg:py-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.04),transparent_40%)]" />
            <div className="mx-auto max-w-7xl">
              <p data-parallax="7" className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">Experience</p>
              <h2 data-parallax="6" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Practical experience, academic grounding, and a portfolio built for real hiring conversations.
              </h2>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {timeline.map((item) => (
                  <article
                    key={item.title}
                    data-reveal
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.2)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">{item.year}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium text-slate-200">{item.org}</p>
                    <p className="mt-4 leading-7 text-slate-300">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="relative px-6 py-20 lg:py-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.05),transparent_50%)]" />
            <div className="mx-auto max-w-7xl">
              <p data-parallax="7" className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">Case studies</p>
              <h2 data-parallax="6" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Projects presented with the same care I would bring to a real product review.
              </h2>

              <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    data-project
                    className={`group overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 shadow-[0_28px_100px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:border-white/20 ${
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/65 px-3 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-white transition group-hover:text-cyan-100">
                        {project.title}
                      </h3>
                      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-200"
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
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
              onClick={closeProject}
            >
              <div
                className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:p-8"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeProject}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                  aria-label="Close project modal"
                >
                  ×
                </button>

                <div className="max-w-3xl pr-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">Tomb Navigation & Contract Management</p>
                  <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                    Mobile case study with guided navigation and contract management workflows.
                  </h3>
                  <p className="mt-5 text-base leading-7 text-slate-300">
                    A Flutter mobile app built to help users navigate cemetery spaces and manage contracts with clearer structure, faster access, and a more practical mobile experience. 
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {tombMobileScreens.map((screen, index) => (
                    <div
                      key={screen}
                      className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
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
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <section id="skills" className="relative px-6 py-20 lg:py-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_45%)]" />
            <div className="mx-auto max-w-7xl">
              <p data-parallax="7" className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">Skills</p>
              <h2 data-parallax="6" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                A focused stack that supports modern full-stack and mobile delivery.
              </h2>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {skills.map((group) => {
                  const Icon = group.icon;

                  return (
                    <article
                      key={group.title}
                      data-reveal
                      className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-cyan-200">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                      </div>

                      <div className="mt-6 space-y-3">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="group relative flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-3 text-sm text-slate-200 transition-transform hover:translate-x-1 hover:scale-[1.01] hover:bg-white/6"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex items-center justify-center">{getSkillIcon(item)}</span>
                              <span>{item}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-cyan-300 transition-transform group-hover:scale-110" />
                              <ArrowRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>

                            <div className="pointer-events-none absolute -top-12 left-4 z-50 hidden w-max rounded-md bg-slate-900/90 px-3 py-1 text-xs text-white shadow transition-all group-hover:block group-hover:opacity-100">
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
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.06),transparent_45%)]" />
            <div className="mx-auto max-w-5xl">
              <div data-parallax="8" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-cyan-400/8 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.35)] sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">Contact</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Let’s talk about full-time SWE opportunities, internships, or a product idea worth building.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  I’m looking for a team where I can contribute, learn fast, and keep building polished experiences that feel credible from day one.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  <a
                    href="mailto:isaiah.aguinaldo2@gmail.com"
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 transition hover:border-cyan-300/30 hover:bg-slate-950/60"
                  >
                    <Mail className="text-cyan-200" size={28} />
                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/45">Email</p>
                    <p className="mt-2 text-sm font-medium text-white">isaiah.aguinaldo2@gmail.com</p>
                  </a>

                  <a
                    href="https://linkedin.com/in/isaiahaguinaldo"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 transition hover:border-cyan-300/30 hover:bg-slate-950/60"
                  >
                    <Linkedin className="text-cyan-200" size={28} />
                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/45">LinkedIn</p>
                    <p className="mt-2 text-sm font-medium text-white">Isaiah Aguinaldo</p>
                  </a>

                  <a
                    href="https://github.com/iceiec"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 transition hover:border-cyan-300/30 hover:bg-slate-950/60"
                  >
                    <Github className="text-cyan-200" size={28} />
                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/45">GitHub</p>
                    <p className="mt-2 text-sm font-medium text-white">View my repositories</p>
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-400">Available for internships, junior SWE roles, and freelance collaborations.</p>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                  >
                    Back to top
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-white/8 px-6 py-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Pierre Isaiah Aguinaldo. All rights reserved.</p>
              <p>Designed with React, Next.js, and GSAP.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}