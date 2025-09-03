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

export default function CreateDetails() {
    const navigate = useNavigate();
    const [formData, setFormData] = useLocalStorage('videoOrderData', {});

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const canProceed = formData.gift_description && formData.recipient_trait;

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Card className="w-full max-w-lg shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-4xl font-bold">Meer over {formData.recipient_name || 'de ontvanger'}</CardTitle>
                        <CardDescription className="text-lg pt-2">Deze details maken het gedicht extra persoonlijk!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={(e) => { e.preventDefault(); navigate(createPageUrl('CreateSummary')); }} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="gift_description" className="text-md font-semibold text-gray-700">Welk kado krijgt {formData.recipient_name || 'hij/zij'}? *</Label>
                                <Input id="gift_description" placeholder="Bijv. Een rode fiets, een pop..." value={formData.gift_description || ''} onChange={handleChange} required className="p-6 text-lg" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="recipient_trait" className="text-md font-semibold text-gray-700">Leuke eigenschap of herinnering *</Label>
                                <Input id="recipient_trait" placeholder="Bijv. Is altijd aan het zingen, kan goed voetballen..." value={formData.recipient_trait || ''} onChange={handleChange} required className="p-6 text-lg" />
                            </div>
                            <Button type="submit" disabled={!canProceed} className="w-full bg-red-600 hover:bg-red-700 p-8 text-xl">
                                Naar Overzicht <ArrowRight className="ml-2" />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}