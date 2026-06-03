import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, Square, SkipBack, SkipForward, Circle, Repeat, 
  Mic, Music, Sliders, Plus, ChevronLeft, ChevronDown, ChevronUp,
  Headphones, Save, Share2, Download, Sparkles, Settings, Power, Lock,
  Scissors, MousePointer2, Hand, PenTool, Layers, Loader2, Piano,
  Mic2, Waves, Bot, Send, Music2, Cpu, Globe, Video, Link, Wand2, 
  Crown, Zap, FileText, Languages, ShieldCheck, Smartphone, History, 
  Radio, UserCheck, LayoutGrid, Snowflake, Search, Store, Instagram, Youtube, CheckCircle2,
  Volume2, Disc, Star, Shield, Wind, Speaker, Boxes, Music4, CloudOff, Code2
} from 'lucide-react';

export default function App() {
  const [unlocked, setUnlocked] = useState(localStorage.getItem('redline_unlocked') === 'true');
  const [panel, setPanel] = useState('godmode');
  const [playing, setPlaying] = useState(false);

  if (!unlocked) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#0a0a0b] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#111113] border border-white/10 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-20 h-20 bg-[#ff2d2d] rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(255,45,45,0.4)]">
            <Lock size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">Unlock REDLINE PROD</h2>
          <p className="text-white/60 text-sm mb-8">للدخول إلى أقوى استوديو في العالم، يرجى متابعة المطور</p>
          <div className="space-y-4 mb-8">
            <button onClick={() => window.open('https://www.youtube.com/@Redl1ne_off')} className="w-full h-14 rounded-xl border border-white/10 bg-white/5 flex items-center px-6 gap-3 hover:bg-white/10 transition-all">
              <Youtube className="text-red-500" /><span className="font-semibold text-sm">Follow @Redl1ne_off</span>
            </button>
            <button onClick={() => window.open('https://www.instagram.com/redl1ne_off')} className="w-full h-14 rounded-xl border border-white/10 bg-white/5 flex items-center px-6 gap-3 hover:bg-white/10 transition-all">
              <Instagram className="text-pink-500" /><span className="font-semibold text-sm">Follow @redl1ne_off</span>
            </button>
          </div>
          <button onClick={() => { localStorage.setItem('redline_unlocked', 'true'); setUnlocked(true); }} className="w-full h-12 rounded-lg font-bold bg-[#ff2d2d] text-white shadow-lg">ENTER STUDIO</button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0b] text-white overflow-hidden">
      {/* HEADER */}
      <div className="h-14 border-b border-white/10 bg-[#0c0c0e] flex items-center px-4 justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ff2d2d] rounded-lg rotate-45 flex items-center justify-center shadow-lg"><div className="-rotate-45 font-black text-xs">R</div></div>
          <span className="font-black tracking-tighter text-xl uppercase italic">Redline Prod</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-md text-xs font-bold hover:bg-white/10">SAVE</button>
          <button className="bg-[#ff2d2d] text-white px-4 py-1.5 rounded-md text-xs font-bold shadow-lg shadow-red-500/20">EXPORT</button>
        </div>
      </div>

      {/* TRANSPORT */}
      <div className="h-16 border-b border-white/10 bg-[#0a0a0b] flex items-center px-6 gap-8 shrink-0 shadow-xl">
        <div className="flex items-center gap-4">
          <button onClick={() => setPlaying(!playing)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${playing ? 'bg-white text-black' : 'bg-[#ff2d2d] text-white'}`}>
            {playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
          </button>
          <div className="bg-black/60 border border-white/10 rounded-xl px-6 py-2 flex items-center gap-6">
            <div className="text-center"><div className="text-[9px] text-white/30 uppercase font-bold">Tempo</div><div className="text-lg font-black mono text-[#ff2d2d]">128 BPM</div></div>
            <div className="w-px h-8 bg-white/10" /><div className="text-center"><div className="text-[9px] text-white/30 uppercase font-bold">Key</div><div className="text-lg font-black">Am</div></div>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex gap-1 h-8 items-end">
           {[4,7,3,9,5,8,2,6,4,7,3,9].map((h, i) => (
             <div key={i} className={`w-1.5 rounded-full ${playing ? 'animate-bounce' : ''}`} style={{ height: `${h*10}%`, backgroundColor: h > 7 ? '#ff2d2d' : '#22c55e' }} />
           ))}
        </div>
      </div>

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 border-r border-white/10 bg-[#0c0c0e] flex flex-col items-center py-4 gap-4">
          <button onClick={() => setPanel('godmode')} className={`p-3 rounded-xl ${panel === 'godmode' ? 'bg-[#ff2d2d]' : 'text-white/40'}`}><Crown size={22} /></button>
          <button onClick={() => setPanel('booth')} className={`p-3 rounded-xl ${panel === 'booth' ? 'bg-sky-500' : 'text-white/40'}`}><Shield size={22} /></button>
          <button onClick={() => setPanel('orchestra')} className={`p-3 rounded-xl ${panel === 'orchestra' ? 'bg-green-500' : 'text-white/40'}`}><Music2 size={22} /></button>
          <button onClick={() => setPanel('autotune')} className={`p-3 rounded-xl ${panel === 'autotune' ? 'bg-blue-500' : 'text-white/40'}`}><Mic2 size={22} /></button>
          <div className="flex-1" />
          <button className="p-3 text-white/20"><Settings size={22} /></button>
        </div>

        {/* Studio Content */}
        <div className="flex-1 flex flex-col bg-[#080809] relative overflow-hidden">
          {/* Active Tool Panel */}
          <div className="bg-gradient-to-r from-[#1a0505] to-[#080809] p-8 border-b border-white/5">
             <div className="max-w-2xl">
                <h2 className="text-3xl font-black italic tracking-tighter text-[#ff2d2d]">PRODUCER POWER: {panel.toUpperCase()}</h2>
                <p className="text-white/40 text-sm mt-2 font-medium">كل الأدوات الاحترافية التي كانت بالمال، الآن بين يديك مجاناً وبأعلى دقة.</p>
                <button className="mt-6 bg-[#ff2d2d] text-white font-bold px-10 py-3 rounded-lg shadow-lg shadow-red-500/20">ACTIVATE NOW</button>
             </div>
          </div>

          {/* Tracks */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {['Vocal (DNA Locked)', 'Main Synth', 'Sub Bass', 'Drums'].map((name, i) => (
              <div key={i} className="h-20 flex gap-4">
                <div className="w-52 bg-[#0f0f11] border border-white/5 rounded-xl p-4 flex items-center gap-3 shadow-lg">
                  <div className={`w-1 h-full rounded-full ${i === 0 ? 'bg-[#ff2d2d]' : 'bg-blue-400'}`} />
                  <div className="flex-1 font-bold text-xs uppercase truncate">{name}</div>
                </div>
                <div className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-xl relative flex items-center px-10">
                   <div className="h-10 w-2/3 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff2d2d11] to-transparent animate-pulse" />
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="h-10 bg-black border-t border-white/5 px-6 flex items-center justify-between text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
             <div className="flex gap-6">
                <span>CPU: 8%</span>
                <span className="text-[#22c55e]">Stability: Ultra High</span>
                <span className="text-[#ff2d2d] animate-pulse">Recording: Ready</span>
             </div>
             <div>REDLINE PROD OS v5.0 - UNLIMITED EDITION</div>
          </div>
        </div>

        {/* Browser */}
        <div className="w-72 border-l border-white/10 bg-[#0c0c0e] p-4 hidden lg:block">
           <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-6">Sound Library</div>
           <div className="space-y-3">
              {['Infinity_808.wav', 'Studio_Vocal_FX.mp3', 'Platinum_Loop.wav'].map(f => (
                <div key={f} className="p-3 border border-white/5 rounded-xl hover:bg-white/5 transition-all group flex justify-between items-center cursor-pointer">
                  <span className="text-xs text-white/60 font-medium">{f}</span>
                  <Plus size={14} className="text-[#ff2d2d] opacity-0 group-hover:opacity-100" />
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}