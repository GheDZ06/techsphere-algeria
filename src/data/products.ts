import gpuNvidiaImg from "@/assets/gpu-nvidia.jpg";
import gpuAmdImg from "@/assets/gpu-amd.jpg";
import gpuIntelImg from "@/assets/gpu-intel.jpg";
import cpuAmdImg from "@/assets/cpu-amd.jpg";
import cpuIntelImg from "@/assets/cpu-intel.jpg";
import ramImg from "@/assets/ram.jpg";
import ssdImg from "@/assets/ssd.jpg";
import psuImg from "@/assets/psu.jpg";
import hddImg from "@/assets/hdd.jpg";
import caseImg from "@/assets/case.jpg";
import motherboardImg from "@/assets/motherboard.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  brand: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  // GPUs - NVIDIA (MSI/ASUS branded)
  { id: "1", name: "RTX 4060 Gaming OC", price: 65000, category: "GPU", brand: "MSI", image: gpuNvidiaImg, description: "8GB GDDR6, DLSS 3, Ray Tracing" },
  { id: "2", name: "RTX 4070 Ti SUPER", price: 125000, category: "GPU", brand: "ASUS", image: gpuNvidiaImg, description: "16GB GDDR6X, PCIe 4.0" },
  { id: "11", name: "ROG STRIX RTX 4080", price: 195000, category: "GPU", brand: "ASUS", image: gpuNvidiaImg, description: "16GB GDDR6X, OC Edition" },
  { id: "13", name: "RTX 4060 Ti Ventus", price: 82000, category: "GPU", brand: "MSI", image: gpuNvidiaImg, description: "8GB GDDR6, Dual Fan" },
  { id: "15", name: "RTX 4090 TUF Gaming", price: 350000, category: "GPU", brand: "ASUS", image: gpuNvidiaImg, description: "24GB GDDR6X, Ada Lovelace" },

  // GPUs - AMD
  { id: "14", name: "RX 7800 XT Pulse", price: 95000, category: "GPU", brand: "MSI", image: gpuAmdImg, description: "16GB GDDR6, RDNA 3" },

  // GPUs - Intel
  { id: "16", name: "Arc A770 Limited", price: 55000, category: "GPU", brand: "Intel", image: gpuIntelImg, description: "16GB GDDR6, Ray Tracing, XeSS" },

  // CPUs - AMD
  { id: "3", name: "Ryzen 5 7600", price: 45000, category: "CPU", brand: "AMD", image: cpuAmdImg, description: "6 Cores, 12 Threads, 5.1GHz Boost" },
  { id: "4", name: "Ryzen 7 7800X3D", price: 85000, category: "CPU", brand: "AMD", image: cpuAmdImg, description: "8 Cores, 16 Threads, 3D V-Cache" },
  { id: "17", name: "Ryzen 9 7950X", price: 125000, category: "CPU", brand: "AMD", image: cpuAmdImg, description: "16 Cores, 32 Threads, 5.7GHz" },

  // CPUs - Intel
  { id: "18", name: "Core i5-14600K", price: 52000, category: "CPU", brand: "Intel", image: cpuIntelImg, description: "14 Cores, 20 Threads, 5.3GHz" },
  { id: "19", name: "Core i7-14700K", price: 78000, category: "CPU", brand: "Intel", image: cpuIntelImg, description: "20 Cores, 28 Threads, 5.6GHz" },
  { id: "20", name: "Core i9-14900K", price: 115000, category: "CPU", brand: "Intel", image: cpuIntelImg, description: "24 Cores, 32 Threads, 6.0GHz" },
  { id: "21", name: "Core i3-14100F", price: 25000, category: "CPU", brand: "Intel", image: cpuIntelImg, description: "4 Cores, 8 Threads, 4.7GHz" },

  // RAM
  { id: "5", name: "Vengeance 16GB DDR5", price: 12500, category: "RAM", brand: "Corsair", image: ramImg, description: "DDR5-5600MHz, CL36, RGB" },
  { id: "6", name: "Vengeance 32GB DDR5", price: 24000, category: "RAM", brand: "Corsair", image: ramImg, description: "DDR5-6000MHz, CL30, 2x16GB" },
  { id: "22", name: "Fury Beast 16GB DDR5", price: 11000, category: "RAM", brand: "Kingston", image: ramImg, description: "DDR5-5200MHz, CL40" },
  { id: "23", name: "Trident Z5 32GB DDR5", price: 28000, category: "RAM", brand: "G.Skill", image: ramImg, description: "DDR5-6400MHz, CL32, RGB" },

  // Storage - SSD
  { id: "7", name: "SSD 1TB NVMe Gen4", price: 14000, category: "Storage", brand: "MSI", image: ssdImg, description: "7000MB/s Read, M.2 2280" },
  { id: "8", name: "SSD 2TB NVMe Gen4", price: 27000, category: "Storage", brand: "Corsair", image: ssdImg, description: "7100MB/s Read, M.2 2280" },
  { id: "24", name: "980 PRO 1TB NVMe", price: 16000, category: "Storage", brand: "Samsung", image: ssdImg, description: "7000MB/s, PCIe Gen4" },

  // Storage - HDD
  { id: "25", name: "Barracuda 1TB HDD", price: 8000, category: "HDD", brand: "Seagate", image: hddImg, description: "7200RPM, SATA III, 64MB Cache" },
  { id: "26", name: "Barracuda 2TB HDD", price: 12000, category: "HDD", brand: "Seagate", image: hddImg, description: "7200RPM, SATA III, 256MB Cache" },
  { id: "27", name: "WD Blue 1TB HDD", price: 7500, category: "HDD", brand: "Western Digital", image: hddImg, description: "7200RPM, SATA III, 64MB Cache" },
  { id: "28", name: "WD Blue 4TB HDD", price: 18000, category: "HDD", brand: "Western Digital", image: hddImg, description: "5400RPM, SATA III, 256MB Cache" },

  // PSU
  { id: "9", name: "RM850x 850W", price: 22000, category: "PSU", brand: "Corsair", image: psuImg, description: "80+ Gold, Fully Modular, ATX 3.0" },
  { id: "10", name: "MAG A750GL 750W", price: 18000, category: "PSU", brand: "MSI", image: psuImg, description: "80+ Gold, Fully Modular" },
  { id: "29", name: "ROG STRIX 1000W", price: 38000, category: "PSU", brand: "ASUS", image: psuImg, description: "80+ Platinum, Fully Modular" },

  // Cases
  { id: "30", name: "MAG FORGE 100R", price: 12000, category: "Case", brand: "MSI", image: caseImg, description: "ATX Mid-Tower, Tempered Glass" },
  { id: "31", name: "TUF Gaming GT301", price: 15000, category: "Case", brand: "ASUS", image: caseImg, description: "ATX Mid-Tower, ARGB, Mesh Front" },
  { id: "32", name: "4000D Airflow", price: 18000, category: "Case", brand: "Corsair", image: caseImg, description: "ATX Mid-Tower, High Airflow" },
  { id: "33", name: "H5 Flow", price: 16000, category: "Case", brand: "NZXT", image: caseImg, description: "ATX Mid-Tower, Tempered Glass" },
  { id: "34", name: "MAG PANO 100L", price: 22000, category: "Case", brand: "MSI", image: caseImg, description: "ATX Full-Tower, Panoramic Glass" },

  // Motherboards
  { id: "12", name: "TUF Gaming B650-PLUS", price: 32000, category: "Motherboard", brand: "ASUS", image: motherboardImg, description: "AM5, DDR5, PCIe 5.0" },
  { id: "35", name: "MAG B760 TOMAHAWK", price: 35000, category: "Motherboard", brand: "MSI", image: motherboardImg, description: "LGA 1700, DDR5, WiFi 6E" },
  { id: "36", name: "ROG STRIX Z790-E", price: 65000, category: "Motherboard", brand: "ASUS", image: motherboardImg, description: "LGA 1700, DDR5, WiFi 7" },
];

export const categories = ["GPU", "CPU", "RAM", "Storage", "HDD", "PSU", "Case", "Motherboard"];
export const brands = ["MSI", "ASUS", "Corsair", "Intel", "AMD", "Samsung", "Kingston", "G.Skill", "Seagate", "Western Digital", "NZXT"];

export function formatDZD(price: number): string {
  return price.toLocaleString("fr-DZ") + " دج";
}
