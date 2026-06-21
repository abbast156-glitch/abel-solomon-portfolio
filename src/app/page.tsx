"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "teaching" | "dev">("all");
  const [loadVideo, setLoadVideo] = useState(true);

  const personalData = {
    name: "Abel Solomon Asfaw",
    title: "English Language Educator & EdTech Pioneer",
    location: "Addis Ababa, Ethiopia",
    email: "abelsolomonasfaw@gmail.com",
    github: "https://github.com/abbast156-glitch",
    linkedin: "https://www.linkedin.com/in/abel-solomon-3a208529b/",
    youtube: "https://www.youtube.com/@learnenglishwithabel",
    tiktok: "https://www.tiktok.com/@learnenglishwithabel?_r=1&_t=ZS-97OJY7NSgJZ",
    filo: "https://askfilo.com/online-tutor/abel-solomon-asfaw-6664284",
    education: "BA in English Language & Literature (Kotebe University of Education)",
    diploma: "Diploma in Teaching English (Kotebe University of Education)",
    experience: "9+ Years of Professional Classroom Experience",
  };

  const projects = [
    {
      id: "fiker",
      title: "Fiker (DigiLearn)",
      category: "dev",
      role: "Lead Developer & Pedagogy Designer",
      concept: "A Duolingo-inspired micro-learning app designed for digital literacy and school curriculum education in Ethiopia.",
      highlights: [
        "National Quiz Arena | Students take on fast-paced, interactive quizzes to test their knowledge, earn experience points (XP), and fight for the top spots on a country-wide, live leaderboard.",
        "Mr. Solomon’s Class | Complex school subjects are broken down into clear, micro-learning milestones combined with smart, supportive correction popups that feel like having a personal mentor guiding you 24/7.",
        "Telegram Parent Portal | The app automatically sends real-time progress reports directly to the parent's Telegram, letting them follow learning milestones and send instant encouragement back to the student.",
        "Smart Gamified Loop | Built entirely for autonomous growth, the platform uses bite-sized, localized content challenges that adapt to the student’s pace to keep motivation high without the burnout.",
      ],
      special: "Integrated offline-first ESSLCE Grade 12 National Mock Exams (Math, English, Chemistry, History, Geography, Economics) with KaTeX math rendering and periodic tables, specifically aligned with the national Ethiopian curriculum.",
      tech: ["React 18", "Vite", "Zustand", "Tailwind CSS", "Firebase", "Gemini API", "Capacitor"],
      liveUrl: "https://fiker1989.web.app",
    },
    {
      id: "lesson-planner",
      title: "Ethio Lesson Planner",
      category: "dev",
      role: "Creator & Developer",
      concept: "A digital web utility designed specifically for Ethiopian educators to automate lesson planning and align with curriculum requirements.",
      highlights: [
        "Eliminates manual administrative repetition in weekly planning.",
        "Formats structured lesson layouts aligned with national standards.",
        "Saves hours of preparation time for classroom teachers.",
      ],
      tech: ["Flutter", "Firebase"],
      liveUrl: "https://ethiolessonplanner.web.app",
    },
  ];

  const timeline = [
    {
      year: "2025 - Present",
      title: "English Language Teacher",
      organization: "Fountain of Knowledge School",
      location: "Addis Ababa, Ethiopia",
      category: "teaching",
      description: "Excelling in professional instruction by delivering the national Ethiopian curriculum for English Language. Improving classroom delivery through innovative, technology-guided student assessment, spoken communication programs, and interactive lesson plans.",
      details: ["Designing student-centered lesson plans directly aligned with the national Ethiopian curriculum."]
    },
    {
      year: "2024 - 2025",
      title: "English Language Teacher",
      organization: "Legetafo Innovative Boarding Academy",
      location: "Sheger City, Oromia, Ethiopia",
      category: "teaching",
      description: "Organized curriculum-aligned extracurricular events to improve spoken English communication. Hosted large-scale contests, debates, and public speaking competitions based on the national Ethiopian curriculum.",
      details: ["Integrated custom multimedia tools to deliver high-quality instruction following the Ethiopian curriculum standards."]
    },
    {
      year: "2023 - 2024",
      title: "English Language Teacher",
      organization: "Ethio-Wales Global Academy",
      location: "Addis Ababa, Ethiopia",
      category: "teaching",
      description: "Focused on spoken English proficiency and confidence building. Aligned student assessments and tutoring support programs with the secondary-level Ethiopian curriculum.",
      details: []
    },
    {
      year: "2022 - 2024",
      title: "English Language Teacher",
      organization: "Maria Rubatto Catholic School",
      location: "Addis Ababa, Ethiopia",
      category: "teaching",
      description: "Taught English Language and Literature, maintaining high academic standards. Created student-centered materials aligned with the Ethiopian national curriculum.",
      details: []
    },
    {
      year: "2019 - 2021",
      title: "English Language Teacher",
      organization: "Bright Hope Family Kids Academy",
      location: "Addis Ababa, Ethiopia",
      category: "teaching",
      description: "Instructed foundational English language skills, introducing active classroom communication methods mapped to the early levels of the Ethiopian curriculum.",
      details: []
    },
    {
      year: "2016 - 2019",
      title: "English Language Teacher",
      organization: "Africa Andenet No2 Kindergarten and Primary School",
      location: "Addis Ababa, Ethiopia",
      category: "teaching",
      description: "Began professional classroom teaching. Developed lesson plans and student monitoring strategies aligned with the primary-level Ethiopian curriculum.",
      details: []
    },
    {
      year: "2016 - 2021",
      title: "Kotebe University of Education (Higher Education)",
      organization: "Academic Qualifications",
      location: "Addis Ababa, Ethiopia",
      category: "teaching",
      description: "Completed comprehensive training in pedagogical theory, language teaching methodology, literature studies, and educational research.",
      details: [
        "BA in English Language and Literature — Kotebe University of Education (2021).",
        "Diploma in Teaching English — Kotebe University of Education (2016)."
      ]
    },
    {
      year: "Professional Development",
      title: "Certifications",
      organization: "British Council & Udacity",
      location: "Online",
      category: "dev",
      description: "Continuously refining teaching methods and upgrading skills to lead in EdTech and data-guided education.",
      details: [
        "Teaching English Through Literature — British Council (2025).",
        "Data Analysis Fundamentals — Udacity (2025)."
      ]
    }
  ];

  // Schema Markup for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.name,
    "jobTitle": personalData.title,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Addis Ababa",
      "addressCountry": "Ethiopia"
    },
    "email": personalData.email,
    "url": "https://abelsolomon.vercel.app",
    "sameAs": [
      personalData.github,
      personalData.linkedin,
      personalData.youtube,
      personalData.tiktok,
      personalData.filo
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Kotebe University of Education"
    },
    "knowsAbout": [
      "English Language Teaching",
      "Ethiopian Curriculum Alignment",
      "Extracurricular Debates & Spelling Bees",
      "Flutter",
      "Firebase",
      "EdTech App Development",
      "Data Analysis"
    ]
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-x-hidden font-sans">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header / Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight group flex items-center gap-1">
            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-emerald-500 transition-all duration-300">
              Abel Solomon
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#pedagogy" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200">Teaching Philosophy</a>
            <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200">EdTech Projects</a>
            <a href="#experience" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200">Classroom Experience</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200">About Me</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200">Contact</a>
          </nav>

          {/* Download CV (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-100 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200"
            >
              Download Full CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-100 bg-white px-4 py-6 flex flex-col gap-4 shadow-inner">
            <a
              href="#pedagogy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Teaching Philosophy
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
            >
              EdTech Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Classroom Experience
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="/cv.pdf"
              download
              className="w-full text-center inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-100 transition-all duration-200"
            >
              Download Full CV
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 flex flex-col items-start text-left">
            {/* Tagline */}
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10 self-start">
              Excelling in English Pedagogy & Classroom Innovation
            </span>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.15]">
              Striving for Excellence in{" "}
              <span className="text-emerald-600 block sm:inline lg:block">
                English Education
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl">
              I'm <span className="font-semibold text-slate-900">{personalData.name}</span>. A professional English Educator in Addis Ababa, Ethiopia, dedicated to improving teaching methods and aligning classrooms with the Ethiopian curriculum.
            </p>

            {/* Body Description */}
            <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
              With {personalData.experience} delivering core curriculum standards, I strive to excel in my profession by integrating self-designed technology that makes learning more interactive, standardized, and accessible.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#pedagogy"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition-all duration-200"
              >
                Explore Teaching Methods
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-200"
              >
                View EdTech Applications
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-start gap-5 pt-4">
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="text-[#24292e] hover:scale-110 hover:opacity-80 transition-all duration-200" aria-label="GitHub">
                <svg className="h-6 w-6" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:scale-110 hover:opacity-80 transition-all duration-200" aria-label="LinkedIn">
                <svg className="h-6 w-6" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href={personalData.youtube} target="_blank" rel="noopener noreferrer" className="text-[#ff0000] hover:scale-110 hover:opacity-80 transition-all duration-200" aria-label="YouTube">
                <svg className="h-6 w-6" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M23.498 6.163c-.272-.98-1.04-1.748-2.02-2.02C19.716 3.745 12 3.745 12 3.745s-7.718 0-9.478.398c-.98.272-1.748 1.04-2.02 2.02C.1 7.922.1 12 .1 12s0 4.078.398 5.837c.272.98 1.04 1.748 2.02 2.02 1.76.398 9.478.398 9.478.398s7.718 0 9.478-.398c.98-.272 1.748-1.04 2.02-2.02C23.9 16.078 23.9 12 23.9 12s0-4.078-.402-5.837zm-13.99 8.276V9.56l5.99 3.44-5.99 3.44z"/>
                </svg>
              </a>
              <a href={personalData.tiktok} target="_blank" rel="noopener noreferrer" className="text-[#fe2c55] hover:scale-110 hover:text-black transition-all duration-200" aria-label="TikTok">
                <svg className="h-6 w-6" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.22.73.86 1.69 1.5 2.76 1.86v4.06c-1.37-.1-2.69-.64-3.79-1.49-.66-.5-1.22-1.11-1.65-1.81v7.69c.02 1.34-.33 2.66-1.01 3.79-.76 1.22-1.92 2.15-3.26 2.64-1.39.49-2.91.5-4.31.02-1.41-.47-2.62-1.45-3.39-2.73-.83-1.34-1.13-2.94-.88-4.5.25-1.5 1.07-2.85 2.29-3.74 1.25-.92 2.82-1.31 4.36-1.07 1.07.16 2.06.67 2.84 1.44v-9.61c.01-1.38.01-2.76.01-4.14z"/>
                </svg>
              </a>
              <a href={personalData.filo} target="_blank" rel="noopener noreferrer" className="text-[#059669] hover:scale-110 hover:opacity-80 transition-all duration-200" aria-label="Filo Tutor Profile">
                <svg className="h-6 w-6" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 hover:scale-[1.01] transition-transform duration-300">
              <img
                src="/profile.jpg"
                alt="Abel Solomon Asfaw"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Pedagogy Section */}
        <section id="pedagogy" className="py-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Lazy Loaded YouTube Video Block */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm flex items-center justify-center">
                {!loadVideo ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-50 hover:bg-slate-100/80 cursor-pointer transition-colors duration-200" onClick={() => setLoadVideo(true)}>
                    <div className="h-14 w-14 rounded-full bg-emerald-600 flex items-center justify-center shadow hover:scale-105 transition-transform duration-200 text-white mb-3">
                      <svg className="h-6 w-6 ml-1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">Click to Play Featured Lesson</span>
                    <span className="text-xs text-slate-500 mt-1">Loads English Grammar video on YouTube</span>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/y62lid4x2Yw"
                    title="Abel Solomon Asfaw Educational Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                )}
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-xs text-slate-500">Host of @learnenglishwithabel Channel</span>
                <a
                  href={personalData.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors duration-200"
                >
                  Subscribe on YouTube ↗
                </a>
              </div>
            </div>

            {/* Teaching Credentials Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                Linguistic Delivery
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
                Improving Methods & Spoken Confidence
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Striving to be at the forefront of the educational space in Addis Ababa, I focus heavily on student confidence, spoken articulation, and curriculum standards. I implement technology to make the <strong className="font-semibold text-slate-900">Ethiopian curriculum</strong> interactive, coordinating spelling contests, debates, and quiz days to ensure students thrive.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    🗣
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Spoken Communication</h3>
                    <p className="mt-1 text-xs text-slate-500">Excelling in student confidence building, getting learners to communicate naturally in English.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    📚
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Ethiopian Curriculum Delivery</h3>
                    <p className="mt-1 text-xs text-slate-500">Developing and delivering lessons specifically aligned with the national Ethiopian curriculum structures.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Classroom Gamification</h3>
                    <p className="mt-1 text-xs text-slate-500">Introducing modern tools like XP tables and quiz systems to motivate secondary learners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t border-slate-100">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
                  Designing EdTech Applications
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Self-engineered digital utilities created to support lessons, simplify grading, and engage students.
                </p>
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-1 border border-slate-200 bg-slate-50 p-1 rounded-lg self-start">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${activeTab === "all" ? "bg-white text-slate-800 shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-800"}`}
                >
                  All Apps
                </button>
                <button
                  onClick={() => setActiveTab("dev")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${activeTab === "dev" ? "bg-white text-slate-800 shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-800"}`}
                >
                  EdTech Apps
                </button>
              </div>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects
                .filter((p) => activeTab === "all" || p.category === activeTab)
                .map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-500/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">{project.role}</span>
                      <div className="flex gap-1">
                        {project.tech.slice(0, 3).map((t, idx) => (
                          <span key={idx} className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-slate-900 font-display">{project.title}</h3>
                    
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                      {project.concept}
                    </p>

                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider">Key Features:</h4>
                      <ul className="mt-2 space-y-1.5">
                        {project.highlights.map((highlight, idx) => {
                          const parts = highlight.split(" | ");
                          return (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                              <span className="text-emerald-600 mt-0.5">✔</span>
                              <span>
                                {parts.length > 1 ? (
                                  <>
                                    <strong className="font-semibold text-slate-900">{parts[0]}</strong> — {parts[1]}
                                  </>
                                ) : (
                                  highlight
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {project.special && (
                      <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-100 p-3">
                        <p className="text-[11px] text-emerald-700 leading-normal font-medium">
                          {project.special}
                        </p>
                      </div>
                    )}

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">
                        {project.tech.join(" • ")}
                      </span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200"
                      >
                        Explore →
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience" className="py-20 border-t border-slate-100 bg-slate-50/50 -mx-4 md:-mx-8 px-4 md:px-8">
          <div className="space-y-12 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
                Classroom Experience & Credentials
              </h2>
              <p className="text-sm text-slate-500">
                Detailed timeline of teaching positions and academic achievements, specializing in the Ethiopian national curriculum.
              </p>
            </div>

            {/* Timeline Tree */}
            <div className="relative border-l border-slate-200 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Outer circle decoration */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-emerald-600 shadow-sm transition-transform duration-200 group-hover:scale-110">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase">
                      {item.year}
                    </span>
                    <span className="text-xs text-slate-400 font-medium font-sans">
                      {item.organization} • {item.location}
                    </span>
                  </div>

                  <h3 className="mt-1 text-lg font-bold text-slate-900 font-display group-hover:text-emerald-600 transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {item.details.length > 0 && (
                    <ul className="mt-3 space-y-1.5 pl-4 list-disc text-xs text-slate-500">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
                Dedicated to Educational Excellence
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                <p>
                  My journey as an educator has always been driven by one goal: to be the best English language teacher I can possibly be. Teaching in diverse school systems across Addis Ababa has given me deep experience in delivering the <strong className="font-semibold text-slate-900">Ethiopian curriculum</strong> and understanding the exact needs of local learners.
                </p>
                <p>
                  To elevate my teaching methods and help students overcome learning bottlenecks, I taught myself to develop EdTech tools. Fusing modern technologies like Flutter, React, and Firebase with structured pedagogical systems has allowed me to bring gamified lessons, custom grading apps, and automated lesson planners directly into my teaching practice.
                </p>
                <p>
                  I strive to constantly grow as a language professional, utilizing both traditional literature-focused pedagogy and modern digital applications to provide the highest standard of English education in Ethiopia.
                </p>
              </div>
            </div>

            {/* Grid details visual block */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 text-center shadow-sm">
                <span className="text-3xl font-bold text-emerald-600 font-display">{personalData.experience.split(" ")[0]}</span>
                <p className="mt-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Classroom Teaching</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 text-center shadow-sm">
                <span className="text-3xl font-bold text-indigo-600 font-display">BA</span>
                <p className="mt-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">English Literature</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 text-center col-span-2 shadow-sm">
                <span className="text-base font-bold text-slate-900 font-display block">Academic Foundation</span>
                <p className="mt-1 text-xs text-emerald-600 font-medium">Kotebe University of Education Alumni</p>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-t border-slate-100">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100/50 p-8 md:p-12 max-w-4xl mx-auto shadow-sm relative overflow-hidden">
            
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
                Let's Build the Future of Learning
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                Whether you are an educational institution looking to digitize curriculum materials, a fellow teacher, or looking to collaborate on EdTech apps, feel free to reach out.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                {/* Email Button */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition-all duration-200"
                >
                  ✉ Contact via Email
                </a>
                
                {/* Download CV button */}
                <a
                  href="/cv.pdf"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-emerald-500/40 hover:text-emerald-600 transition-all duration-200"
                >
                  Download Full CV
                </a>
              </div>

              {/* Direct Links Footer details */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-slate-500">
                <div>
                  <span className="block font-semibold text-slate-700">Location</span>
                  {personalData.location}
                </div>
                <div>
                  <span className="block font-semibold text-slate-700">Direct Contact</span>
                  <a href={`mailto:${personalData.email}`} className="hover:text-emerald-600 transition-colors">{personalData.email}</a>
                </div>
                <div>
                  <span className="block font-semibold text-slate-700">Professional Links</span>
                  <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-1">
                    <a href={personalData.github} target="_blank" rel="noopener" className="hover:text-indigo-600 transition-colors">GitHub</a>
                    <span>•</span>
                    <a href={personalData.linkedin} target="_blank" rel="noopener" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
                    <span>•</span>
                    <a href={personalData.youtube} target="_blank" rel="noopener" className="hover:text-indigo-600 transition-colors">YouTube</a>
                    <span>•</span>
                    <a href={personalData.tiktok} target="_blank" rel="noopener" className="hover:text-indigo-600 transition-colors">TikTok</a>
                    <span>•</span>
                    <a href={personalData.filo} target="_blank" rel="noopener" className="hover:text-indigo-600 transition-colors">Filo Tutor</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50 py-8 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-1">
          <p>© 2026 {personalData.name}. All rights reserved.</p>
          <p>
            Designed & Engineered in Addis Ababa, Ethiopia. Deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}
