import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';
import { useLocalStorage } from '../components/useLocalStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function CreateRecipient() {
    const navigate = useNavigate();
    const [formData, setFormData] = useLocalStorage('videoOrderData', {});

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const canProceed = formData.recipient_name && formData.sender_name && formData.sender_email;

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Card className="w-full max-w-lg shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-4xl font-bold">Voor wie?</CardTitle>
                        <CardDescription className="text-lg pt-2">Vertel ons wie het video gedicht ontvangt.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={(e) => { e.preventDefault(); navigate(createPageUrl('CreateDetails')); }} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="recipient_name" className="text-md font-semibold text-gray-700">Naam ontvanger *</Label>
                                <Input id="recipient_name" placeholder="Naam van de ontvanger" value={formData.recipient_name || ''} onChange={handleChange} required className="p-6 text-lg" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="sender_name" className="text-md font-semibold text-gray-700">Jouw naam *</Label>
                                <Input id="sender_name" placeholder="Bijv. Mama of Papa" value={formData.sender_name || ''} onChange={handleChange} required className="p-6 text-lg" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="sender_email" className="text-md font-semibold text-gray-700">Jouw emailadres *</Label>
                                <Input id="sender_email" type="email" placeholder="jouw@email.nl" value={formData.sender_email || ''} onChange={handleChange} required className="p-6 text-lg" />
                            </div>
                            <Button type="submit" disabled={!canProceed} className="w-full bg-red-600 hover:bg-red-700 p-8 text-xl">
                                Volgende <ArrowRight className="ml-2" />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}