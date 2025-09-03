
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLocalStorage } from '../components/useLocalStorage';

const characters = [
    { id: 'normal_sint', name: 'Normale Sint', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cda055bff_normale-sint.png' },
    { id: 'bad_sint', name: 'Bad Sint', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6bc3d7d25_bad-sint.png' },
    { id: 'pixar_sint', name: 'Pixar Sint', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a3a039b13_pixar-sint.png' },
    { id: 'rapper_piet', name: 'Rapper Piet', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697702d43_piet.png' },
    { id: 'classic_sint', name: 'Klassieke Sint', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cda055bff_normale-sint.png' },
    { id: 'young_sint', name: 'Jonge Sint', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cda055bff_normale-sint.png' },
];

export default function Create() {
    const navigate = useNavigate();
    const [formData, setFormData] = useLocalStorage('videoOrderData', { price: 24.99 });
    const [selectedChar, setSelectedChar] = React.useState(formData.character || null);

    const handleSelect = (charId) => {
        setSelectedChar(charId);
        setFormData(prev => ({ ...prev, character: charId }));
        setTimeout(() => {
            navigate(createPageUrl('CreateStyle'));
        }, 300);
    };

    return (
        <div className="min-h-screen py-12 px-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-6xl mx-auto"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Kies je karakter</h1>
                <p className="text-xl text-gray-600 mb-12">Wie mag jouw video gedicht voordragen?</p>
                
                <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
                    {characters.map((char, index) => (
                        <motion.div
                            key={char.id}
                            className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[9/16]"
                            onClick={() => handleSelect(char.id)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img 
                                src={char.img}
                                alt={char.name}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <h2 className="absolute bottom-4 left-4 right-4 text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                                {char.name}
                            </h2>
                            {selectedChar === char.id && (
                                <motion.div 
                                    className="absolute inset-0 border-4 border-red-500 rounded-2xl ring-4 ring-red-200"
                                    layoutId="selection-border"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
