
import React, { useState, useEffect } from 'react';
import { VideoOrder } from '@/api/entities';
import { createPageUrl } from '@/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Clock, CheckCircle, Gift, Mail, Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

const statusConfig = {
    pending: { label: 'In Behandeling', color: 'bg-yellow-100 text-yellow-800', icon: Clock },
    processing: { label: 'In Productie', color: 'bg-blue-100 text-blue-800', icon: Package },
    completed: { label: 'Klaar', color: 'bg-green-100 text-green-800', icon: CheckCircle },
    delivered: { label: 'Geleverd', color: 'bg-purple-100 text-purple-800', icon: Mail }
};

const giftLabels = {
    speelgoed: 'Speelgoed',
    boek: 'Boek', 
    kleding: 'Kleding',
    snoep: 'Snoep',
    sport: 'Sport',
    muziek: 'Muziek',
    kunst: 'Kunst',
    anders: 'Anders'
};

const styleLabels = {
    gedicht: 'Gedicht',
    rap: 'Rap',
    liedje: 'Liedje'
};

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const fetchedOrders = await VideoOrder.list('-created_date');
            setOrders(fetchedOrders);
        } catch (error) {
            console.error('Error loading orders:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4" />
                        <p className="text-gray-600">Bestellingen laden...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Mijn Bestellingen</h1>
                    <p className="text-xl text-gray-600">
                        Overzicht van alle jouw Sinterklaas video's
                    </p>
                </motion.div>

                {orders.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Package className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Nog geen bestellingen</h3>
                        <p className="text-gray-600 mb-8">Maak je eerste persoonlijke Sinterklaas video!</p>
                        <Button 
                            onClick={() => window.location.href = createPageUrl('Create')}
                            className="bg-red-600 hover:bg-red-700 px-8 py-3 text-lg rounded-xl"
                        >
                            <Gift className="w-5 h-5 mr-2" />
                            Maak je Eerste Video
                        </Button>
                    </motion.div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order, index) => {
                            const status = statusConfig[order.order_status];
                            const StatusIcon = status.icon;
                            
                            return (
                                <motion.div
                                    key={order.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <CardHeader className="bg-gradient-to-r from-red-50 to-amber-50">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div>
                                                    <CardTitle className="text-xl text-gray-900 mb-2">
                                                        Video voor {order.recipient_name}
                                                    </CardTitle>
                                                    <p className="text-gray-600">
                                                        Besteld op {format(new Date(order.created_date), 'dd MMMM yyyy \'om\' HH:mm', { locale: nl })}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-end gap-2">
                                                    <Badge className={status.color}>
                                                        <StatusIcon className="w-4 h-4 mr-1" />
                                                        {status.label}
                                                    </Badge>
                                                    <span className="text-sm text-gray-500">#{order.id.slice(-8)}</span>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        
                                        <CardContent className="p-6">
                                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-2">Cadeau Details</h4>
                                                    <div className="space-y-1">
                                                        <p className="text-sm text-gray-600">
                                                            Type: <span className="font-medium">{giftLabels[order.gift_type]}</span>
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            Cadeau: <span className="font-medium">{order.gift_description}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-2">Video Info</h4>
                                                    <div className="space-y-1">
                                                        <p className="text-sm text-gray-600">
                                                            Stijl: <span className="font-medium">{styleLabels[order.video_style]}</span>
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            Van: <span className="font-medium">{order.sender_name}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-2">Levering</h4>
                                                    <div className="space-y-1">
                                                        <p className="text-sm text-gray-600">
                                                            Email: <span className="font-medium">{order.sender_email}</span>
                                                        </p>
                                                        {order.delivery_date && (
                                                            <p className="text-sm text-gray-600">
                                                                Gewenst: <span className="font-medium">
                                                                    {format(new Date(order.delivery_date), 'dd MMMM', { locale: nl })}
                                                                </span>
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {order.special_message && (
                                                <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                                                    <h4 className="font-semibold text-gray-900 mb-2">Speciale Boodschap</h4>
                                                    <p className="text-sm text-gray-700 italic">"{order.special_message}"</p>
                                                </div>
                                            )}
                                            
                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                                                <div className="text-right">
                                                    <span className="text-2xl font-bold text-gray-900">€{order.price}</span>
                                                </div>
                                                
                                                <div className="flex gap-2">
                                                    {order.video_url ? (
                                                        <>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => window.open(order.video_url, '_blank')}
                                                            >
                                                                <Eye className="w-4 h-4 mr-2" />
                                                                Bekijken
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                className="bg-green-600 hover:bg-green-700"
                                                                onClick={() => window.open(order.video_url, '_blank')}
                                                            >
                                                                <Download className="w-4 h-4 mr-2" />
                                                                Downloaden
                                                            </Button>
                                                        </>
                                                    ) : (
                                                        <Button disabled size="sm" variant="outline">
                                                            <Clock className="w-4 h-4 mr-2" />
                                                            In Behandeling
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
