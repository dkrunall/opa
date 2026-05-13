"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Globe, MapPin, Sparkles } from "lucide-react";

/* ─── International Headliners ─── */
const internationalArtists = [
  {
    name: "ARTBAT",
    origin: "Ukraine",
    genre: "Melodic Techno · Deep House",
    bio: "Arthur Kryvenko & Vitaliy Limarenko — the Ukrainian duo whose track 'Taboo' held Beatport's #1 Deep House spot for 11 weeks. Named DJ Awards Breakthrough Artist of the Year 2019 and Mixmag Stars of the Year.",
    accolades: "DJ Awards 2019 · Beatport #1 · Upperground Records",
    image: "/artist/artbat.jpeg",
    color: "#D4AF37",
    year: "2021",
  },
  {
    name: "Stephan Bodzin",
    origin: "Germany",
    genre: "Techno · Live Electronic",
    bio: "A central figure of the international techno scene. Bodzin headlined OPA's landmark 'DIREKT' showcase — an evening of hypnotic, cinematic live techno that became one of OPA's most talked-about nights.",
    accolades: "Systematic Recordings · Global Techno Icon",
    image: "/artist/stephen.jpeg",
    color: "#C69B7B",
    year: "Dec 2021",
  },
  {
    name: "Claptone",
    origin: "Germany",
    genre: "Tech House · Deep House",
    bio: "The enigmatic golden-masked DJ — ranked #30 in DJMag Top 100 DJs 2025. Over 275 shows annually across Tomorrowland, Coachella, Ultra & Rock in Rio. His OPA set was a masterclass in soulful, danceable house music.",
    accolades: "DJMag Top 30 (2024 & 2025) · Tomorrowland · Coachella",
    image: "/artist/artist-claptone.jpg",
    color: "#D4AF37",
    year: "2022",
  },
  {
    name: "&ME",
    origin: "Germany",
    genre: "House · Tech House",
    bio: "One of the most respected names in European underground house — &ME's hypnotic, groove-heavy sets and Innervisions releases have made him a staple of the world's finest clubs.",
    accolades: "Innervisions · Keinemusik Collective",
    image: "/artist/artist-andme.jpg",
    color: "#C69B7B",
    year: "2022",
  },
  {
    name: "Themba",
    origin: "South Africa",
    genre: "Afro House",
    bio: "South Africa's ambassador of Afro House, Themba brings the spirit of the continent to every dance floor with tribal rhythms and uplifting productions.",
    accolades: "Afro House Pioneer · Global Touring Artist",
    image: "/artist/artist-themba.jpg",
    color: "#D4AF37",
    year: "2023",
  },
  {
    name: "Topic",
    origin: "Germany",
    genre: "Melodic House · Dance-Pop",
    bio: "The German producer behind global smash 'Breaking Me' — Topic bridges the worlds of melodic house and pop with dancefloor-ready anthems.",
    accolades: "500M+ Streams · 'Breaking Me' Global Hit",
    image: "/artist/artist-topic.jpg",
    color: "#C69B7B",
    year: "2023",
  },
  {
    name: "Da Capo",
    origin: "South Africa",
    genre: "Afro House · Afro Tech",
    bio: "A cornerstone of South Africa's booming Afro house scene, Da Capo's blend of deep tribal rhythms and emotive melodies transcends genres.",
    accolades: "Afro Brotherz · Global Afro House Icon",
    image: "/artist/artist-dacapo.jpg",
    color: "#D4AF37",
    year: "2023",
  },
  {
    name: "Colyn",
    origin: "Belgium",
    genre: "Melodic Techno",
    bio: "Belgium's most emotive techno export — Colyn's releases on Innervisions have cemented him as a leading voice in melodic techno.",
    accolades: "Innervisions · Cercle Performed",
    image: "/artist/colyen.jpeg",
    color: "#C69B7B",
    year: "2022",
  },
  {
    name: "Giorgia Angiuli",
    origin: "Italy",
    genre: "Live Electronic · Techno",
    bio: "Italian live electronic artist and vocalist whose synthesizer-driven performances are unlike anything in the scene. Pure, raw electronic emotion.",
    accolades: "Live Electronic Visionary · Beatport Featured",
    image: "/artist/Giorgia%20Angiuli.jpeg",
    color: "#D4AF37",
    year: "2023",
  },
  {
    name: "Space Motion",
    origin: "International",
    genre: "Melodic Techno",
    bio: "Space Motion's atmospheric melodic techno creates a universe of sound that pulls listeners into deep emotional journeys.",
    accolades: "50M+ Streams · Melodic Techno Icon",
    image: "/artist/SpaceMotion.jpg",
    color: "#D4AF37",
    year: "2024",
  },
];

