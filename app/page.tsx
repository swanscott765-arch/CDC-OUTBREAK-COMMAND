"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Activity, Biohazard, ShieldAlert, Skull, Siren, Crosshair, Fingerprint, RadioReceiver } from 'lucide-react';

export default function Home() {
  const [glitch, setGlitch] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  
  useEffect(() => {
    // Random glitch effect trigger
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200 + Math.random() * 500);
    }, 4000);
    
    // Timer
    const timeInterval = setInterval(() => {
      const now = new Date();
      setTimeStr(now.toISOString().replace('T', ' ').substring(0, 19) + ' ZULU');
    }, 1000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-cdc-black text-cdc-white font-sans relative overflow-hidden flex flex-col p-4 md:p-8">
      {/* Scanline CRT overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-40"></div>
      <div className="scan-line"></div>
      
      {/* Top Bar - Header status */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-cdc-line pb-4 mb-6">
        <div>
          <div className="font-mono text-xs text-[#ff3333] uppercase tracking-widest mb-1 flex items-center gap-2">
            <RadioReceiver size={14} className="animate-pulse" />
            Classified: Level 5 Secure Link
          </div>
          <h1 className={`font-display text-5xl md:text-7xl uppercase leading-none tracking-tight text-cdc-white ${glitch ? 'glitch-text' : ''}`} data-text="CDC OUTBREAK COMMAND">
            CDC OUTBREAK COMMAND
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="font-mono text-xs text-stone-400 uppercase tracking-widest mb-1">
            System Time
          </div>
          <div className="font-mono text-xl text-cdc-white">
            {timeStr || "LOADING ZULU TIME..."}
          </div>
        </div>
      </header>

      {/* Marquee urgent ticker */}
      <div className="w-full bg-[#ffb300] text-[#0a0a0a] overflow-hidden mb-8 border-y border-[#ffb300] py-2 relative">
        <div className="marquee-track font-mono text-sm font-bold tracking-widest uppercase">
          <span className="flex items-center gap-4 mx-4">
            <Biohazard size={16} /> 
            WARNING: MUTATING ANOMALY DETECTED IN SECTORS 4, 7, AND 9 
            <Biohazard size={16} />
            MANDATORY ISOLATION IN EFFECT FOR ALL COVID-19 POSITIVE SUBJECTS
            <Biohazard size={16} />
            LETHAL FORCE AUTHORIZED FOR BREACH OF QUARANTINE
            <Biohazard size={16} />
            DO NOT APPROACH ANY INDIVIDUAL EXHIBITING SPASMS OR NECROTIC TISSUE
            <Biohazard size={16} />
          </span>
          <span className="flex items-center gap-4 mx-4">
            <Biohazard size={16} /> 
            WARNING: MUTATING ANOMALY DETECTED IN SECTORS 4, 7, AND 9 
            <Biohazard size={16} />
            MANDATORY ISOLATION IN EFFECT FOR ALL COVID-19 POSITIVE SUBJECTS
            <Biohazard size={16} />
            LETHAL FORCE AUTHORIZED FOR BREACH OF QUARANTINE
            <Biohazard size={16} />
            DO NOT APPROACH ANY INDIVIDUAL EXHIBITING SPASMS OR NECROTIC TISSUE
            <Biohazard size={16} />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-grow">
        
        {/* Left Column: Alerts & Protocol */}
        <div className="lg:col-span-1 space-y-6 flex flex-col">
          
          <div className="brutal-border-red p-4 bg-red-950/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff3333] opacity-20 transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="flex items-center gap-2 mb-4">
              <Siren className="text-[#ff3333] animate-pulse" size={24} />
              <h2 className="font-display text-2xl uppercase text-[#ff3333] tracking-wide">Action Required</h2>
            </div>
            <ul className="font-mono text-xs text-stone-300 space-y-3 uppercase tracking-wider">
              <li className="flex gap-2">
                <span className="text-[#ff3333]">&bull;</span>
                Secure all perimeter doors immediately.
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff3333]">&bull;</span>
                Report positive test results to local authority.
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff3333]">&bull;</span>
                Await automated extraction team.
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff3333]">&bull;</span>
                Terminate infected subjects if hostile.
              </li>
            </ul>
            <button 
              onClick={() => {
                const btn = document.getElementById('ack-btn');
                if (btn) {
                  const original = btn.innerText;
                  btn.innerText = 'BIOMETRIC SCAN REQUIRED';
                  btn.classList.add('bg-black', 'text-[#ff3333]', 'border', 'border-[#ff3333]');
                  setTimeout(() => {
                    btn.innerText = original;
                    btn.classList.remove('bg-black', 'text-[#ff3333]', 'border', 'border-[#ff3333]');
                  }, 2500);
                }
              }}
              id="ack-btn"
              className="mt-6 w-full py-3 bg-[#ff3333] hover:bg-white hover:text-black hover:border-black font-display uppercase tracking-widest text-black transition-colors duration-200 border border-transparent"
            >
              Acknowledge Directive
            </button>
          </div>

          <div className="brutal-border p-4 bg-stone-900/50 flex-grow">
             <div className="flex items-center gap-2 mb-4 border-b border-cdc-line pb-2">
              <Crosshair className="text-cdc-yellow" size={18} />
              <h2 className="font-mono text-sm uppercase text-cdc-yellow tracking-widest">Mutation Profile</h2>
            </div>
            
            <div className="space-y-4 font-mono text-[10px] text-stone-400">
              <div>
                <span className="text-white block mb-1">DESIGNATION:</span>
                V-OMEGA-9 (NECROA-STRAIN)
              </div>
              <div>
                <span className="text-white block mb-1">INCUBATION:</span>
                2-4 HOURS (ACCELERATED)
              </div>
              <div>
                <span className="text-white block mb-1">SYMPTOMS:</span>
                HEMORRHAGING, LOSS OF MOTOR CONTROL, EXTREME AGGRESSION, DECREASED HEART RATE.
              </div>
              <div>
                <span className="text-[#ff3333] block mb-1 animate-pulse">FATALITY RATE:</span>
                99.8% (NON-STANDARD REVIVIFICATION OBSERVED)
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-cdc-line opacity-50 flex justify-center">
              <Fingerprint size={48} className="text-stone-600" />
            </div>
          </div>

        </div>

        {/* Center/Right Column: Main Dashboard Data */}
        <div className="lg:col-span-3 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="brutal-border p-4 bg-stone-900 flex flex-col justify-between hover:bg-stone-800 transition-colors">
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-widest mb-2">Confirmed Cases</div>
              <div className="font-display text-6xl text-white">41,092</div>
              <div className="font-mono text-xs text-[#ff3333] flex items-center gap-1 mt-2">
                <Activity size={12} />
                +1,402 IN LAST 24H
              </div>
            </div>
            
            <div className="brutal-border p-4 bg-[#ffb300] flex flex-col justify-between hover:bg-yellow-400 transition-colors">
              <div className="font-mono text-[10px] text-black uppercase tracking-widest mb-2">Isolation Breaches</div>
              <div className="font-display text-6xl text-black">843</div>
              <div className="font-mono text-xs text-red-800 flex items-center gap-1 mt-2">
                <AlertTriangle size={12} />
                CRITICAL THRESHOLD
              </div>
            </div>

            <div className="brutal-border-red p-4 bg-black flex flex-col justify-between relative overflow-hidden flex-grow">
              <div className="absolute inset-0 bg-checkered opacity-20 pointer-events-none" />
              <div className="font-mono text-[10px] text-[#ff3333] uppercase tracking-widest mb-2 relative z-10">Subjects Terminated</div>
              <div className="font-display text-6xl text-[#ff3333] relative z-10">12,501</div>
              <div className="font-mono text-xs text-stone-400 relative z-10 mt-2">
                <Skull size={12} className="inline mr-1" />
                AWAITING INCINERATION
              </div>
            </div>
          </div>

          <div className="brutal-border bg-stone-900 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-cdc-line bg-black flex justify-between items-center">
              <h2 className="font-mono text-sm uppercase text-white tracking-widest flex items-center gap-2">
                <ShieldAlert size={16} />
                Quarantine Zone Status grid
              </h2>
              <div className="h-2 w-2 rounded-full bg-[#00ff00] animate-pulse"></div>
            </div>
            
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left font-mono border-collapse">
                <thead>
                  <tr className="bg-stone-800/50 text-xs text-stone-400 uppercase tracking-wider">
                    <th className="p-3 font-normal border-b border-cdc-line">Sector</th>
                    <th className="p-3 font-normal border-b border-cdc-line">Status</th>
                    <th className="p-3 font-normal border-b border-cdc-line">Infection Rate</th>
                    <th className="p-3 font-normal border-b border-cdc-line">Enforcement Level</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="hover:bg-stone-800 transition-colors border-b border-cdc-line">
                    <td className="p-3">ZONE A (ALPHA)</td>
                    <td className="p-3 text-[#00ff00]">SECURE</td>
                    <td className="p-3">2.4%</td>
                    <td className="p-3">STANDARD</td>
                  </tr>
                  <tr className="hover:bg-stone-800 transition-colors border-b border-cdc-line">
                    <td className="p-3">ZONE B (BRAVO)</td>
                    <td className="p-3 text-cdc-yellow">COMPROMISED</td>
                    <td className="p-3">45.1%</td>
                    <td className="p-3">ELEVATED</td>
                  </tr>
                  <tr className="hover:bg-stone-800 transition-colors border-b border-cdc-line bg-red-950/20">
                    <td className="p-3 text-[#ff3333] font-bold">ZONE C (CHARLIE)</td>
                    <td className="p-3 text-[#ff3333] flex items-center gap-2">
                      <Skull size={14}/> LOST
                    </td>
                    <td className="p-3 text-[#ff3333]">98.9%</td>
                    <td className="p-3 text-[#ff3333]">LETHAL RESPONSE</td>
                  </tr>
                  <tr className="hover:bg-stone-800 transition-colors border-b border-cdc-line">
                    <td className="p-3">ZONE D (DELTA)</td>
                    <td className="p-3 text-[#00ff00]">SECURE</td>
                    <td className="p-3">0.1%</td>
                    <td className="p-3">STANDARD</td>
                  </tr>
                  <tr className="hover:bg-stone-800 transition-colors">
                    <td className="p-3 relative">
                      ZONE E (ECHO)
                    </td>
                    <td className="p-3 text-cdc-yellow">COMM ERROR</td>
                    <td className="p-3">--</td>
                    <td className="p-3">INVESTIGATING</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="flex justify-between items-center bg-black brutal-border p-4">
             <div className="font-mono text-xs text-stone-500 uppercase tracking-widest max-w-lg">
                Notice: All data transmission is heavily encrypted. Unauthorized access will result in immediate drone strike to origin coordinates. 
             </div>
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="text-cdc-yellow opacity-50"
             >
               <Biohazard size={32} />
             </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
