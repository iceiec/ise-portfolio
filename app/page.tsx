'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Side Navigation - Desktop Only */}
      <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:bg-gradient-to-b lg:from-background lg:to-background/80 lg:border-r lg:border-border lg:flex lg:flex-col lg:justify-center lg:items-start lg:px-8 lg:py-8 lg:z-40">
        <Link
          href="#"
          className="text-2xl font-bold gradient-text hover:opacity-80 transition mb-16 block"
        >
          Isaiah
        </Link>

        <div className="space-y-8 w-full">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`block text-left text-sm font-medium transition-all relative group ${
                activeSection === item
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="uppercase tracking-wider">{item}</span>
              {activeSection === item && (
                <div className="absolute left-0 bottom-0 h-1 w-8 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-auto flex gap-6 text-muted-foreground">
          <a
            href="https://github.com"
            className="hover:text-primary transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/isaiahaguinaldo"
            className="hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:isaiah.aguinaldo2@gmail.com"
            className="hover:text-primary transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav className="lg:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="#" className="text-xl font-bold gradient-text">
            Isaiah
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Hero Section - Asymmetrical */}
        <section id="home" className="relative min-h-screen flex items-center px-4 md:px-8 py-20">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-5xl w-full mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left Content - Takes more space */}
              <div className="lg:col-span-3 animate-slide-in-left">
                <div className="mb-6 inline-block">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                    Welcome to my portfolio
                  </span>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-6xl font-bold mb-8 leading-tight">
                  Hi, I'm <br />
                  <span className="gradient-text">Pierre Isaiah</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  4th year IT student crafting digital experiences. I specialize in full-stack web development, mobile apps, and bringing ideas to life with clean code and thoughtful design.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition flex items-center gap-2 group w-fit"
                  >
                    View My Work
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition w-fit"
                  >
                    Get in Touch
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                  <div>
                    <div className="text-3xl font-bold gradient-text">5+</div>
                    <p className="text-sm text-muted-foreground mt-1">Projects Done</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">10+</div>
                    <p className="text-sm text-muted-foreground mt-1">Technologies</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">4th</div>
                    <p className="text-sm text-muted-foreground mt-1">Year Student</p>
                  </div>
                </div>
              </div>

              {/* Right Visual - Smaller with depth */}
             <div className="lg:col-span-2 animate-slide-in-right flex justify-center">
  <div className="relative w-80 h-80">
    
    {/* Circular Profile Image */}
    <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border border-white/20 relative z-10">
      <Image
        src="/profile.png"
        alt="Profile"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Subtle info below image */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center z-20">
      <p className="text-white/90 font-semibold text-lg">Felizardo Aguinaldo</p>
      <p className="text-white/60 text-sm mt-1">Full-Stack Developer</p>
    </div>

    {/* Background gradient / glass effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl translate-x-4 translate-y-4 blur-xl z-0"></div>

  </div>
</div>
            </div>
          </div>  
        </section>
          

        <section id="experience" className="py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              Exper<span className="gradient-text">ience</span>
            </h2>

            <div className="max-w-6xl mx-auto">
              {/* Left - Text */}
              <div className="space-y-6">
                <div className="glass-effect rounded-xl p-8 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Software Engineer Intern</h3>
                  <p className="text-lg font-semibold mb-2">Argon Software Development Service</p>
                  <p className="text-muted-foreground">November 2025 - Present</p>
                  <p className="text-muted-foreground leading-relaxed">
                   <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
  <li>
    Engineered responsive web and mobile features using modern frameworks such as
    Laravel, Livewire, and Tailwind CSS, ensuring seamless user experiences across
    platforms.
  </li>
  <li>
    Integrated and maintained secure backend APIs, authentication systems, and
    relational database connections to support scalable application logic.
  </li>
  <li>
    Collaborated in Agile development cycles, contributing to code reviews,
    Git-based version control, and cross-functional team planning to deliver
    high-quality releases.
  </li>
</ul>

                  </p>
                  </div>
                  </div>
                </div>
               </div>
        </section>
           
           
        

        {/* About Section */}
        <section id="about" className="py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Text */}
              <div className="space-y-6">
                <div className="glass-effect rounded-xl p-8 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a 4th year IT student with a genuine passion for solving problems through code. What started as curiosity about how websites work has evolved into a deep commitment to crafting user-centered digital solutions.
                  </p>
                </div>

                <div className="glass-effect rounded-xl p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <h3 className="text-2xl font-bold mb-4 text-secondary">My Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in building solutions that are not just functional, but intuitive and delightful to use. Every project is an opportunity to learn, grow, and make a real impact.
                  </p>
                </div>
              </div>

              {/* Right - Key Info */}
              <div className="space-y-6">
                <div className="glass-effect rounded-xl p-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                    Education
                  </h4>
                  <p className="text-lg font-semibold mb-2">National University - Bulacan</p>
                  <p className="text-sm text-muted-foreground mt-2">2022 - Present</p>
                  <p className="text-sm text-muted-foreground mt-2">Bachelor of Science in Information Technology</p>
                  <p className="text-muted-foreground">Specialization in Mobile and Web Application</p>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Web Dev', 'Mobile Apps', 'UI/UX', 'AI/ML', 'Open Source'].map(
                      (interest) => (
                        <span
                          key={interest}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Bento Grid */}
        <section id="skills" className="py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              Technical <span className="gradient-text">Skills</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 auto-rows-max">
              {/* Languages - Large card */}
              <div className="md:col-span-1 glass-effect rounded-xl p-8 animate-fade-in">
                <h3 className="text-lg font-bold mb-6 text-primary">Languages</h3>
                <div className="space-y-3">
                  {['JavaScript', 'TypeScript', 'PHP', 'Java', 'C#', 'Dart'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="md:col-span-1 glass-effect rounded-xl p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-bold mb-6 text-secondary">Frontend</h3>
                <div className="space-y-3">
                  {['React', 'Next.js', 'Tailwind CSS', 'HTML5 & CSS3', 'Figma'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-foreground text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend & Tools */}
              <div className="md:col-span-1 glass-effect rounded-xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-bold mb-6 text-accent">Backend & Tools</h3>
                <div className="space-y-3">
                  {['Firebase', 'MySQL', 'Flutter', 'Git & GitHub', 'REST APIs'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-foreground text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Bento Layout */}
        <section id="projects" className="py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              Featured <span className="gradient-text">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 - Large Featured */}
              <div className="md:col-span-1 glass-effect rounded-xl overflow-hidden hover:border-primary/50 transition group animate-fade-in">
                <div className="h-64 bg-gradient-to-br from-primary/20 via-purple-500/10 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-7xl">🏛️</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition">
                    Tomb Navigation & Contract Management
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Advanced Flutter mobile app combining cemetery navigation with intelligent contract management. Features AI-powered chatbot, PDF export capabilities, and immersive 360° interactive maps.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Flutter', 'Firebase', 'AI Integration', 'Maps API'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-primary hover:text-secondary transition flex items-center gap-2 group">
                    View Project
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="md:col-span-1 glass-effect rounded-xl overflow-hidden hover:border-secondary/50 transition group animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="h-64 bg-gradient-to-br from-secondary/20 via-cyan-500/10 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-7xl">🏖️</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition">
                    Balai Alegria E-Commerce
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Full-featured resort booking platform with integrated payment processing. Seamless user experience with secure transactions via PayMongo API.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['HTML/CSS', 'JavaScript', 'PayMongo API'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-secondary hover:text-accent transition flex items-center gap-2 group">
                    View Project
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="md:col-span-2 glass-effect rounded-xl overflow-hidden hover:border-accent/50 transition group animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="grid md:grid-cols-3">
                  <div className="h-64 md:h-auto bg-gradient-to-br from-accent/20 via-green-500/10 to-primary/20 flex items-center justify-center col-span-1">
                    <div className="text-7xl">🚗</div>
                  </div>
                  <div className="col-span-2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">
                      FD AutoHub Ordering System
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive inventory and ordering system for automobile parts. Features include real-time stock tracking, order management, and staff efficiency dashboard.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['PHP', 'MySQL', 'Bootstrap', 'Dashboard'].map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-accent hover:text-primary transition flex items-center gap-2 group w-fit">
                      View Project
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              I'm always interested in hearing about new projects and opportunities. Let's talk!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:isaiah.aguinaldo2@gmail.com"
                className="glass-effect rounded-xl p-8 hover:border-primary/50 transition group text-center"
              >
                <Mail
                  size={40}
                  className="mx-auto mb-4 text-primary group-hover:scale-110 transition"
                />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground break-all hover:text-primary transition">
                  isaiah.aguinaldo2@gmail.com
                </p>
              </a>

              <a
                href="https://linkedin.com/in/isaiahaguinaldo"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-xl p-8 hover:border-secondary/50 transition group text-center"
              >
                <Linkedin
                  size={40}
                  className="mx-auto mb-4 text-secondary group-hover:scale-110 transition"
                />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground hover:text-secondary transition">
                  Isaiah Aguinaldo
                </p>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-xl p-8 hover:border-accent/50 transition group text-center"
              >
                <Github
                  size={40}
                  className="mx-auto mb-4 text-accent group-hover:scale-110 transition"
                />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground hover:text-accent transition">
                  View my repositories
                </p>
              </a>
            </div>

            <div className="glass-effect rounded-xl p-12 text-center">
              <p className="text-muted-foreground mb-6">
                Open to freelance work, collaborations, and full-time opportunities
              </p>
              <button
                onClick={() => scrollToSection('home')}
                className="px-8 py-3 bg-primary/10 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/20 transition inline-flex items-center gap-2"
              >
                Back to Top
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Pierre Isaiah Aguinaldo. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm">
                Designed & Built with React & Next.js
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
