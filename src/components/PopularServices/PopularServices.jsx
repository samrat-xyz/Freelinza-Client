import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, PenTool, Video, Globe, Camera } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: "Web Development",
    desc: "Build modern, responsive websites and web apps.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: "Graphic Design",
    desc: "Create eye-catching designs for your brand.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: <PenTool className="w-8 h-8 text-white" />,
    title: "Content Writing",
    desc: "Get engaging and SEO-friendly content.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Video className="w-8 h-8 text-white" />,
    title: "Video Editing",
    desc: "Make your videos stand out with professional editing.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Digital Marketing",
    desc: "Promote your business online effectively.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: <Camera className="w-8 h-8 text-white" />,
    title: "Photography",
    desc: "Capture stunning visuals for any project.",
    color: "from-rose-400 to-fuchsia-500",
  },
];

function PopularServices() {
  return (
    <div className="px-6 py-12 bg-base-200 overflow-hidden">
      <motion.h1
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Popular Services
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
          >
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
            >
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PopularServices;
