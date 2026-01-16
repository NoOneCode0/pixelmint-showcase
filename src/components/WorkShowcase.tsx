import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
interface WorkItem {
  title: string;
  description: string;
  url: string;
}
const workItems: WorkItem[] = [{
  title: "Photoshoot Website",
  description: "Stunning photography portfolio and booking",
  url: "https://photoshootproto.netlify.app/"
}, {
  title: "SmileCare Dental",
  description: "Modern clinic website with online booking",
  url: "https://dentistproto.netlify.app/"
}, {
  title: "Culinary Journey",
  description: "Beautiful restaurant website design",
  url: "https://amazing-licorice-9dd931.netlify.app/"
}, {
  title: "Turf Website",
  description: "Professional sports turf booking site",
  url: "https://samyakturf.netlify.app/"
}];
export const WorkShowcase = () => {
  return <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">Our Work</h2>
          <p className="text-muted-foreground text-lg">
            Click any website below to view our real work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item, index) => <GlassCard key={index} className="flex flex-col">
              <h3 className="text-lg font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {item.description}
              </p>
              <Button variant="cta" className="w-full" asChild>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  View Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </GlassCard>)}
        </div>
      </div>
    </section>;
};