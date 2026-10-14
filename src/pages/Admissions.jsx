import React from 'react';

export default function Admissions() {
  const steps = [
    { num: 1, title: "Enquiry", desc: "Submit online inquiry form or visit campus." },
    { num: 2, title: "Application", desc: "Fill out admission details & attach docs." },
    { num: 3, title: "Interaction", desc: "Student interaction & basic assessment." },
    { num: 4, title: "Selection", desc: "Offer letter issued upon confirmation." },
    { num: 5, title: "Enrollment", desc: "Fee deposit & orientation welcome." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900">Admission Process</h1>
        <p className="text-slate-600 mt-2">Join EAK International School in 5 simple steps.</p>
      </div>

      {/* 5-Step Process Visual */}
      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((step) => (
          <div key={step.num} className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative shadow-sm">
            <span className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto font-bold mb-3">
              {step.num}
            </span>
            <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
            <p className="text-slate-500 text-xs mt-2">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Admission Inquiry Form */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Admission Inquiry Form</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry submitted successfully!'); }} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Parent's Name" required className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-teal-600" />
            <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-teal-600" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-teal-600" />
            <select className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-teal-600">
              <option>Select Grade (Nursery - XII)</option>
              <option>Primary (Grade 1 - 5)</option>
              <option>Middle (Grade 6 - 8)</option>
              <option>Secondary (Grade 9 - 10)</option>
              <option>Senior Secondary (Grade 11 - 12)</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl transition">
            Submit Application Request
          </button>
        </form>
      </div>
    </div>
  );
}