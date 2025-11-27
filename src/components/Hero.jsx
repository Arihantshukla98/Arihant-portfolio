import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-600/10 rounded-full blur-[100px] animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                    Building <span className="text-gradient">Digital</span>
                    <br />
                    <span className="text-gradient">Experiences</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    I'm Arihant, a creative developer who crafts beautiful, performant, and accessible web applications with modern technologies.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/10 transition-all hover:border-white/40"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-500 flex justify-center p-2">
                    <div className="w-1 h-3 bg-gray-500 rounded-full animate-scroll"></div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
