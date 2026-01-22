import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Calendar, Trophy, Target } from 'lucide-react';

const ResultsSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const transformations = [
        {
            name: "Marco B.",
            duration: "4 mesi",
            goal: "Perdita di peso",
            achievement: "-18kg",
            story: "Ho iniziato il percorso pesando 95kg. Grazie al programma personalizzato e al supporto costante, ho raggiunto il mio peso forma e acquisito abitudini sane che mantengo tuttora.",
            tags: ["Dimagrimento", "Tonificazione", "Lifestyle"]
        },
        {
            name: "Sara T.",
            duration: "6 mesi",
            goal: "Tonificazione",
            achievement: "-22% grasso corporeo",
            story: "Il mio obiettivo era trasformare il mio fisico e aumentare la massa muscolare. Con il giusto mix di allenamento e nutrizione, ho completamente ridefinito la mia forma fisica.",
            tags: ["Massa muscolare", "Definizione", "Forza"]
        },
        {
            name: "Luca M.",
            duration: "8 mesi",
            goal: "Performance",
            achievement: "+40% forza",
            story: "Da sempre appassionato di sport, cercavo un modo per migliorare le mie performance. Il programma mi ha permesso di superare tutti i miei limiti precedenti.",
            tags: ["Performance", "Resistenza", "Agilità"]
        }
    ];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % transformations.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
    };

    return (
        <section className="py-20 bg-white" id="results">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-4">
                        <span className="relative z-10 text-black font-medium px-4 py-1">TRASFORMAZIONI</span>
                        <div className="absolute inset-0 bg-yellow-300 transform -rotate-1"></div>
                    </div>
                    <h2 className="text-4xl font-bold text-black mb-6">Storie di Successo</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Risultati reali di persone che hanno trasformato il loro corpo e la loro vita
                        attraverso dedizione e il giusto supporto.
                    </p>
                </div>

                {/* Transformation Cards Slider */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500"
                             style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                            {transformations.map((item, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                        {/* Before/After Images */}
                                        <div className="relative">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                                                    <img
                                                        src="/api/placeholder/400/400"
                                                        alt="Before transformation"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm rounded-full">
                                                        Prima
                                                    </div>
                                                </div>
                                                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                                                    <img
                                                        src="/api/placeholder/400/400"
                                                        alt="After transformation"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 text-sm rounded-full">
                                                        Dopo
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-black mb-2">{item.name}</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.tags.map((tag, idx) => (
                                                        <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                              {tag}
                            </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                                    <Calendar className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                                                    <div className="text-sm text-gray-600">Durata</div>
                                                    <div className="font-bold text-black">{item.duration}</div>
                                                </div>
                                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                                    <Target className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                                                    <div className="text-sm text-gray-600">Obiettivo</div>
                                                    <div className="font-bold text-black">{item.goal}</div>
                                                </div>
                                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                                    <Trophy className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                                                    <div className="text-sm text-gray-600">Risultato</div>
                                                    <div className="font-bold text-black">{item.achievement}</div>
                                                </div>
                                            </div>

                                            <p className="text-gray-600">{item.story}</p>

                                            <button className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all">
                                                Inizia la tua trasformazione
                                                <ChevronRight className="w-5 h-5 ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Slider Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                    {transformations.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === activeSlide ? 'bg-black w-8' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;