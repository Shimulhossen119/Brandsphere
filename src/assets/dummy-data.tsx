import { UploadIcon, VideoIcon, ZapIcon } from "lucide-react";

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: "Discovery & Planning",
    desc: "We understand your goals, audience and challenges to craft a clear, actionable strategy.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Design & Development",
    desc: "High-quality design and scalable development focused on performance and usability.",
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: "Launch & Growth",
    desc: "We launch, optimize and continuously improve to drive measurable business growth.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "$499",
    desc: "Best for early-stage startups.",
    credits: "One-time",
    features: [
      "Project discovery & planning",
      "UI/UX design",
      "Basic website development",
      "1 revision round",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Growth",
    price: "$1,499",
    desc: "Growing teams and businesses.",
    credits: "Monthly",
    features: [
      "Everything in Starter",
      "Advanced UI/UX design",
      "Custom development",
      "Performance optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Scale",
    price: "$3,999",
    desc: "For brands ready to scale fast.",
    credits: "Custom",
    features: [
      "Everything in Growth",
      "Dedicated project manager",
      "Ongoing optimization",
      "Marketing & growth support",
      "Chat + Email support",
    ],
  },
];

export const faqData = [
  {
    question: "What makes your products “premium and reliable”?",
    answer:
      "Our products are expertly crafted with high‑quality materials, designed to last and deliver consistent performance for everyday use. We prioritize durability, functionality, and user experience to ensure our customers receive exceptional value and satisfaction.",
  },
  {
    question: "Are your products safe for daily use?  ",
    answer:
      "Yes. Every item is carefully tested to ensure safety, durability, and comfort, making them ideal for regular, long‑term use. We use non‑toxic materials and adhere to strict quality standards to provide products that are both effective and safe for our customers.",
  },
  {
    question: "Do your products come with a warranty? ",
    answer:
      "Absolutely. We stand behind our quality and offer warranties to guarantee customer satisfaction and peace of mind. Our warranty policies vary by product, so please check the specific product details for more information.",
  },
  {
    question: "How do your products compare to others in the market? ",
    answer:
      "Unlike mass‑produced alternatives, our products are built to impress with superior craftsmanship, modern design, and long‑lasting reliability. We focus on quality and user experience, ensuring that our customers receive exceptional value and satisfaction with every purchase.",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", url: "#" },
      { name: "Services", url: "#" },
      { name: "Work", url: "#" },
      { name: "Contact", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
    ],
  },
];
