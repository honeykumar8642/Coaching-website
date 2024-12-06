import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-4xl text-[#1a7d85] text-center pt-4 font-semibold">Excellence In Every Steps </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Dedication to Your Growth",
    description:
      "Our commitment is to deliver exceptional coaching experiences that inspire personal and professional growth. We tailor our approach to ensure you receive the highest quality support and guidance at every step.",
    link: "#",
  },
  {
    title: "Learn from the Best",
    description:
      " Our team of experienced coaches brings expertise and dedication to every session. With years of experience in various fields, we empower you with the knowledge and strategies needed to excel.",
    link: "#",
  },
  {
    title: "Customized for Your Success",
    description:
      "We understand that no two learners are alike. Our programs are designed to meet your unique needs, helping you stay focused and on track toward achieving your specific goals.",
    link: "#",
  },
  {
    title: " Techniques That Work",
    description:
      "We employ research-backed strategies and proven methodologies to ensure your learning is impactful and sustainable. Our approach helps you build confidence and achieve long-term results.",
    link: "#",
  },
  {
    title: "Growing Together",
    description:
      "We believe in evolving with you. Our coaching programs are regularly updated to incorporate the latest educational trends and techniques, ensuring that you always receive relevant and effective support.",
    link: "#",
  },
  {
    title: " Connect and Thrive",
    description:
      "As you grow, so does your network. Join a community of learners who support and inspire one another. Networking and collaboration can open doors to new opportunities and shared achievements.",
    link: "#",
  },
];
