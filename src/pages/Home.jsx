import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, GraduationCap, Trophy, BookOpen, Star } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Home() {
  const stats = [
    { icon: Trophy, value: "25+", label: "Years of Excellence" },
    { icon: Users, value: "1:15", label: "Teacher-Student Ratio" },
    { icon: GraduationCap, value: "100%", label: "College Acceptance" },
    { icon: BookOpen, value: "40+", label: "Co-Curricular Activities" }
  ];

  const testimonials = [
    { name: "Mrs. Sunita Sharma", role: "Parent of Grade 9 Student", quote: "EAK International has transformed my child's confidence. The focus on both academics and values is exceptional." },
    { name: "Aarav Mehta", role: "Head Boy, Class XII", quote: "The world-class labs and encouraging faculty gave me the platform to excel in both science and leadership." }
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white py-24 px-6 md:px-12 rounded-b-3xl overflow-hidden shadow-2xl">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <span className="bg-teal-500/20 text-teal-300 border border-teal-500/30 text-sm px-4 py-1.5 rounded-full font-semibold inline-block backdrop-blur-md">
            ✨ Admissions Open for 2026-27 Academic Year
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Nurturing Young Minds For <span className="text-teal-400">Global Leadership</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            {schoolInfo.tagline}. Delivering world-class academics with holistic character development.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link to="/admissions" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-teal-900/40 transition transform hover:-translate-y-0.5">
              Apply For Admission Now
            </Link>
            <Link to="/facilities" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold backdrop-blur-md transition">
              Explore Campus
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Statistics Bar */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 p-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 space-y-2">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                <stat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-extrabold text-slate-900">{stat.value}</h4>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <span className="text-teal-600 font-bold text-xs tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Why EAK International</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built on Values, Innovation & Excellence</h2>
          <p className="text-slate-600">We empower students to think critically and lead with empathy.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "Global Standard Curriculum", desc: "Equipping students with analytical thinking, STEM training, and modern technical skills." },
            { icon: ShieldCheck, title: "Safe & Modern Campus", desc: "24/7 security surveillance, RFID access, smart interactive classrooms, and sanitized green zones." },
            { icon: Users, title: "Expert Mentorship Faculty", desc: "Passionate educators focused on personalized learning, emotional well-being, and career guidance." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition space-y-4 group">
              <div className="w-14 h-14 bg-teal-50 group-hover:bg-teal-600 text-teal-600 group-hover:text-white rounded-2xl flex items-center justify-center transition duration-300">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principal's Message */}
      <section className="max-w-7xl mx-auto px-6 bg-gradient-to-r from-teal-50/80 to-slate-50 rounded-3xl p-8 md:p-12 border border-teal-100 shadow-sm">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <img src={schoolInfo.principal.image} alt="Principal" className="rounded-2xl shadow-lg w-full h-80 object-cover border-4 border-white" />
          <div className="md:col-span-2 space-y-4">
            <span className="text-teal-700 font-semibold text-xs uppercase tracking-wider bg-teal-100/60 px-3 py-1 rounded-full">Leadership Insight</span>
            <h2 className="text-3xl font-bold text-slate-900">Message From The Principal</h2>
            <blockquote className="text-slate-700 italic border-l-4 border-teal-600 pl-4 py-1 text-base leading-relaxed">
              "{schoolInfo.principal.message}"
            </blockquote>
            <div>
              <p className="font-bold text-slate-900 text-lg">{schoolInfo.principal.name}</p>
              <p className="text-slate-500 text-sm">Principal, EAK International School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">What Parents & Students Say</h2>
          <p className="text-slate-600 mt-2">Hear stories of success and trust from our community.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 italic">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-teal-600 text-xs font-semibold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}