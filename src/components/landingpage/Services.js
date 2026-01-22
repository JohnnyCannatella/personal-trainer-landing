import React, { useState } from 'react';
import { Users, Video, Calendar, Trophy, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription  } from '../ui/dialog';

const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            title: "Personal Training dal Vivo",
            description: "Allenamenti personalizzati one-to-one in palestra con supporto costante e tecnica perfetta.",
            icon: Users,
            highlight: "IN PRESENZA",
            detailedTitle: "Personal Training Personalizzato",
            details: [
                {
                    subtitle: "Un Percorso Su Misura",
                    text: "Ogni sessione di allenamento è strutturata sulle tue esigenze specifiche, tenendo conto del tuo livello di partenza, dei tuoi obiettivi e delle tue preferenze."
                },
                {
                    subtitle: "Supervisione Costante",
                    text: "Durante ogni esercizio riceverai feedback immediati sulla tecnica di esecuzione, garantendo la massima efficacia e sicurezza dell'allenamento."
                },
                {
                    subtitle: "Monitoraggio Progressi",
                    text: "Utilizziamo strumenti avanzati per tracciare i tuoi progressi: composizione corporea, forza, resistenza e flessibilità vengono monitorati regolarmente."
                },
                {
                    subtitle: "Cosa Include",
                    text: "• Valutazione iniziale completa\n• Piano di allenamento personalizzato\n• Sessioni one-to-one con il trainer\n• Analisi della composizione corporea\n• Supporto nutrizionale base\n• Accesso all'app di tracking"
                }
            ]
        },
        {
            title: "Coaching Online",
            description: "Programmi di allenamento su misura da seguire comodamente da casa con supporto continuo.",
            icon: Video,
            highlight: "DA REMOTO",
            detailedTitle: "Coaching Online Personalizzato",
            details: [
                {
                    subtitle: "Flessibilità Totale",
                    text: "Allenati quando e dove vuoi, mantenendo la qualità di un programma professionale e il supporto costante del tuo coach."
                },
                {
                    subtitle: "Supporto Digitale Avanzato",
                    text: "Attraverso la nostra piattaforma dedicata, riceverai video dimostrativi, feedback sugli esercizi e potrai comunicare direttamente con il tuo trainer."
                },
                {
                    subtitle: "Adattamento Continuo",
                    text: "Il programma viene aggiornato settimanalmente in base ai tuoi progressi e feedback, garantendo risultati costanti."
                },
                {
                    subtitle: "Il Pacchetto Include",
                    text: "• Piano di allenamento settimanale\n• Video coaching personalizzati\n• Check-in settimanali\n• Supporto via chat 24/7\n• Analisi video della tecnica\n• Community esclusiva"
                }
            ]
        },
        {
            title: "Programmi Personalizzati",
            description: "Piani di allenamento studiati sulle tue esigenze con monitoraggio costante dei progressi.",
            icon: Calendar,
            highlight: "SU MISURA",
            detailedTitle: "Programmi di Allenamento Personalizzati",
            details: [
                {
                    subtitle: "Analisi Approfondita",
                    text: "Partiamo da una valutazione completa del tuo stile di vita, obiettivi, storia di allenamento e eventuali limitazioni per creare il programma perfetto."
                },
                {
                    subtitle: "Pianificazione Strategica",
                    text: "Sviluppiamo un piano periodizzato che ottimizza i tuoi risultati nel tempo, bilanciando intensità e recupero."
                },
                {
                    subtitle: "Supporto Nutrizionale",
                    text: "Linee guida nutrizionali personalizzate per massimizzare i risultati del tuo allenamento."
                },
                {
                    subtitle: "Caratteristiche del Programma",
                    text: "• Valutazione iniziale dettagliata\n• Piano di allenamento periodizzato\n• Guida nutrizionale base\n• Aggiornamenti mensili\n• Supporto via email\n• Tutorial esercizi"
                }
            ]
        },
        {
            title: "Preparazione Atletica",
            description: "Programmi specifici per atleti e sportivi che vogliono migliorare le proprie performance.",
            icon: Trophy,
            highlight: "PERFORMANCE",
            detailedTitle: "Preparazione Atletica Avanzata",
            details: [
                {
                    subtitle: "Performance Optimization",
                    text: "Programmi specifici per migliorare le componenti chiave della tua disciplina: forza, potenza, velocità, agilità e resistenza."
                },
                {
                    subtitle: "Analisi Biomeccanica",
                    text: "Valutazione dettagliata dei pattern di movimento specifici del tuo sport per ottimizzare la tecnica e prevenire infortuni."
                },
                {
                    subtitle: "Periodizzazione Avanzata",
                    text: "Programmazione scientifica dell'allenamento in base al tuo calendario competitivo e obiettivi specifici."
                },
                {
                    subtitle: "Il Programma Include",
                    text: "• Valutazione performance iniziale\n• Programma periodizzato specifico\n• Analisi biomeccanica\n• Monitoraggio del carico\n• Supporto gare\n• Recupero e prevenzione"
                }
            ]
        }
    ];

    return (
        <section className="py-20 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-4">
                        <span className="relative z-10 text-black font-medium px-4 py-1">I NOSTRI SERVIZI</span>
                        <div className="absolute inset-0 bg-yellow-300 transform -rotate-1"></div>
                    </div>
                    <h2 className="text-4xl font-bold text-black mb-6">Scegli il Tuo Percorso</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ogni percorso è studiato per adattarsi perfettamente alle tue esigenze,
                        al tuo livello di partenza e ai tuoi obiettivi finali.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Service Icon */}
                            <div className="mb-6">
                                <service.icon className="w-12 h-12 text-black" />
                            </div>

                            {/* Highlight Tag */}
                            <div className="absolute top-4 right-4">
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>

                            {/* CTA Link */}
                            <button
                                onClick={() => setSelectedService(service)}
                                className="flex items-center text-black font-medium group-hover:text-gray-800"
                            >
                                Scopri di più
                                <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Service Detail Modal */}
                <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">
                                {selectedService?.detailedTitle}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                            {selectedService?.details.map((detail, index) => (
                                <div key={index} className="space-y-2">
                                    <h4 className="font-semibold text-lg text-black">
                                        {detail.subtitle}
                                    </h4>
                                    <DialogDescription className="text-gray-600 whitespace-pre-line">
                                        {detail.text}
                                    </DialogDescription>
                                </div>
                            ))}
                            <div className="pt-4">
                                <button className="w-full px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all">
                                    Prenota una Consulenza
                                </button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <button className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all group">
                        Prenota una Consulenza Gratuita
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;