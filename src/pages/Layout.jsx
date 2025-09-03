
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Gift, Home, Package, Sparkles } from "lucide-react";

export default function Layout({ children, currentPageName }) {
    const location = useLocation();
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-amber-50">
            <style>{`
                :root {
                    --sinterklaas-red: #dc2626;
                    --sinterklaas-gold: #f59e0b;
                    --sinterklaas-white: #ffffff;
                    --sinterklaas-cream: #fef3c7;
                }
                
                .festive-pattern {
                    background-image: 
                        radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
                }
            `}</style>
            
            <nav className="bg-white/90 backdrop-blur-sm border-b border-red-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                                <Gift className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">SinterVideo</h1>
                                <p className="text-xs text-red-600">Persoonlijke video gedichten</p>
                            </div>
                        </Link>
                        
                        <div className="hidden md:flex items-center space-x-8">
                            <Link 
                                to={createPageUrl("Orders")} 
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                                    location.pathname === createPageUrl("Orders") 
                                        ? 'bg-red-100 text-red-700' 
                                        : 'text-gray-600 hover:text-red-600'
                                }`}
                            >
                                <Package className="w-4 h-4" />
                                <span>Mijn Bestellingen</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="festive-pattern">
                {children}
            </main>

            <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <Sparkles className="w-5 h-5 text-amber-300" />
                            <span className="text-lg font-semibold">SinterVideo</span>
                            <Sparkles className="w-5 h-5 text-amber-300" />
                        </div>
                        <p className="text-red-200 mb-2">Maak het perfecte Sinterklaas video gedicht</p>
                        <p className="text-sm text-red-300">© 2025 SinterVideo. Alle rechten voorbehouden.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
