import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

const PricingSection = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const packages = [
        {
            name: "Base",
            description: "Ideale per chi inizia",
            monthlyPrice: "89",
            annualPrice: "69",
            highlight: false,
            features: [
                "Piano di allenamento personalizzato",
                "Check-in settimanale",
                "Video esercizi dettagliati",
                "Supporto via email",
                "Accesso app di tracking"
            ]
        },
        {
            name: "Premium",
            description: "Il più scelto",
            monthlyPrice: "149",
            annualPrice: "129",
            highlight: true,
            features: [
                "Tutto del pacchetto Base",
                "Consulenza nutrizionale",
                "2 sessioni private al mese",
                "Supporto WhatsApp 24/7",
                "Analisi composizione corporea",
                "Programma personalizzato settimanale",
                "Accesso contenuti esclusivi"
            ]
        },
        {
            name: "Elite",
            description: "Massimi risultati",
            monthlyPrice: "299",
            annualPrice: "249",
            highlight: false,
            features: [
                "Tutto del pacchetto Premium",
                "4 sessioni private al mese",
                "Consulenza nutrizionale avanzata",
                "Check-in bisettimanale",
                "Piano nutrizionale dettagliato",
                "Analisi biomeccanica",
                "Supporto prioritario"
            ]
        }
    ];

    return (
        <section className="py-20 bg-gray-50" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-4">
                        <span className="relative z-10 text-black font-medium px-4 py-1">PACCHETTI</span>
                        <div className="absolute inset-0 bg-yellow-300 transform -rotate-1"></div>
                    </div>
                    <h2 className="text-4xl font-bold text-black mb-6">Investi nel Tuo Benessere</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Scegli il pacchetto più adatto alle tue esigenze. Ogni programma è personalizzato
                        per massimizzare i tuoi risultati.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex items-center bg-gray-100 p-1 rounded-full">
                        <button
                            className={`px-6 py-2 rounded-full transition-all ${
                                !isAnnual ? 'bg-black text-white' : 'text-gray-600'
                            }`}
                            onClick={() => setIsAnnual(false)}
                        >
                            Mensile
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full transition-all ${
                                isAnnual ? 'bg-black text-white' : 'text-gray-600'
                            }`}
                            onClick={() => setIsAnnual(true)}
                        >
                            Annuale
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 ${
                                pkg.highlight ? 'ring-2 ring-black shadow-xl' : ''
                            }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-yellow-300 text-black px-4 py-1 rounded-full text-sm font-medium">
                    Più Popolare
                  </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                                <p className="text-gray-600 mb-6">{pkg.description}</p>
                                <div className="flex items-center justify-center mb-4">
                                    <span className="text-4xl font-bold text-black">€{isAnnual ? pkg.annualPrice : pkg.monthlyPrice}</span>
                                    <span className="text-gray-600 ml-2">/mese</span>
                                </div>
                                {isAnnual && (
                                    <div className="text-sm text-emerald-600 font-medium">
                                        Risparmi €{(pkg.monthlyPrice - pkg.annualPrice) * 12}/anno
                                    </div>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <Check className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl flex items-center justify-center transition-all ${
                                pkg.highlight
                                    ? 'bg-black text-white hover:bg-gray-800'
                                    : 'bg-gray-100 text-black hover:bg-gray-200'
                            }`}>
                                Scegli {pkg.name}
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12 text-gray-600">
                    <p>Tutti i pacchetti includono una garanzia soddisfatti o rimborsati di 30 giorni</p>
                    <p className="mt-2">
                        Hai domande? <button className="text-black underline">Contattaci</button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;