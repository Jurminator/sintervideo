
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Play, Gift, ArrowRight, Sparkles, UserCheck, Edit, Mail } from "lucide-react";
import { motion } from "framer-motion";

const exampleVideos = [
    {
        characterName: 'Bad Sint',
        recipient: 'Marko',
        videoSrc: 'https://storage.googleapis.com/base44-storage-production/sample-video.mp4' // Placeholder
    },
    {
        characterName: 'Rapper Piet',
        recipient: 'Lea',
        videoSrc: 'https://storage.googleapis.com/base44-storage-production/sample-video.mp4' // Placeholder
    },
    {
        characterName: 'Pixar Sint',
        recipient: 'Sam',
        videoSrc: 'https://storage.googleapis.com/base44-storage-production/sample-video.mp4' // Placeholder
    }
];

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center pt-16 pb-12">
                        <motion.div 
                            className="text-center md:text-left"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                                <Sparkles className="w-8 h-8 text-amber-500" />
                                <span className="text-lg font-medium text-red-700 tracking-wide">SINTERKLAAS 2024</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Verras met een
                                <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent block">
                                    Persoonlijk Video Gedicht
                                </span>
                            </h1>
                            
                            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                                Het leukste kado komt met een video gedicht van de Sint zelf. Of een van de andere karakters.
                            </p>
                            
                            <div className="flex justify-center md:justify-start">
                                <Link to={createPageUrl("Create")}>
                                    <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                        <Gift className="w-5 h-5 mr-2" />
                                        Start je Video Gedicht
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <video
                                src="https://storage.googleapis.com/base44-storage-production/sample-video.mp4" 
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Examples Section */}
            <section className="py-20 bg-gray-50/70">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Zie de Magie in Actie</h2>
                        <p className="text-xl text-gray-600">Onze karakters kunnen niet wachten om jouw boodschap te brengen.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {exampleVideos.map((video, index) => (
                            <motion.div
                                key={index}
                                className="relative group rounded-2xl overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <video
                                    src={video.videoSrc}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover aspect-[9/16]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{video.characterName} voor {video.recipient}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                         <Link to={createPageUrl("Examples")}>
                            <Button variant="outline" className="px-8 py-4 text-lg rounded-2xl border-2 border-gray-300 hover:border-red-300 hover:bg-red-50 transition-all duration-300">
                                <Play className="w-5 h-5 mr-2" />
                                Meer Voorbeelden
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hoe werkt het?</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Kies je karakter", description: "Kies de perfecte boodschapper voor jouw video gedicht.", icon: UserCheck, color: "red" },
                            { step: "02", title: "Kies je gedicht stijl", description: "Een klassiek gedicht, een stoere rap, of een vrolijk liedje.", icon: Play, color: "amber" },
                            { step: "03", title: "Deel je kado en details", description: "Vertel ons over het kado en de ontvanger voor een persoonlijke touch.", icon: Edit, color: "green" },
                            { step: "04", title: "Ontvang je video", description: "Binnen 24u in je mail en eventueel als verrassing met de post!", icon: Mail, color: "purple" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 h-full">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${item.color}-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                                    </div>
                                    <div className={`text-2xl font-bold text-${item.color}-600 mb-3`}>{item.step}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-amber-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Maak dit Sinterklaas onvergetelijk
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            Geef het perfecte video gedicht dat voor altijd herinnerd wordt.
                        </p>
                        <Link to={createPageUrl("Create")}>
                            <Button className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                                <Gift className="w-6 h-6 mr-3" />
                                Begin Nu
                                <Sparkles className="w-6 h-6 ml-3" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
