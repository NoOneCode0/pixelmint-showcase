import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Contact = () => {
  // WhatsApp link - replace with actual number
  const whatsappLink = "https://wa.me/917719970771?text=I'm%20interested%20in%20building%20a%20modern%2C%20responsive%2C%20and%20user-friendly%20website%20using%20CodeScript%2C%20focused%20on%20clean%20design%2C%20strong%20performance%2C%20and%20a%20professional%20brand%20presence.";

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
          Interested in Working With Us?
        </h2>
        
        <Button variant="cta" size="lg" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact CodeScript
          </a>
        </Button>
      </div>
    </section>
  );
};
