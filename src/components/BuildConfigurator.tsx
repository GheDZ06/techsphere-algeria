import { formatDZD } from "@/data/products";
import { Cpu, Monitor, MemoryStick } from "lucide-react";
import cpuAmdImg from "@/assets/cpu-amd.jpg";
import gpuNvidiaImg from "@/assets/gpu-nvidia.jpg";
import ramImg from "@/assets/ram.jpg";

const buildItems = [
  { icon: Cpu, label: "CPU", name: "Ryzen 5 7600", price: 45000, image: cpuAmdImg },
  { icon: Monitor, label: "GPU", name: "RTX 4060", price: 65000, image: gpuNvidiaImg },
  { icon: MemoryStick, label: "RAM", name: "Corsair 16GB DDR5", price: 12500, image: ramImg },
];

export function BuildConfigurator() {
  const total = buildItems.reduce((sum, i) => sum + i.price, 0);

  return (
    <section id="configurator" className="py-20 gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Live Build <span className="text-primary neon-text-cyan">Configurator</span>
          </h2>
          <p className="text-muted-foreground font-body">Estimate the price of your build</p>
        </div>

        <div className="max-w-4xl mx-auto glass rounded-2xl p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {buildItems.map((item) => (
              <div key={item.label} className="glass rounded-xl p-4 text-center hover-float">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={200}
                  height={200}
                  className="w-24 h-24 mx-auto rounded-lg object-cover mb-3"
                />
                <item.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                  {item.label}
                </span>
                <h4 className="font-heading text-sm font-semibold text-foreground mt-1">
                  {item.name}
                </h4>
                <p className="text-primary font-heading font-bold mt-1">{formatDZD(item.price)}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between glass rounded-xl p-4">
            <span className="font-heading text-lg font-semibold text-foreground">
              Estimated Total Price
            </span>
            <span className="font-heading text-2xl font-bold text-primary neon-text-cyan">
              {formatDZD(total)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
