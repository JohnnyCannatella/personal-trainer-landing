import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <motion.h1
                    className="text-5xl font-bold text-black text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    CONTATTATECI
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-gray-100 p-10 rounded-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Mandaci un messaggio</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Messaggio</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                                INVIA MESSAGGIO
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Informazioni di contatto</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-xl mb-2">Email</h3>
                                <p className="text-gray-600">info@aitrainer.com</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Telefono</h3>
                                <p className="text-gray-600">+39 02 1234567</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Address</h3>
                                <p className="text-gray-600">Via xxxxxxxxx, 123<br />20015 Parabiago, Italia</p>
                            </div>
                        </div>


                        <div className="mt-12">
                            <h2 className="text-3xl font-bold mb-6">Seguici su</h2>
                            <div className="flex space-x-4">
                                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                                    <a key={social} href="#" className="text-black hover:text-gray-600 transition-colors duration-300">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;