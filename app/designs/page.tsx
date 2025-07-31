"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, X, Telescope, BookA, Paintbrush, PackageOpen, Notebook } from "lucide-react"
import { InteractiveButton } from "@/components/interactive-button"
import { ContactButton } from "@/components/contact-button"
import React, { useState } from "react"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

function ScrollLogo() {
  const [active, setActive] = useState(false)
  return (
    <img
      src="/cozy-navbar.webp"
      alt="Cozy logo"
      className={`w-full h-auto cursor-pointer transition-transform duration-200 interactive-cta-cursor ${active ? "scale-90" : "hover:scale-110"}`}
      onClick={() => {
        setActive(true)
        window.scrollTo({ top: 0, behavior: "smooth" })
        setTimeout(() => setActive(false), 150)
      }}
      onMouseLeave={() => setActive(false)}
    />
  )
}

export default function DesignsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Cozy Website V1",
      category: "Web Design",
      year: "2025",
      description: "A modern website made for me, the first version.",
      image: "/projects/cozy-website-v1.webp",
    },
    {
      id: 2,
      title: "Roblox Interface Redesign Home",
      category: "UI/UX Design",
      year: "2023",
      description: "A unique home page UI designed for Roblox in a Steam UI style.",
      image: "/projects/roblox-1.webp",
    },
    {
      id: 3,
      title: "Roblox Interface Redesign Game",
      category: "UI/UX Design",
      year: "2023",
      description: "A unique game page UI designed for Roblox in a Steam UI style.",
      image: "/projects/roblox-2.webp",
    },
    {
      id: 4,
      title: "Yalp Logo & Banner",
      category: "Design",
      year: "2022",
      description: 'A sleek redesign for a past "Roblox Revival" service.',
      image: "/projects/yalp.webp",
    },
    {
      id: 5,
      title: "Login Page Concept 1",
      category: "UI/UX Design",
      year: "2022",
      description: "Modern login interface design focusing on user experience.",
      image: "/projects/login-1.webp",
    },
    {
      id: 6,
      title: "Login Page Concept 2",
      category: "UI/UX Design",
      year: "2023",
      description: "An alternative login page design with a cleaner glassy aesthetic.",
      image: "/projects/login-2.webp",
    },
    {
      id: 7,
      title: "Risk Game Map",
      category: "Graphic Design",
      year: "2024",
      description: "A detailed old paper game map for a Risk game.",
      image: "/projects/risk-game.webp",
    },
    {
      id: 8,
      title: "Wave UI",
      category: "App Design",
      year: "2025",
      description: "A sleek and modern UI design for an anticheat tester Roblox tool.",
      image: "/projects/wave-ui.webp",
    },
    {
      id: 9,
      title: "EP Logo",
      category: "Logo Design",
      year: "2024",
      description: "A logo design I made for a past community I was part of.",
      image: "/projects/ep-logo.webp",
    },
    {
      id: 10,
      title: "Wine Label Design",
      category: "Graphic Design",
      year: "2024",
      description: "A wine label design featuring",
      image: "/projects/wine-label.webp",
    },
    {
      id: 11,
      title: "Morning Soda",
      category: "Graphic Design",
      year: "2025",
      description: "A vibrant and refreshing label design for a fictional soda brand.",
      image: "/projects/morning-soda.webp",
    },
    {
      id: 12,
      title: "Sleepy Drink",
      category: "Graphic Design",
      year: "2023",
      description: "A calming and soothing label design for a fictional drink called \"Sleepy\".",
      image: "/projects/sleepy-drink.webp",
    },
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 6)
  const toggleProjects = () => setShowAll((prev) => !prev)
  const openImageModal = (projectId: number) => setSelectedImage(projectId)
  const closeImageModal = () => setSelectedImage(null)
  const selectedProject = projects.find((p) => p.id === selectedImage)

  return (
    <div className="min-h-screen text-white">
      <nav className="flex items-center justify-between p-6 lg:px-12">
        <div className="w-[120px]">
          <Link href="/">
            <ScrollLogo />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors interactive-cta-cursor">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors interactive-cta-cursor">About</Link>
          <Link href="/designs" className="text-white border-b-2 border-white pb-1 interactive-cta-cursor">Designs</Link>
        </div>
        <Link href="/contact">
          <InteractiveButton className="px-6 py-3">Contact Me</InteractiveButton>
        </Link>
      </nav>

      <div className="px-6 lg:px-12 pt-6">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors interactive-cta-cursor">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="text-orange-500">Designs</span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 leading-relaxed">
            A collection of projects that showcase my approach to creating thoughtful, user-centered design solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900/80 rounded-xl overflow-hidden hover:bg-zinc-800/90 transition-colors group transform transition duration-500 ease-out"
              >
                <div
                  className="aspect-video relative cursor-pointer group interactive-cta-cursor"
                  onClick={() => openImageModal(project.id)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-orange-500 text-sm font-semibold">{project.category}</span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
{projects.length > 6 && (
  <div className="text-center mt-12">
    {showAll ? (
      <InteractiveButton
        onClick={() => {
          // Scroll to top smoothly
          window.scrollTo({ top: 0, behavior: "smooth" });

          // Delay toggling the projects until scroll finishes (approx 400ms)
          setTimeout(() => {
            toggleProjects();
          }, 600);
        }}
      >
        Show Less
      </InteractiveButton>
    ) : (
      <InteractiveButton onClick={toggleProjects}>
        Show More
      </InteractiveButton>
    )}
  </div>
)}

        </div>
      </section>

{/* Process Section */}
<section className="px-6 lg:px-12 py-20 bg-zinc-900/50 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16 animate-fade-in-up">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Design Process</h2>
      <p className="text-gray-400 text-lg">How I approach each project to ensure the best results</p>
    </div>
    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          icon: <Telescope className="w-8 h-8" />,
          title: "Discover",
          desc: "Understanding your goals, users, and requirements",
        },
        {
          icon: <Notebook className="w-8 h-8" />,
          title: "Define",
          desc: "Creating a clear strategy and project roadmap",
        },
        {
          icon: <Paintbrush className="w-8 h-8" />,
          title: "Design",
          desc: "Crafting the visual and interactive experience",
        },
        {
          icon: <PackageOpen className="w-8 h-8" />,
          title: "Deliver",
          desc: "Final refinements and handoff for development",
        },
      ].map((step, index) => (
        <div
          key={step.title}
          className="text-center animate-fade-in-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="w-16 h-16 bg-orange-500 rounded-full border-2 border-orange-400 flex items-center justify-center mx-auto mb-4 relative hover:scale-110 transition-transform duration-300 cursor-pointer group">
            <span className="text-white text-xl font-bold transition-colors duration-300 group-hover:text-white/100 text-white/80">
              {step.icon}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-400">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Like what you see?</h2>
          <p className="text-gray-400 text-lg mb-8">Let's discuss how I can help bring your next project to life.</p>
          <ContactButton className="px-12 py-4 text-lg">Start Your Project</ContactButton>
        </div>
      </section>

{/* Image Modal */}
{selectedImage && selectedProject && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    onClick={closeImageModal}
  >
    <div
      className="relative w-full max-w-5xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeImageModal}
        className="absolute -top-16 right-0 text-white hover:text-orange-500 transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative bg-zinc-900/90 rounded-lg overflow-hidden">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          {/* Blurred background inside image box only */}
          <img
            src={selectedProject.image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-100"
          />

          {/* Main focused image */}
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="relative z-10 w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-zinc-900/90">
          <div className="flex items-center justify-between mb-2">
            <span className="text-orange-500 text-sm font-semibold">
              {selectedProject.category}
            </span>
            <span className="text-gray-400 text-sm">{selectedProject.year}</span>
          </div>
          <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
          <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
        </div>
      </div>
    </div>
  </div>
)}

      <Footer />
    </div>
  )
}
