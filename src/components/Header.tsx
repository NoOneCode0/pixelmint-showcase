import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-foreground tracking-tight">
          PixelMint
        </a>
        
        <nav className="hidden sm:flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <a href="#work">Work</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#pricing">Pricing</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
