import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      
      {/* HEADER */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 z-10 shadow-sm">
        <span className="text-xl font-black text-blue-700 tracking-tighter">
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

        {/* CENTRAL LOGIN CARD */}
        <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-10 flex flex-col items-center">
          
          {/* Main Portal Logo Area */}
          <div className="w-full h-32 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl mb-6 flex items-center justify-center">
            <div className="text-center">
              <span className="block text-3xl font-black text-blue-700 tracking-tighter">
                UCL<span className="text-slate-800">Central</span>
              </span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">
                Portal
              </span>
            </div>
          </div>

          {/* Form Title */}
          <div className="w-full bg-blue-50 border border-blue-100 rounded-lg py-3 mb-6 flex justify-center">
            <h2 className="text-sm font-bold text-blue-800 tracking-wider">
              STUDENT LOGIN
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
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400 font-medium"
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
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400 font-medium"
                required
              />
            </div>

            {/* Login Action - Hardcoded to route to the student dashboard for UI testing */}
            <Link 
              href="/dashboard/student" 
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-sm mt-4"
            >
              LOGIN
            </Link>
            
            {/* Back to Role Selection */}
            <div className="text-center mt-6">
              <Link href="/" className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors">
                ← Back to role selection
              </Link>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}