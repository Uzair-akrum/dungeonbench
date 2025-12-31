import React from 'react';
import { Hexagon, Github, Twitter, Dice5 } from 'lucide-react';
import BenchmarkDashboard from './components/BenchmarkDashboard';
import ScenarioVisualizer from './components/ScenarioVisualizer';
import { Button } from './components/ui/components';

const D20Icon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 2 10 6-4 14-6-4-6 4L2 8l10-6Z"/>
    <path d="M12 22V12"/>
    <path d="m2.5 8 9.5 4 9.5-4"/>
    <path d="M12 12 8 22"/>
    <path d="m12 12 4 10"/>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-background to-background">
      {/* --- Background Texture Overlay --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>

      {/* --- Navbar --- */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg border border-primary/30">
                <D20Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold tracking-tight text-white leading-none">DungeonBench</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/Uzair-akrum/dungeonbench" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-12">
        
        {/* Hero Section */}
        <section className="text-center py-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            Is your LLM a good Dungeon Master?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-400">
            DungeonBench evaluates Large Language Models on their ability to handle complex game states, strict rule adherence, and spatial reasoning in tabletop roleplay scenarios.
          </p>
        </section>

        {/* Dashboard Section */}
        <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <Hexagon className="w-5 h-5 text-primary fill-primary/20" />
                <h3 className="text-xl font-serif font-semibold text-white">Leaderboard</h3>
            </div>
            <BenchmarkDashboard />
        </section>

        {/* Visualizer Section */}
        <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <Dice5 className="w-5 h-5 text-accent-foreground" />
                <h3 className="text-xl font-serif font-semibold text-white">Test Suite Visualizer</h3>
            </div>
            <p className="text-neutral-400 mb-6">Explore the actual scenarios used to test the models. These grids represent the internal state the LLM must track and manipulate via tool calls.</p>
            <ScenarioVisualizer />
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="relative z-10 border-t border-white/10 mt-20 py-8 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-500 text-sm">
          <p>© 2025 DungeonBench. Inspired by SkateBench.</p>
        </div>
      </footer>
    </div>
  );
}
