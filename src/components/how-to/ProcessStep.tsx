
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

const ProcessStep = ({ icon: Icon, title, children }: ProcessStepProps) => {
  return (
    <section className="glass p-8 rounded-lg">
      <div className="flex items-center gap-4 mb-6">
        <Icon className="w-8 h-8 text-gold" />
        <h2 className="font-gotham text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default ProcessStep;
