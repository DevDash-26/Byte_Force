"use client";

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  // Determine dynamic text and routing based on the URL parameter
  const isStaff = role === 'staff';
  const roleTitle = isStaff ? 'STAFF LOGIN' : 'STUDENT LOGIN';
  const dashboardRoute = isStaff ? '/dashboard/staff' : '/dashboard/student';

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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 z-0 flex justify-between items-center px-12 md:px-32 opacity-60">
            <span className="text-slate-300 font-bold tracking-widest rotate-90 hidden md:block">BG IMAGE</span>
            <span className="text-slate-300 font-bold tracking-widest -rotate-90 hidden md:block">BG IMAGE</span>
        </div>

        {/* CENTRAL LOGIN CARD */}
        <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-10 flex flex-col items-center">
          
          {/* Main Portal Logo Area */}
          <div className="w-full h-32 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl mb-6 flex flex-col items-center justify-center">
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

          {/* Dynamic Form Title */}
          <div className="w-full bg-red-50 border border-red-100 rounded-lg py-3 mb-6 flex justify-center">
            <h2 className="text-sm font-bold text-red-800 tracking-wider">
              {roleTitle}
            </h2>
          </div>

          {/* Login Form */}
          <form className="w-full space-y-4">
            
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="EMAIL" 
                className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-slate-400 font-medium"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="PASSWORD" 
                className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-slate-400 font-medium"
                required
              />
            </div>

            {/* Dynamic Login Action */}
            <Link 
              href={dashboardRoute} 
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all shadow-sm mt-4"
            >
              LOGIN
            </Link>
            
            {/* Back to Role Selection */}
            <div className="text-center mt-6">
              <Link href="/" className="text-xs font-medium text-slate-500 hover:text-red-600 transition-colors">
                &larr; Back to role selection
              </Link>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}