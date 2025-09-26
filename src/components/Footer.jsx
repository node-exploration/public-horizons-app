import React from 'react';
import { Swords } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Swords className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            D&D Scheduler &copy; {new Date().getFullYear()}
          </p>
        </div>
        <p className="text-sm text-muted-foreground mt-4 md:mt-0">
          Your epic adventure awaits.
        </p>
      </div>
    </footer>
  );
};

export default Footer;