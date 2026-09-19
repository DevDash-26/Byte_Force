import React from 'react';
import Link from 'next/link';

export default function RoleSelectionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      
      {/* HEADER */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 z-10 shadow-sm">
        <img 
          src="/ucl-logo.png" 
          alt="UCL Logo" 
          className="h-8 w-auto mr-2"
        />
        <span className="text-xl font-black text-red-700 tracking-tighter">
          UCL<span className="text-slate-800">Central</span>
        </span>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 relative flex items-center justify-center overflow-hidden">
        
        {/* Background Image Area (Simulated) */}
        {/* To use a real image, replace bg-gradient with: bg-[url('/your-bg.jpg')] bg-cover bg-center */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 z-0 flex justify-between items-center px-12 md:px-32 opacity-60">
            <span className="text-slate-300 font-bold tracking-widest rotate-90 hidden md:block">BG IMAGE</span>
            <span className="text-slate-300 font-bold tracking-widest -rotate-90 hidden md:block">BG IMAGE</span>
        </div>

        {/* CENTRAL SELECTION CARD */}
        <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-10 flex flex-col items-center">
          
          {/* Main Portal Logo Area */}
          <div className="w-full h-32 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl mb-8 flex flex-col items-center justify-center">
            <img 
  src="/ucl-logo.png" 
  alt="UCL Logo" 
  className="h-10 w-auto mb-2"
/>
            <div className="text-center">
              <span className="block text-2xl font-black text-red-700 tracking-tighter leading-none">
                UCL<span className="text-slate-800">Central</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-1 block">
                Portal
              </span>
            </div>
          </div>

          <h2 className="text-sm font-semibold text-slate-500 mb-6 text-center uppercase tracking-wider">
            Select your role to continue
          </h2>

          {/* Role Buttons */}
          <div className="w-full space-y-4">
            
            {/* Student Button */}
            <Link 
              href="/login" 
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-red-700 bg-red-50 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all shadow-sm"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                <svg className="h-5 w-5 text-red-500 group-hover:text-red-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              STUDENT
            </Link>

            {/* Staff Button */}
            <Link 
              href="/login" 
              className="group relative w-full flex justify-center py-4 px-4 border border-slate-200 text-sm font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-800 hover:text-white hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all shadow-sm"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                <svg className="h-5 w-5 text-slate-400 group-hover:text-slate-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              STAFF
            </Link>
            
          </div>
        </div>
      </main>
    </div>
  );
}