import React from 'react';
import { 
  BookOpen, 
  FlaskConical, 
  Monitor, 
  ShieldAlert, 
  Bus, 
  Dumbbell, 
  Coffee, 
  Home 
} from 'lucide-react';

export default function Facilities() {
  const facilitiesList = [
    {
      icon: FlaskConical,
      title: "Science & Computer Laboratories",
      desc: "State-of-the-art Physics, Chemistry, Biology labs, and fully equipped computer centers with high-speed internet."
    },
    {
      icon: BookOpen,
      title: "Digital Library & Resource Center",
      desc: "Thousands of reference books, journals, and digital research portals providing a quiet study environment."
    },
    {
      icon: Dumbbell,
      title: "Sports Complex & Gymnasium",
      desc: "Indoor badminton courts, football turf, basketball court, and professional athletic coaching equipment."
    },
    {
      icon: Monitor,
      title: "Smart Classrooms",
      desc: "Air-conditioned classrooms equipped with interactive digital panels, audio systems, and ergonomic seating."
    },
    {
      icon: Bus,
      title: "Safe Transport Fleet",
      desc: "GPS-enabled air-conditioned school buses covering all major city routes with live tracking for parents."
    },
    {
      icon: ShieldAlert,
      title: "24/7 Campus Security",
      desc: "CCTV surveillance across all common areas, RFID attendance gates, and trained professional security personnel."
    },
    {
      icon: Coffee,
      title: "Hygenic Cafeteria",
      desc: "Nutritious, well-balanced vegetarian meals and snacks prepared under strict hygiene and quality guidelines."
    },
    {
      icon: Home,
      title: "Hostel & Boarding Facility",
      desc: "Comfortable separate boarding houses for boys and girls with pastoral care, study halls, and recreation zones."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full border border-teal-200 uppercase tracking-wider">
          Infrastructure & Amenities
        </span>
        <h1 className="text-4xl font-bold text-slate-900">World-Class Campus Facilities</h1>
        <p className="text-slate-600">Designed to foster holistic learning, safety, and physical well-being for every student.</p>
      </div>

      {/* Facilities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilitiesList.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}