import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutSection = () => {
    const stats = [
        {
            icon: Clock,
            value: "3+",
            label: "Anni di Esperienza",
        },
        {
            icon: Users,
            value: "200+",
            label: "Clienti Soddisfatti",
        },
        {
            icon: Award,
            value: "in corso",
            label: "Laurea in scienze motorie",
        },
        {
            icon: Target,
            value: "98%",
            label: "Obiettivi Raggiunti",
        },
    ];

    const certifications = [
        "Laurea in exercise science",
        "Strength & Conditioning Coach",
        "Functional Training Expert",
    ];

    return (
        <section className="py-20 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-4">
                        <span className="relative z-10 text-black font-medium px-4 py-1">CHI SONO</span>
                        <div className="absolute inset-0 bg-yellow-300 transform -rotate-1"></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="relative">
                        <div className="aspect-square overflow-hidden rounded-2xl">
                            <img
                                src="/images/2.jpeg"
                                alt="Personal Trainer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-full -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-200 rounded-full -z-10"></div>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-black">
                            Trasformo Obiettivi in Risultati
                        </h2>

                        <div className="space-y-4 text-gray-600">
                            <p>
                                Da oltre 3 anni aiuto le persone a raggiungere la loro migliore versione
                                attraverso programmi di allenamento personalizzati e un approccio olistico
                                al benessere.
                            </p>
                            <p>
                                La mia filosofia si basa sulla personalizzazione completa: ogni corpo è
                                unico e merita un approccio su misura. Unisco le più recenti evidenze
                                scientifiche con l'esperienza sul campo per garantire risultati duraturi.
                            </p>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h3 className="text-xl font-semibold text-black mb-4">Certificazioni</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="flex items-center">
                                        <Award className="w-5 h-5 mr-2 text-yellow-500" />
                                        <span className="text-gray-600">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-full">
                                <stat.icon className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="mt-20 bg-gray-50 p-8 rounded-2xl">
                    <blockquote className="text-center max-w-3xl mx-auto">
                        <p className="text-xl text-gray-600 italic mb-6">
                            "Il mio obiettivo è rendere ogni cliente consapevole del proprio
                            potenziale, guidandolo in un percorso di crescita non solo fisica
                            ma anche mentale."
                        </p>
                        <footer className="text-black font-medium">
                            Nicolo polidori
                            <span className="block text-gray-500 text-sm mt-1">
                Personal Trainer & Performance Coach
              </span>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;