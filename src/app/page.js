"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import InfoCard from "../components/InfoCard";
import SkillCategory from "../components/SkillCategory";
import ExperienceCard from "../components/ExperienceCard";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  const { theme, toggleTheme, mounted } = useTheme();

  const scrollToSkills = () => {
    const element = document.getElementById("skills-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (!mounted) return null;
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
      {/* nav */}
      <nav className="h-24 flex items-center justify-between">
        <span className="font-bold text-sm tracking-tight uppercase">
          RootsMultimedia
        </span>
        <button
          onClick={toggleTheme}
          className="p-2 bg-[var(--bg-card)] border border-[var(--border-alpha)] 
          rounded-md hover:border-primary transition-all cursor-pointer group"
        >
          {theme === "dark" ? (
            <Sun
              size={18}
              className="text-gray-400 group-hover:text-yellow-400"
            />
          ) : (
            <Moon size={18} className="text-primary" />
          )}
        </button>
      </nav>
      {/* hero section */}
      <section
        className="min-h-[85vh] flex flex-col items-center 
        justify-center text-center relative"
      >
        <div className="flex flex-col select-none leading-none">
          <h1
            className="text-[20vw] md:text-[12rem] font-black
           text-primary tracking-tighter uppercase mb-2 md:mb-4"
          >
            ESHAH
          </h1>
          <h1
            className="text-[20vw] md:text-[12rem] font-black 
          text-[var(--text-main)] tracking-tighter uppercase -mt-[4vw] md:-mt-8"
          >
            FATIMA
          </h1>
        </div>
        <p
          className="mt-14 text-[var(--text-muted)] tracking-[0.6em] 
        uppercase text-[10px] md:text-xs font-black"
        >
          Full Stack Enthusiast
        </p>
        <div className="mt-16 flex flex-wrap justify-center gap-5">
          <button
            className="bg-primary text-white px-12 py-5 
          font-black text-[11px] uppercase border-[var(--text-main)] border-2
            hover:bg-transparent hover:text-primary
            cursor-pointer"
          >
            Get In Touch
          </button>
          <button
            onClick={scrollToSkills}
            className="border-2 border-[var(--text-main)] text-[var(--text-main)]
             px-9 py-5 font-black text-[11px] uppercase tracking-[0.2em]
              hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] 
              cursor-pointer"
          >
            View Expertise
          </button>
        </div>
      </section>

      <section
        className="py-32 max-w-7xl mx-auto grid lg:grid-cols-2 
      gap-24 items-start px-6"
      >
        <div>
          <h2
            className="text-5xl font-black uppercase tracking-tight 
          text-[var(--text-main)]"
          >
            About Me
          </h2>
          <div className="section-line"></div>
          <h3 className="text-3xl font-bold mt-10 mb-5 text-[var(--text-main)]">
            Full Stack Engineer
          </h3>
          <div className="space-y-8">
            <p className="text-[var(--text-muted)] text-lg leading-relaxed ">
              I am a Full-Stack Developer with strong expertise in the
              JavaScript and Python ecosystems. I am skilled in React, React
              Native, Next.js, TypeScript, Node.js, Python, MSSQL, and MongoDB,
              focusing on architecting scalable systems and delivering reliable
              end-to-end solutions.
            </p>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              I am passionate about creating modern, user-friendly experiences,
              solving real-world problems, and continuously staying ahead with
              emerging technologies. I strive to improve engineering workflows
              and deliver high-quality software that meets both business and
              technical objectives.
            </p>
          </div>
          <div className="flex flex-nowrap gap-3 mt-14 overflow-hidden">
            {["Problem-Solving", "Team Collaboration", "Time Management"].map(
              (tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap px-5 py-3 bg-[var(--bg-card)]
                   border border-[var(--border-alpha)] rounded-full
                   text-[11px] uppercase tracking-widest 
                   text-[var(--text-muted)] hover:border-primary transition"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
        <div className="grid gap-6">
          <InfoCard
            label="Current Status"
            title="Active Industry Professional"
            sub="Open to New Challenges"
          />
          <InfoCard
            label="Education"
            title="BS Computer Science"
            sub="LCWU | 2021 — 2025"
          />
          <InfoCard
            label="Location"
            title="Lahore, Punjab, Pakistan"
            sub="Available for Remote Work"
          />
        </div>
      </section>
      {/* expertise section */}
      <section id="skills-section" className="py-20 scroll-mt-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl font-black uppercase tracking-tighter 
          text-[var(--text-main)] mb-3"
          >
            Skills & Expertise
          </h2>
          <div className="section-line mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SkillCategory
              title="Frontend"
              skills={["JavaScript", "HTML5", "CSS", "React", "Tailwind CSS"]}
            />
            <SkillCategory
              title="Backend"
              skills={[
                "Node.js",
                "Python",
                "Express.js",
                "REST APIs",
                "Next.js",
              ]}
            />
            <SkillCategory
              title="Databases"
              skills={["MongoDB", "SQL", "PostgreSQL"]}
            />
          </div>
        </div>
      </section>
      {/* experiance section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl font-black uppercase tracking-tighter 
          text-[var(--text-main)] mb-3"
          >
            Professional Experience
          </h2>
          <div className="section-line mb-10"></div>

          <p className="text-[var(--text-muted)] mb-16 text-lg max-w-3xl">
            Developing scalable full-stack applications and delivering
            AI-integrated web solutions as an industry professional.
          </p>

          <div className="relative border-l-2 border-gray-800 ml-2 space-y-12">
            <ExperienceCard
              role="Full Stack Developer"
              company="Pursue Today"
              date="Nov 2025 — Present"
              description="As a Junior Full Stack Developer, I contribute to building dependable,
               high-quality software that aligns with business goals. My work focuses on solving 
               complex problems and strengthening the foundation of our core systems. I work across
                the full stack with JavaScript, React, Node.js, and Python to deliver AI-driven web
                 solutions and scalable applications."
              current
            />
            <ExperienceCard
              role="Frontend Developer"
              company="luxehoteldeals.com"
              date="Project Based Global (Remote)"
              description="I worked remotely on this project as a Frontend Developer, 
              focusing on building a high-conversion, responsive hotel reservation platform
               from the ground up. I utilized HTML, CSS and JavaScript to develop clean,
                efficient code and ensure a seamless user experience."
            />
          </div>
        </div>
      </section>
      {/* contact section */}
      <section
        id="contact-section"
        className="py-24 scroll-mt-24 border-t border-[var(--border-alpha)]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-5xl font-black uppercase tracking-tighter  
          text-[var(--text-main)] mb-3"
          >
            Get In Touch
          </h2>
          <div className="section-line mb-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-[var(--text-main)] mb-4">
                  Let's Connect
                </h3>
                <p className="text-[var(--text-muted)] text-lg max-w-md leading-relaxed">
                  Ready to collaborate on your next project? Let's discuss how
                  we can build something amazing together.
                </p>
              </div>
              <div className="space-y-6">
                <a
                  href="mailto:eshahfatima08@gmail.com"
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-alpha)]
                   group-hover:border-primary group-hover:text-primary transition-all"
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[var(--text-muted)]">
                      Email
                    </p>
                    <p className="text-[var(--text-main)] font-medium">
                      eshahfatima08@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://github.com/eshah02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-alpha)]
                   group-hover:border-primary group-hover:text-primary transition-all"
                  >
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[var(--text-muted)]">
                      Github
                    </p>
                    <p className="text-[var(--text-main)] font-medium">
                      github.com/eshah02
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/eshah-fatima-90549a21a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-alpha)]
                   group-hover:border-primary group-hover:text-primary transition-all"
                  >
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[var(--text-muted)]">
                      Linkedin
                    </p>
                    <p className="text-[var(--text-main)] font-medium">
                      linkedin.com/in/eshah-fatima-90549a21a
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="bg-[var(--bg-card)] p-8 md:p-10 rounded-[32px] border border-[var(--border-alpha)] 
            shadow-2xl"
            >
              <form
                action="https://formspree.io/f/mpqangkp"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full bg-[var(--bg-main)] border border-[var(--border-alpha)]
                       rounded-xl px-6 py-4 text-[var(--text-main)] focus:border-primary outline-none
                        transition-all placeholder:text-[var(--text-muted)]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full bg-[var(--bg-main)] border border-[var(--border-alpha)] 
                      rounded-xl px-6 py-4 text-[var(--text-main)] focus:border-primary outline-none 
                      transition-all placeholder:text-[var(--text-muted)]/50"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-[var(--bg-main)] border border-[var(--border-alpha)] 
                  rounded-xl px-6 py-4 text-[var(--text-main)] focus:border-primary outline-none 
                  transition-all placeholder:text-[var(--text-muted)]/50"
                />

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="w-full bg-[var(--bg-main)] border border-[var(--border-alpha)] 
                  rounded-xl px-6 py-4 text-[var(--text-main)] focus:border-primary 
                  outline-none transition-all resize-none placeholder:text-[var(--text-muted)]/50"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[var(--text-main)] text-[var(--bg-main)] 
                  font-black py-5 rounded-xl uppercase tracking-[0.2em] text-xs
                   hover:bg-primary hover:text-white transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="mt-8 pt-10 border-t border-border-alpha flex flex-col 
      md:flex-row justify-between items-center gap-6 text-[10px]
       font-black uppercase tracking-[0.3em] text-gray-500"
      >
        <p>© 2025 RootsMultimedia</p>
        <div className="flex gap-10">
          <a
            href="https://github.com/eshah02"
            className="hover:text-primary transition-colors"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/eshah-fatima-90549a21a/"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:eshahfatima08@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