/* ─── Indian Headliners ─── */
const indianArtists = [
  {
    name: "Jay Sean",
    origin: "United Kingdom · India",
    genre: "R&B · Pop",
    bio: "The British-Indian global superstar behind 'Down' and 'Do You Remember'. Jay Sean has sold over 10 million singles worldwide and brought his signature live energy to OPA.",
    accolades: "10M+ Singles Sold · UK R&B Icon",
    image: "/artist/jaysean.jpeg",
    color: "#D4AF37",
    year: "2019",
  },
  {
    name: "DIVINE",
    origin: "Mumbai, India",
    genre: "Gully Rap · Hip-Hop",
    bio: "Vivian Fernandes — the pioneer who put Indian hip-hop on the global map. Growing up in Andheri East, his story inspired the Bollywood blockbuster Gully Boy.",
    accolades: "Grammy Awards 2022 · Spotify Times Square",
    image: "/images/artists/divine.jpg",
    color: "#D4AF37",
    year: "2020",
  },
  {
    name: "Sidhu Moosewala",
    origin: "Punjab, India",
    genre: "Punjabi · Hip-Hop",
    bio: "A legend who redefined Punjabi music for a global generation. Raw, fearless and authentic — Sidhu Moosewala was one of the most beloved voices in Indian music.",
    accolades: "Global Punjabi Icon · Timeless Legacy",
    image: "/artist/artist-sidhu.jpg",
    color: "#C69B7B",
    year: "2021",
  },
  {
    name: "Ankytrixx",
    origin: "India",
    genre: "Techno · Tech House",
    bio: "Ankit Kocher — INCA DJ of the Year 2017. Known for his relentless high-energy techno sets that fill every corner of the room.",
    accolades: "INCA DJ of the Year 2017 · India's Techno Pioneer",
    image: "/artist/anky.jpeg",
    color: "#D4AF37",
    year: "2019–2022",
  },
  {
    name: "DJ Suketu",
    origin: "Mumbai, India",
    genre: "Bollywood Remix",
    bio: "The undisputed king of Bollywood remixes — DJ Suketu has been rocking Indian dance floors for over two decades.",
    accolades: "India's Bollywood Remix King",
    image: "/artist/sketu.jpeg",
    color: "#C69B7B",
    year: "2020",
  },
  {
    name: "Lost Stories",
    origin: "India",
    genre: "Progressive House · Electronic Folk",
    bio: "Prayag Mehta & Rishab Joshi — India's most celebrated DJ duo. Their blend of Rajasthani folk and progressive house ignited OPA's dance floor.",
    accolades: "DJMag Top 100 · YouTube Foundry",
    image: "/images/artists/lost-stories.jpg",
    color: "#D4AF37",
    year: "2021",
  },
  {
    name: "Sickflip",
    origin: "Mumbai, India",
    genre: "World Electronic · Tribal",
    bio: "Sarvesh Shrivastava fuses traditional vocal textures and global folk instrumentation with high-energy electronic beats.",
    accolades: "Insomniac Artist · Ra.co Featured",
    image: "/images/artists/sickflip.jpg",
    color: "#C69B7B",
    year: "Oct 2024",
  },
  {
    name: "King",
    origin: "India",
    genre: "Hindi Indie Pop · Urdu Pop",
    bio: "India's most distinctive independent voice — weaving Urdu poetry into modern pop production. With hundreds of millions of streams.",
    accolades: "100M+ Streams · Independent Icon",
    image: "/images/artists/king.jpg",
    color: "#D4AF37",
    year: "2023",
  },
];

