
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const demoVideos = [
    { 
        id: 'normal_sint', 
        name: 'Normale Sint', 
        img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cda055bff_normale-sint.png' 
    },
    { 
        id: 'bad_sint', 
        name: 'Bad Sint', 
        img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6bc3d7d25_bad-sint.png' 
    },
    { 
        id: 'pixar_sint', 
        name: 'Pixar Sint', 
        img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a3a039b13_pixar-sint.png' 
    },
    { 
        id: 'rapper_piet', 
        name: 'Rapper Piet', 
        img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697702d43_piet.png' 
    },
    { 
        id: 'classic_sint', 
        name: 'Klassieke Sint', 
        img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cda055bff_normale-sint.png' 
    },
    { 
        id: 'young_sint', 
        name: 'Jonge Sint', 
        img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cda055bff_normale-sint.png' 
    },
];

export default function Examples() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Voorbeelden</h1>
                    <p className="text-xl text-gray-600">Bekijk hier een voorproefje van onze karakters in actie.</p>
                </motion.div>

                <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {demoVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[9/16] shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img 
                                src={video.img}
                                alt={video.name}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-4">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white/90 group-hover:scale-110 transition-all duration-300" />
                                </div>
                                <h2 className="text-lg font-bold text-white tracking-tight self-start mt-auto leading-tight">
                                    {video.name}
                                </h2>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
