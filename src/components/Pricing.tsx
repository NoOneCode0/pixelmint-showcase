import { GlassCard } from "@/components/GlassCard";
import { Check } from "lucide-react";
const features = ["Modern design", "Mobile-friendly", "Fast delivery"];
export const Pricing = () => {
  return <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">
            Simple Pricing
          </h2>
        </div>

        <GlassCard className="text-center" hover={false}>
          <div className="mb-6">
            <span className="text-5xl font-bold text-foreground">₹4,000</span>
          </div>
          
          <p className="text-foreground font-medium mb-6">Complete website design, Extra Domain charges required</p>
          
          <ul className="space-y-3 text-left max-w-[200px] mx-auto">
            {features.map((feature, index) => <li key={index} className="flex items-center gap-3 text-muted-foreground">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>)}
          </ul>
        </GlassCard>
      </div>
    </section>;
};
