import React, { useState } from 'react';

// Import images
import hackvega from '../assets/certificates/hackvega.jpg';
import nptelCloud from '../assets/certificates/nptel-cloud.png';
import gitTraining from '../assets/certificates/git-training.png';
import isteDataDive from '../assets/certificates/iste-data-dive.png';
import cognifyzJava from '../assets/certificates/cognifyz-java.png';
import saiketJava from '../assets/certificates/saiket-java.png';
import scalerDbms from '../assets/certificates/scaler-dbms.png';
import tobaccoQuiz from '../assets/certificates/tobacco-quiz.jpg';
import viksitBharat from '../assets/certificates/viksit-bharat.jpg';

const Certificates = () => {
    const [filter, setFilter] = useState('All');

    const certificates = [
        {
            title: "HackVega Certificate of Merit",
            issuer: "HirePro & Careernet",
            date: "June 2025",
            image: hackvega,
            link: "#",
            category: "Technical"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            date: "Jul-Oct 2025",
            image: nptelCloud,
            link: "#",
            category: "Technical"
        },
        {
            title: "Git Training",
            issuer: "Spoken Tutorial, IIT Bombay",
            date: "18 November 2025",
            image: gitTraining,
            link: "#",
            category: "Technical"
        },
        {
            title: "Java Development Intern",
            issuer: "Cognifyz Technologies",
            date: "Sept - Oct 2025",
            image: cognifyzJava,
            link: "#",
            category: "Technical"
        },
        {
            title: "Java Development Intern",
            issuer: "SaiKet Systems",
            date: "Sept - Oct 2025",
            image: saiketJava,
            link: "#",
            category: "Technical"
        },
        {
            title: "DBMS Course",
            issuer: "Scaler Topics",
            date: "27 October 2025",
            image: scalerDbms,
            link: "#",
            category: "Technical"
        },
        {
            title: "Data Dive Participation",
            issuer: "New Horizon College of Engineering",
            date: "28th March 2025",
            image: isteDataDive,
            link: "#",
            category: "Participation"
        },
        {
            title: "World No Tobacco Day Quiz",
            issuer: "Ministry of Education",
            date: "2025",
            image: tobaccoQuiz,
            link: "#",
            category: "Participation"
        },
        {
            title: "Viksit Bharat 2025 Quiz",
            issuer: "MyGov",
            date: "2025",
            image: viksitBharat,
            link: "#",
            category: "Participation"
        }
    ];

    const filteredCertificates = filter === 'All'
        ? certificates
        : certificates.filter(cert => cert.category === filter);

    const categories = ['All', 'Technical', 'Participation'];

    return (
        <section id="certificates" className="min-h-screen flex items-center justify-center bg-gray-900 py-20 relative">
            {/* Background Glow */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-green-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-gradient">Certificates</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Continuous learning is key. Here are some of the certifications I've earned to validate my skills.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                {cat === 'Technical' ? 'Professional Skills' : cat === 'Participation' ? 'Participation & Awards' : 'All Certificates'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCertificates.map((cert, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group"
                        >
                            <div className="h-64 overflow-hidden relative bg-gray-800 flex items-center justify-center">
                                {/* Placeholder for when image is missing */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg font-medium">
                                    Certificate Image
                                </div>
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                                    onError={(e) => {
                                        e.target.style.display = 'none'; // Hide broken image
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                                    <a
                                        href={cert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                                    >
                                        View Certificate
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">{cert.title}</h3>
                                    <span className={`text-xs px-2 py-1 rounded-full border ${cert.category === 'Technical'
                                        ? 'border-blue-500/30 text-blue-400 bg-blue-500/10'
                                        : 'border-purple-500/30 text-purple-400 bg-purple-500/10'
                                        }`}>
                                        {cert.category}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
                                    <span className="truncate max-w-[60%]">{cert.issuer}</span>
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
