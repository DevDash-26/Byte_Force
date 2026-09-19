import React from 'react';
import Link from 'next/link';

export default function StaffDashboard() {
  const navItems = [
    'HOME', 'ANNOUNCEMENTS', 'EVENTS', 'SOCIETIES', 
    'CLASSROOM BOOKING', 'LOST & FOUND', 'ACADEMIC SUPPORT', 
    'STUDENT SUPPORT', 'FACILITY/IT REPORTS', 'FEEDBACK'
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shadow-sm z-20">
        {/* Logo Area */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <img 
            src="/ucl-logo.png" 
            alt="UCL Logo" 
            className="h-8 w-auto mr-2"
          />
          <span className="text-2xl font-black text-red-700 tracking-tighter">
            UCL<span className="text-slate-800">Central</span>
          </span>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href="#" 
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item === 'HOME' 
                  ? 'bg-red-50 text-red-700' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>

      {/* RIGHT SIDE: TOP BAR & MAIN CONTENT */}
      <div className="flex-1 flex flex-col h-screen">
        
        {/* TOP NAVIGATION BAR */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm z-10">
          
          {/* Search Bar with SVG Icon */}
          <div className="relative w-full max-w-md">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search campus resources..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
            />
          </div>
          
          {/* Action Icons (ANU, REM, Profile) */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative" title="Announcements">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative" title="Reminders">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="h-9 w-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold cursor-pointer hover:bg-red-700 transition-colors shadow-sm">
              S
            </div>
          </div>
        </header>

        {/* MAIN DASHBOARD CONTENT */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          
          {/* Welcome Banner */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Welcome back, Senith</h1>
            <p className="text-sm text-slate-500 mt-1">Computer Science Program</p>
          </div>

          {/* 2x2 Grid Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Semester Timetable Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Semester Timetable
              </h3>
              <div className="flex-1 flex items-center justify-center border-2 border-dashed border-red-200 rounded-lg text-slate-400 bg-slate-50 min-h-[30]">
                No classes scheduled for today
              </div>
            </div>
            
            {/* Upcoming Events Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Upcoming Events
              </h3>
              <div className="space-y-3 min-h-[30]">
                <div className="p-3 bg-rose-50 text-rose-800 rounded-lg text-sm font-medium border border-rose-100">Hackathon Briefing - 10:00 AM</div>
                <div className="p-3 bg-slate-50 text-slate-700 rounded-lg text-sm border border-slate-100">Guest Lecture: Cybersecurity - 2:00 PM</div>
              </div>
            </div>
            
            {/* Academic Calendar Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                Academic Calendar
              </h3>
              <div className="flex-1 flex items-center justify-center border-2 border-dashed border-red-200 rounded-lg text-slate-400 bg-slate-50 min-h-[30]">
                Select a date to view milestones
              </div>
            </div>
            
            {/* Campus Services Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                Campus Services
              </h3>
              <div className="grid grid-cols-2 gap-3 min-h-[30]">
                <button className="p-3 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors text-left font-medium">Library Hours</button>
                <button className="p-3 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors text-left font-medium">IT Support</button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}