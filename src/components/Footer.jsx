import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 py-8 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500">
                    &copy; {new Date().getFullYear()} Arihant. All rights reserved.
                </p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://github.com/Arihantshukla98" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/arihant-shukla24" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        LinkedIn
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
