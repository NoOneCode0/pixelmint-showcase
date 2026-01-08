import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Contact = () => {
  // WhatsApp link - replace with actual number
  const whatsappLink = "https://wa.me/919999999999?text=Hi%20PixelMint%2C%20I%27m%20interested%20in%20a%20website";

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
          Interested in Working With Us?
        </h2>
        
        <Button variant="cta" size="lg" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact PixelMint
          </a>
        </Button>
      </div>
    </section>
  );
};
