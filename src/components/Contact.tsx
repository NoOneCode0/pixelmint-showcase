import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Contact = () => {
  // WhatsApp link - replace with actual number
  const whatsappLink = "https://wa.me/917719970771?text=Yes%20we%20are%20interested";

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
