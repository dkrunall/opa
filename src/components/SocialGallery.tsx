"use client";

import { motion } from "framer-motion";

const instagramPhotos = [
  "https://images.unsplash.com/photo-1541532138244-3837405633a1?q=80&w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?q=80&w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=400&h=400&fit=crop",
];

export function SocialGallery() {
  return (
    <section className="py-24 bg-sand-light">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-stylized text-oasis-umber tracking-[0.3em] mb-4">Social Media</h2>
        <button className="badge-outline text-oasis-umber uppercase text-[10px] tracking-[0.3em] mb-8">@opabarandcafe</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
        {instagramPhotos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="aspect-square overflow-hidden cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 cursor-view"
          >
            <img src={photo} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
