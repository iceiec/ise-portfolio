'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ArrowRight, Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce application with secure authentication, payment processing, and role-based access control.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PayPal API'],
      link: '#',
    },
    {
      title: 'Backend Messaging System',
      description: 'Real-time messaging system with authentication, admin interface, and secure communication channels.',
      tech: ['Next.js', 'React', 'Supabase', 'TypeScript'],
      link: '#',
    },
    {
      title: 'Tomb Navigation App',
      description: 'Mobile application for cemetery navigation with contract management and AI-powered features.',
      tech: ['Flutter', 'Firebase', 'Maps API', 'AI Integration'],
      link: '#',
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'Flutter', 'HTML/CSS', 'Bootstrap'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'PHP', 'Authentication'],
    },
    {
      category: 'Database',
      items: ['Supabase', 'Firebase', 'PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Vercel', 'Agile/Scrum', 'Figma'],
    },
  ];

  const experience = [
    {
      role: 'Software Engineer Intern',
      company: 'Argon Software Development Service',
      period: 'November 2024 - May 2025',
      description: 'Built production-grade full-stack applications using React, Node.js, and Supabase. Implemented RESTful APIs, designed database schemas, and collaborated with teams using Agile methodology.',
    },
    {
      role: 'Bachelor of Science in Information Technology',
      company: 'National University - Bulacan',
      period: '2022 - 2026',
      description: 'Focused on mobile and web application development with emphasis on building production-ready applications.',
    },
    {
      role: 'Full-Stack Projects',
      company: 'Academic & Client Work',
      period: '2022 - Present',
      description: 'Designed and shipped complete end-to-end experiences including Balai Alegria, FJA Management System, and various client projects.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                PA
              </div>
              <span className="hidden sm:inline text-foreground">Pierre Aguinaldo</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-primary transition">About</a>
              <a href="#work" className="text-sm font-medium text-foreground/70 hover:text-primary transition">Work</a>
              <a href="#skills" className="text-sm font-medium text-foreground/70 hover:text-primary transition">Skills</a>
              <a href="#experience" className="text-sm font-medium text-foreground/70 hover:text-primary transition">Experience</a>
              <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-primary transition">Contact</a>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 hover:bg-muted rounded-lg transition"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg transition"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-border">
              <a href="#about" className="block px-4 py-2 text-sm hover:bg-muted rounded transition">About</a>
              <a href="#work" className="block px-4 py-2 text-sm hover:bg-muted rounded transition">Work</a>
              <a href="#skills" className="block px-4 py-2 text-sm hover:bg-muted rounded transition">Skills</a>
              <a href="#experience" className="block px-4 py-2 text-sm hover:bg-muted rounded transition">Experience</a>
              <a href="#contact" className="block px-4 py-2 text-sm hover:bg-muted rounded transition">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Full-Stack Developer
              </h1>
              <p className="text-xl text-foreground/70 mb-6">
                Building scalable, user-focused applications with modern web technologies.
              </p>
              <p className="text-base text-foreground/60 mb-8 leading-relaxed max-w-lg">
                I transform business ideas into production-ready applications. With expertise in React, Next.js, Node.js, and cloud platforms, I deliver complete end-to-end solutions that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#work"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition inline-flex items-center justify-center gap-2"
                >
                  View My Work
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-border rounded-lg font-semibold hover:bg-muted transition inline-flex items-center justify-center"
                >
                  Get In Touch
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <p className="text-sm text-foreground/60">Projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <p className="text-sm text-foreground/60">Years</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <p className="text-sm text-foreground/60">Dedication</p>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-muted border border-border">
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

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-foreground/60">Recent projects demonstrating my full-stack capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-primary font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition">
                      View Project
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-foreground/60">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-muted/50 rounded-xl p-6 border border-border">
                <h3 className="font-bold text-primary mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <p key={item} className="text-sm text-foreground/70">{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-foreground/60">Professional background and achievements</p>
          </div>

          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.role} className="bg-white rounded-xl border border-border p-6 hover:border-primary/50 transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold">{item.role}</h3>
                    <p className="text-primary font-semibold text-sm">{item.company}</p>
                  </div>
                  <p className="text-sm text-foreground/60 whitespace-nowrap">{item.period}</p>
                </div>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-foreground/60 mb-12">
            I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:isaiah.aguinaldo2@gmail.com"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition inline-flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/isaiahaguinaldo"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-2 border-border rounded-lg font-semibold hover:bg-muted transition inline-flex items-center justify-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/iceiec"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-2 border-border rounded-lg font-semibold hover:bg-muted transition inline-flex items-center justify-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          <p className="text-sm text-foreground/50">
            Based in Philippines • Available for remote opportunities worldwide
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Pierre Isaiah Aguinaldo. All rights reserved.</p>
          <p>Crafted with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
