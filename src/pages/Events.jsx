import React, { useState } from 'react';
import { noticesData } from '../data/schoolData';

export default function Events() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Events', 'Exams', 'Holidays', 'Circulars'];

  const filteredNotices = filter === 'All'
    ? noticesData
    : noticesData.filter((item) => item.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Events & Circulars</h1>
        <p className="text-slate-600 mt-2">Stay updated with the latest announcements and school schedule.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
              filter === cat
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notice Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredNotices.map((notice) => (
          <div key={notice.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full border border-teal-200">
                {notice.category}
              </span>
              <span className="text-xs text-slate-400 font-medium">{notice.date}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{notice.title}</h3>
            <p className="text-slate-600 text-sm">{notice.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}