/* ─── Resident DJs ─── */
const residentDJs = [
  { name: "DJ OPA", night: "The Main Event", day: "Fridays", genre: "Commercial", color: "#D4AF37", origin: "Resident", year: "Core", bio: "The heartbeat of OPA's signature Friday nights, blending global commercial hits with high-octane energy.", accolades: "Friday Night Specialist", image: "/images/dj.png" },
  { name: "DJ Ahmed", night: "Desert Rhythms", day: "Saturdays", genre: "Arabic Tech", color: "#C69B7B", origin: "Resident", year: "Core", bio: "Master of the desert sound, fusing traditional Arabic textures with modern tech-house beats.", accolades: "Arabic Tech Pioneer", image: "/images/bar.webp" },
  { name: "DJ Zink", night: "Ladies of Oasis", day: "Wednesdays", genre: "RnB & Hip-Hop", color: "#D4AF37", origin: "Resident", year: "Core", bio: "Setting the groove for every Wednesday with the finest R&B and Hip-Hop cuts.", accolades: "R&B Connoisseur", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&fit=crop" },
  { name: "DJ Ray", night: "Sunset Sessions", day: "Mondays", genre: "Deep House", color: "#C69B7B", origin: "Resident", year: "Core", bio: "The curator of Monday's chill-out vibes, taking you on a journey through melodic deep house.", accolades: "Deep House Curator", image: "/images/ambience.webp" },
];

/* ─── Upcoming ─── */
const upcomingArtists = [
  { name: "Basspatch", genre: "Bass · Electronic", date: "Apr 2026" },
  { name: "DJ Akhtar", genre: "Club DJ", date: "Apr 2026" },
  { name: "LEVI", genre: "Live Performance", date: "Dec 2024" },
];

function ArtistCard({ artist, index }: { artist: any; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className="relative group h-[500px] rounded-[2.5rem] overflow-hidden bg-oasis-umber cursor-pointer"
    >
      <img
        src={imgError ? "/images/dj.png" : (artist.image || "/images/dj.png")}
        alt={artist.name}
        onError={() => setImgError(true)}
        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-[2.5s] ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

      <div className="relative h-full p-8 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border"
              style={{ borderColor: `${artist.color}40`, color: artist.color, background: `${artist.color}10` }}
            >
              {artist.origin || artist.night || "Special Guest"}
            </span>
          </div>
          <span className="text-[10px] font-bold text-sand-light/30 uppercase tracking-[0.3em]">
            {artist.year}
          </span>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[9px] font-bold uppercase tracking-[0.5em]" style={{ color: artist.color }}>
              {artist.genre}
            </p>
            <h3 className="text-4xl md:text-5xl font-stylized text-sand-light leading-none group-hover:text-oasis-gold transition-colors duration-500">
              {artist.name}
            </h3>
          </div>
          <div className="h-px bg-white/10 w-full transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-700" />
          <p className="text-sand-light/40 text-sm font-sans leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
            {artist.bio}
          </p>
          <div className="flex items-center gap-2 pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-oasis-gold" />
            <p className="text-[10px] font-bold text-sand-light/60 uppercase tracking-widest">
              {artist.accolades}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles size={20} className="text-oasis-gold/40" />
      </div>
    </motion.div>
  );
}

export function ArtistRoster() {
  const [activeTab, setActiveTab] = useState<"international" | "indian" | "residents">("international");

  const tabs = [
    { id: "international", label: "International", icon: Globe },
    { id: "indian", label: "Indian", icon: MapPin },
    { id: "residents", label: "Residents", icon: Users },
  ];

  const getArtists = () => {
    switch (activeTab) {
      case "international": return internationalArtists;
      case "indian": return indianArtists;
      case "residents": return residentDJs;
      default: return internationalArtists;
    }
  };

  return (
    <section className="bg-sand-light py-24 md:py-40 overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-oasis-umber/5 rounded-full border border-oasis-umber/10">
              <span className="w-2 h-2 rounded-full bg-oasis-accent animate-pulse" />
              <p className="text-[10px] uppercase tracking-[0.5em] text-oasis-accent font-bold">Artist Lineup 2019 — 2026</p>
            </div>
            <h2 className="text-6xl md:text-9xl font-stylized text-oasis-umber leading-[0.85] tracking-tighter">
              Global<br />Roster
            </h2>
            <p className="text-oasis-umber/50 max-w-xl font-sans text-lg md:text-xl leading-relaxed">
              From the deep-tech underground of Berlin to the pulsating gully rap of Mumbai, OPA's stage has hosted the sonic pioneers of our time.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <div className="flex bg-oasis-umber/5 p-2 rounded-[2rem] border border-oasis-umber/10 backdrop-blur-sm self-start">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative flex items-center gap-3 px-8 py-4 rounded-[1.5rem] transition-all duration-500 group ${
                      isActive ? "text-sand-light" : "text-oasis-umber/40 hover:text-oasis-umber"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-oasis-umber rounded-[1.5rem]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Icon size={18} className="relative z-10" />
                    <span className="relative z-10 text-[11px] font-bold uppercase tracking-widest">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getArtists().map((artist, i) => (
                <ArtistCard key={artist.name} artist={artist} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-40">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-3xl font-stylized text-oasis-umber">Recent & Upcoming</h3>
            <div className="flex-1 h-px bg-oasis-umber/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingArtists.map((artist, i) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white border border-oasis-umber/10 rounded-[2rem] p-8 hover:bg-oasis-umber hover:border-oasis-umber transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-oasis-accent group-hover:text-oasis-gold/60 transition-colors">
                      {artist.genre}
                    </span>
                    <span className="text-[10px] font-bold text-oasis-umber/20 group-hover:text-sand-light/20 uppercase tracking-widest">
                      {artist.date}
                    </span>
                  </div>
                  <h4 className="text-3xl font-stylized text-oasis-umber group-hover:text-sand-light transition-colors">
                    {artist.name}
                  </h4>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="relative rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border-2 border-dashed border-oasis-umber/10 hover:border-oasis-accent/40 transition-colors group cursor-pointer"
            >
              <Sparkles className="text-oasis-accent mb-4" size={24} />
              <p className="text-sm font-stylized text-oasis-umber/60">Book for Upcoming Acts</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
