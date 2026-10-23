import { Zap, Droplets, HardHat, BrickWall, Layers, Flame, Hammer, PaintRoller, Wrench, Snowflake, Factory, Users, Sparkles, Ellipsis } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const categories: { id: string; Icon: LucideIcon }[] = [
  { id: 'electrical', Icon: Zap }, { id: 'plumbing', Icon: Droplets }, { id: 'construction', Icon: HardHat },
  { id: 'masonry', Icon: BrickWall }, { id: 'barbending', Icon: Layers }, { id: 'welding', Icon: Flame },
  { id: 'carpentry', Icon: Hammer }, { id: 'painting', Icon: PaintRoller }, { id: 'mechanical', Icon: Wrench },
  { id: 'appliance', Icon: Snowflake }, { id: 'industrial', Icon: Factory }, { id: 'labour', Icon: Users },
  { id: 'cleaning', Icon: Sparkles }, { id: 'other', Icon: Ellipsis },
];

// DEMONSTRATION DATA ONLY. Not real people, jobs or posts. No ratings, no verified badges.
export const demoWorkers = [
  { id: 'd1', cat: 'electrical', name: 'Demo Electrician', loc: 'Bengaluru', years: 8, skills: ['Wiring', 'Panel board', 'Troubleshooting'] },
  { id: 'd2', cat: 'plumbing', name: 'Demo Plumber', loc: 'Mysuru', years: 6, skills: ['Pipe fitting', 'Leak repair', 'Bathroom fittings'] },
  { id: 'd3', cat: 'barbending', name: 'Demo Bar Bender', loc: 'Bengaluru', years: 10, skills: ['Steel fixing', 'Reading drawings'] },
  { id: 'd4', cat: 'welding', name: 'Demo Welder', loc: 'Tumakuru', years: 7, skills: ['Arc welding', 'Fabrication'] },
  { id: 'd5', cat: 'painting', name: 'Demo Painter', loc: 'Bengaluru', years: 5, skills: ['Interior', 'Exterior', 'Putty finish'] },
  { id: 'd6', cat: 'carpentry', name: 'Demo Carpenter', loc: 'Mysuru', years: 9, skills: ['Furniture', 'Doors', 'Modular work'] },
];

export const demoJobs = [
  { id: 'j1', cat: 'electrical', title: 'Electrician required', loc: 'Bengaluru', budget: '₹8,000 – ₹15,000', need: 2, days: '2–5' },
  { id: 'j2', cat: 'barbending', title: 'Five bar benders required', loc: 'Bengaluru', budget: '₹12,000 – ₹18,000', need: 5, days: '10–15' },
  { id: 'j3', cat: 'plumbing', title: 'Plumbing technician required', loc: 'Mysuru', budget: '₹7,000 – ₹12,000', need: 1, days: '3–7' },
  { id: 'j4', cat: 'industrial', title: 'Industrial maintenance technician', loc: 'Hosur', budget: '₹15,000 – ₹25,000', need: 3, days: '15–30' },
];

export const demoPosts = [
  { id: 'p1', cat: 'electrical', author: 'Demo Electrician', loc: 'Bengaluru', caption: 'Completed a 3-phase distribution board installation with proper earthing and safety checks.' },
  { id: 'p2', cat: 'plumbing', author: 'Demo Plumber', loc: 'Mysuru', caption: 'Bathroom fittings finished, leak tested, and drainage checked.' },
];
