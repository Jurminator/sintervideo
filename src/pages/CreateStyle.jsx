import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';
import { useLocalStorage } from '../components/useLocalStorage';
import { Card } from '@/components/ui/card';
import { Music, Mic, BookOpen } from 'lucide-react';

const videoStyles = [
    { value: 'gedicht', title: 'Klassiek Gedicht', icon: BookOpen },
    { value: 'rap', title: 'Moderne Rap', icon: Mic },
    { value: 'liedje', title: 'Vrolijk Liedje', icon: Music }
];

export default function CreateStyle() {
    const navigate = useNavigate();
    const [formData, setFormData] = useLocalStorage('videoOrderData', {});
    
    const handleSelect = (style) => {
        setFormData(prev => ({ ...prev, video_style: style }));
        navigate(createPageUrl('CreateRecipient'));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center w-full max-w-4xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Kies je video stijl</h1>
                <p className="text-xl text-gray-600 mb-12">Welke sfeer past het beste bij het kado?</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {videoStyles.map((style, index) => {
                        const Icon = style.icon;
                        return (
                            <motion.div
                                key={style.value}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <Card 
                                    onClick={() => handleSelect(style.value)}
                                    className="p-8 aspect-square flex flex-col items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl hover:border-red-500 border-2 border-transparent transition-all"
                                >
                                    <Icon className="w-24 h-24 text-red-500 mb-6" />
                                    <h2 className="text-2xl font-bold text-gray-800">{style.title}</h2>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}