import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import Facilities from './pages/Facilities';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities /> }/>
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 text-center py-6 text-sm border-t border-slate-800">
          © 2026 EAK International School. Built with React & Tailwind CSS.
        </footer>
        {/* 2. Add ChatWidget here */}
        <ChatWidget />
      </div>
    </Router>
  );
}