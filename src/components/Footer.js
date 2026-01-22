import React, { useState } from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-gray-100 rounded-xl bg-white overflow-hidden">
            <button
                className="w-full px-6 py-4 text-left font-medium flex justify-between items-center"
                onClick={onClick}
            >
                {question}
                <ChevronDown
                    className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                    isOpen ? 'max-h-48 pb-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="text-gray-600">{answer}</p>
            </div>
        </div>
    );
};

const Footer = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: "Come funziona il percorso di allenamento?",
            answer: "Il percorso inizia con una consulenza gratuita dove valutiamo i tuoi obiettivi e la tua situazione attuale. In base a questo, creiamo un programma personalizzato che include allenamento, nutrizione e supporto costante."
        },
        {
            question: "Quanto tempo ci vuole per vedere i primi risultati?",
            answer: "Con impegno e costanza, i primi risultati sono visibili dopo 4-6 settimane. Ogni persona è diversa, ma garantiamo un monitoraggio costante per ottimizzare il tuo percorso."
        },
        {
            question: "Posso allenarmi sia online che dal vivo?",
            answer: "Sì, offriamo entrambe le modalità. Puoi scegliere quella che preferisci o combinarle in base alle tue esigenze e disponibilità."
        },
        {
            question: "Come funziona il supporto durante il percorso?",
            answer: "Avrai accesso a supporto continuo tramite app dedicata, check-in settimanali e consulenze periodiche. Nei pacchetti premium è incluso anche il supporto WhatsApp 24/7."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <div className="relative inline-block mb-4">
                            <span className="relative z-10 text-black font-medium px-4 py-1">FAQ</span>
                            <div className="absolute inset-0 bg-yellow-300 transform -rotate-1"></div>
                        </div>
                        <h2 className="text-3xl font-bold text-black">Domande Frequenti</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openFAQ === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer Content */}
                <div className="border-t border-gray-200 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Brand Column */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-black">NICOLO POLIDORI</h3>
                            <p className="text-gray-600">
                                Trasforma il tuo corpo e la tua vita con programmi di allenamento personalizzati.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="mailto:info@nicolopolidori.it" className="text-gray-600 hover:text-black transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-black mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#about" className="text-gray-600 hover:text-black transition-colors">Chi Sono</a></li>
                                <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Servizi</a></li>
                                <li><a href="#transformations" className="text-gray-600 hover:text-black transition-colors">Trasformazioni</a></li>
                                <li><a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Prezzi</a></li>
                            </ul>
                        </div>

                        {/* Contacts */}
                        <div>
                            <h4 className="font-semibold text-black mb-4">Contatti</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-600">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <a href="tel:+39123456789" className="hover:text-black transition-colors">+39 334 996 7823</a>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <a href="mailto:info@nicolopolidori.it" className="hover:text-black transition-colors">info@nicolopolidori.it</a>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span>Milano, IT</span>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="font-semibold text-black mb-4">Newsletter</h4>
                            <p className="text-gray-600 mb-4">Iscriviti per ricevere consigli e novità sul fitness.</p>
                            <form className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="La tua email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
                                />
                                <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                                    Iscriviti
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
                        <p>© {new Date().getFullYear()} Nicolo Polidori Training. Tutti i diritti riservati.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;