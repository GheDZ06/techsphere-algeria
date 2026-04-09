import gpuImg from "@/assets/gpu.jpg";
import cpuImg from "@/assets/cpu.jpg";
import ramImg from "@/assets/ram.jpg";
import ssdImg from "@/assets/ssd.jpg";
import psuImg from "@/assets/psu.jpg";

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
  {
    id: "1",
    name: "RTX 4060 Gaming OC",
    price: 65000,
    category: "GPU",
    brand: "MSI",
    image: gpuImg,
    description: "8GB GDDR6, DLSS 3, Ray Tracing",
  },
  {
    id: "2",
    name: "RTX 4070 Ti SUPER",
    price: 125000,
    category: "GPU",
    brand: "ASUS",
    image: gpuImg,
    description: "16GB GDDR6X, PCIe 4.0",
  },
  {
    id: "3",
    name: "Ryzen 5 7600",
    price: 45000,
    category: "CPU",
    brand: "MSI",
    image: cpuImg,
    description: "6 Cores, 12 Threads, 5.1GHz Boost",
  },
  {
    id: "4",
    name: "Ryzen 7 7800X3D",
    price: 85000,
    category: "CPU",
    brand: "ASUS",
    image: cpuImg,
    description: "8 Cores, 16 Threads, 3D V-Cache",
  },
  {
    id: "5",
    name: "Vengeance 16GB DDR5",
    price: 12500,
    category: "RAM",
    brand: "Corsair",
    image: ramImg,
    description: "DDR5-5600MHz, CL36, RGB",
  },
  {
    id: "6",
    name: "Vengeance 32GB DDR5",
    price: 24000,
    category: "RAM",
    brand: "Corsair",
    image: ramImg,
    description: "DDR5-6000MHz, CL30, 2x16GB",
  },
  {
    id: "7",
    name: "SSD 1TB NVMe Gen4",
    price: 14000,
    category: "Storage",
    brand: "MSI",
    image: ssdImg,
    description: "7000MB/s Read, M.2 2280",
  },
  {
    id: "8",
    name: "SSD 2TB NVMe Gen4",
    price: 27000,
    category: "Storage",
    brand: "Corsair",
    image: ssdImg,
    description: "7100MB/s Read, M.2 2280",
  },
  {
    id: "9",
    name: "RM850x 850W",
    price: 22000,
    category: "PSU",
    brand: "Corsair",
    image: psuImg,
    description: "80+ Gold, Fully Modular, ATX 3.0",
  },
  {
    id: "10",
    name: "MAG A750GL 750W",
    price: 18000,
    category: "PSU",
    brand: "MSI",
    image: psuImg,
    description: "80+ Gold, Fully Modular",
  },
  {
    id: "11",
    name: "ROG STRIX RTX 4080",
    price: 195000,
    category: "GPU",
    brand: "ASUS",
    image: gpuImg,
    description: "16GB GDDR6X, OC Edition",
  },
  {
    id: "12",
    name: "TUF Gaming B650-PLUS",
    price: 32000,
    category: "CPU",
    brand: "ASUS",
    image: cpuImg,
    description: "Carte mère AM5, DDR5, PCIe 5.0",
  },
];

export const categories = ["GPU", "CPU", "RAM", "Storage", "PSU"];
export const brands = ["MSI", "ASUS", "Corsair"];

export function formatDZD(price: number): string {
  return price.toLocaleString("fr-DZ") + " دج";
}
