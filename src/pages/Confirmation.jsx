
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';
import { CheckCircle, Mail } from 'lucide-react';
import { VideoOrder } from '@/api/entities';
import { useLocalStorage } from '../components/useLocalStorage';
import { Button } from '@/components/ui/button';

export default function Confirmation() {
    const location = useLocation();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [, setFormData] = useLocalStorage('videoOrderData', {});

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const orderId = params.get('orderId');

        if (orderId) {
            VideoOrder.get(orderId)
                .then(fetchedOrder => {
                    setOrder(fetchedOrder);
                    setLoading(false);
                    // Clear local storage after successful order
                    setFormData({});
                })
                .catch(err => {
                    console.error("Failed to fetch order", err);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [location.search, setFormData]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!order) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center">
                <h1 className="text-2xl text-red-600">Kon de bestelling niet vinden.</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 rounded-2xl shadow-2xl max-w-2xl w-full text-center"
            >
                <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Bedankt voor je bestelling!</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Je video gedicht wordt nu met liefde gemaakt en is binnen 10 minuten te vinden in je inbox.
                </p>
                <div className="bg-gray-100 p-6 rounded-lg text-left space-y-3">
                    <p className="flex items-center text-gray-700">
                        <Mail className="w-5 h-5 mr-3 text-red-500" />
                        <strong>Verzonden naar:</strong>&nbsp;{order.sender_email}
                    </p>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
            >
                <Link to={createPageUrl('Create')}>
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        Maak voor nog iemand een Video Gedicht
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}
