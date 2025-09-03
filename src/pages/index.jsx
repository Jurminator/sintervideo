import Layout from "./Layout.jsx";

import Home from "./Home";

import Create from "./Create";

import Confirmation from "./Confirmation";

import Orders from "./Orders";

import Examples from "./Examples";

import CreateStyle from "./CreateStyle";

import CreateRecipient from "./CreateRecipient";

import CreateDetails from "./CreateDetails";

import CreateSummary from "./CreateSummary";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Create: Create,
    
    Confirmation: Confirmation,
    
    Orders: Orders,
    
    Examples: Examples,
    
    CreateStyle: CreateStyle,
    
    CreateRecipient: CreateRecipient,
    
    CreateDetails: CreateDetails,
    
    CreateSummary: CreateSummary,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Create" element={<Create />} />
                
                <Route path="/Confirmation" element={<Confirmation />} />
                
                <Route path="/Orders" element={<Orders />} />
                
                <Route path="/Examples" element={<Examples />} />
                
                <Route path="/CreateStyle" element={<CreateStyle />} />
                
                <Route path="/CreateRecipient" element={<CreateRecipient />} />
                
                <Route path="/CreateDetails" element={<CreateDetails />} />
                
                <Route path="/CreateSummary" element={<CreateSummary />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}