import React from 'react';
import Particles from './Particles';

const ResumePage = () => {
  return (
    <div className="min-h-screen pt-48 pb-20 px-6 animate-fade-in relative overflow-hidden" style={{ background: 'var(--surface)' }}>
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Particles
          particleColors={["#ffffff", "hsl(var(--accent-h), var(--accent-s), var(--accent-l))"]}
          particleCount={800}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles
          disableRotation={false}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header & Download Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Arihant Shukla
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              <a href="mailto:arihantshukla24@gmail.com" className="hover:text-[var(--text-primary)] flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                arihantshukla24@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/arihant-shukla24" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/Arihantshukla98" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                GitHub
              </a>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>+91 7355900763</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Bengaluru, Karnataka</span>
            </div>
          </div>
          
          <a 
            href="/resume.pdf" 
            download="Arihant_Shukla_Resume.pdf"
            className="shrink-0 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:-translate-y-1"
            style={{ background: 'var(--text-primary)', color: 'var(--surface)', boxShadow: '0 8px 20px -8px var(--text-primary)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>

        <div className="space-y-12">
          
          {/* Professional Summary */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Professional Summary</h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Computer Science and Engineering student with a CGPA of <strong>8.75</strong> and a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Software Development. Experienced in building web applications using React.js, Express.js, and MongoDB, along with machine learning and Java-based application development. <strong>SAP Certified Backend Developer</strong> with hands-on experience in REST APIs, cloud technologies, and software development. Passionate about problem-solving, with <strong>180+ LeetCode</strong> problems solved, and building technology solutions.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Education</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>B.E in Computer Science and Engineering</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>New Horizon College of Engineering, Bengaluru</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>CGPA: 8.75</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>2023 - 2027</p>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>Higher Secondary School</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Saraswati Vidya Mandir School</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>70%</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>2022</p>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>Secondary School</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Saraswati Vidya Mandir School</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>80%</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>2020</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Projects</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>CampusConnect – Campus Resource & Event Management Platform</h3>
                <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-secondary)' }}>Tech Stack:</strong> React, Node.js, Express.js, MongoDB, JWT, Cloudinary.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <li>Developed a full-stack campus management platform supporting Lost & Found, Event Management and Study Material Sharing.</li>
                  <li>Implemented JWT-based authentication and role-based access control for Students and Administrators.</li>
                  <li>Designed and consumed REST APIs using Express.js and MongoDB Atlas.</li>
                  <li>Integrated Cloudinary for secure document and image storage.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>NagarSeva AI – Smart Civic Issue Reporting Platform</h3>
                <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-secondary)' }}>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, Google Gemini API, Tailwind CSS.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <li>Developed an AI-powered civic issue reporting platform for citizens and municipal authorities.</li>
                  <li>Integrated Google Gemini API for complaint classification, summarization, and smart issue categorization.</li>
                  <li>Built secure authentication, complaint tracking, image uploads, and role-based user/admin dashboards.</li>
                  <li>Deployed a scalable full-stack application with REST APIs, MongoDB, and responsive React interfaces.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>QR Safe – Smart QR Threat Detection System</h3>
                <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-secondary)' }}>Tech Stack:</strong> Java, ZXing Library, URL Analysis</p>
                <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <li>Developed a QR-based phishing detection system to identify malicious URLs.</li>
                  <li>Implemented heuristic-based URL analysis and risk scoring for threat classification.</li>
                  <li>Integrated QR decoding using ZXing and managed development with Git.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Technical Skills</h2>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><strong style={{ color: 'var(--text-primary)' }}>Programming Languages:</strong> Java, Python, C++, JavaScript, SQL</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Frontend:</strong> HTML5, CSS3, React.js, Tailwind CSS</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Backend:</strong> Express.js, REST APIs</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Databases:</strong> MySQL, MongoDB</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Machine Learning:</strong> Scikit-Learn, Pandas, NumPy, XGBoost</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Core Skills:</strong> Data Structures & Algorithms, OOP, Problem Solving (180+ LeetCode Problems Solved)</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Cloud & Tools:</strong> AWS, Git, GitHub</li>
            </ul>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Certifications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><strong>SAP Certified – Backend Developer</strong> – SAP Cloud Application Programming Model (CAP)</li>
              <li><strong>AWS Cloud Technical Essentials</strong> | Amazon Web Services (AWS) via Coursera</li>
              <li><strong>Introduction to Artificial Intelligence</strong> | Google via Coursera</li>
              <li><strong>Cloud Computing</strong> | NPTEL (Elite, 85%)</li>
              <li><strong>Smart India Hackathon</strong> (Participant)</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ResumePage;
