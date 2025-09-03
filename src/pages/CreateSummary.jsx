import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';
import { useLocalStorage } from '../components/useLocalStorage';
import { VideoOrder } from '@/api/entities';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

const characterLabels = {
    normal_sint: 'De Normale Sint', bad_sint: 'Bad Sint', pixar_sint: 'Pixar Sint', 
    rapper_piet: 'Rapper Piet', classic_sint: 'De Klassieke Sint', young_sint: 'De Jonge Sint'
};
const styleLabels = { gedicht: 'klassiek gedicht', rap: 'moderne rap', liedje: 'vrolijk liedje' };

export default function CreateSummary() {
    const navigate = useNavigate();
    const [formData, setFormData] = useLocalStorage('videoOrderData', {});
    const [isProcessing, setIsProcessing] = useState(false);

    const handleOrderSubmit = async () => {
        setIsProcessing(true);
        try {
            const orderData = { ...formData, price: 24.99 };
            const order = await VideoOrder.create(orderData);
            
            navigate(createPageUrl(`Confirmation?orderId=${order.id}`));
        } catch (error) {
            console.error('Error creating order:', error);
            setIsProcessing(false);
        }
    };
    
    return (
        <div className="min-h-screen py-12 px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Bijna klaar!</h1>
                    <p className="text-xl text-gray-600">Controleer je bestelling en reken veilig af.</p>
                </div>

                <Card className="shadow-2xl mb-8">
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Visual Recap Placeholder */}
                            <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                                <p className="text-gray-500">Visuele recap placeholder</p>
                            </div>
                            {/* Order Details */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-800">Jouw Persoonlijke Video Gedicht</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    <strong>{characterLabels[formData.character] || 'Het gekozen karakter'}</strong> maakt een <strong>{styleLabels[formData.video_style] || 'uniek video gedicht'}</strong> voor <strong>{formData.recipient_name || 'de ontvanger'}</strong> voor bij zijn/haar kado: <strong>{formData.gift_description || 'een leuke verrassing'}</strong>.
                                    Het wordt binnen 10 minuten naar <strong>{formData.sender_name || 'jou'}</strong> ({formData.sender_email || 'je emailadres'}) gestuurd.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex flex-col items-center">
                    <div className="text-center mb-6">
                        <p className="text-lg text-gray-600">Totaal te betalen:</p>
                        <p className="text-5xl font-bold text-red-600">€{formData.price.toFixed(2)}</p>
                    </div>

                    <Button
                        onClick={handleOrderSubmit}
                        disabled={isProcessing}
                        className="bg-green-600 hover:bg-green-700 text-white px-12 py-8 text-2xl rounded-2xl shadow-lg"
                    >
                        {isProcessing ? (
                            <>
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                                Verwerken...
                            </>
                        ) : (
                            <>
                                <CreditCard className="w-8 h-8 mr-4" />
                                Veilig Betalen
                            </>
                        )}
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}