import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ResultsSection from "./Results";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <span className="text-lg md:text-xl font-bold text-black">NICOLO POLIDORI</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#about" className="text-gray-600 hover:text-black transition-colors">Chi Sono</a>
                            <a href="#services" className="text-gray-600 hover:text-black transition-colors">Servizi</a>
                            <a href="#transformations" className="text-gray-600 hover:text-black transition-colors">Risultati</a>
                            <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Prezzi</a>
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                                Prenota Ora
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 h-64' : 'opacity-0 h-0'} overflow-hidden bg-white`}>
                    <div className="px-4 py-2 space-y-4">
                        <a href="#about" className="block text-gray-600 hover:text-black transition-colors">Chi Sono</a>
                        <a href="#services" className="block text-gray-600 hover:text-black transition-colors">Servizi</a>
                        <a href="#transformations" className="block text-gray-600 hover:text-black transition-colors">Risultati</a>
                        <a href="#pricing" className="block text-gray-600 hover:text-black transition-colors">Prezzi</a>
                        <button className="w-full px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                            Prenota Ora
                        </button>
                    </div>
                </div>
            </header>

            {/* Contenuto principale centrato */}
            <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-0">
                <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Main title and image container */}
                    <div className="relative">
                        {/* Yellow highlight text for mobile */}
                        <div className="md:hidden relative mb-4">
                            <span className="relative z-10 text-black font-medium px-4 py-1 text-sm bg-yellow-300 rounded-full">
                                SCELTO PER TE
                            </span>
                        </div>

                        {/* Immagine centrale con contenitore responsivo */}
                        <div className="relative">
                            <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
                                <img
                                    src="/images/1.jpeg"
                                    alt="Fitness training"
                                    className="w-full h-full object-cover md:object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sottotitolo */}
                    <div className="max-w-3xl mx-auto mt-6 md:mt-8 px-4">
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Scopri il nuovo programma intensivo che ti garantirà
                            motivazione costante, coinvolgimento totale e risultati straordinari
                            in un lasso di tempo incredibilmente breve.
                        </p>

                        {/* Mobile CTA */}
                        <button className="mt-6 md:hidden w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                            Inizia Ora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;