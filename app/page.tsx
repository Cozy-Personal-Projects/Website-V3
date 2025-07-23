"use client"
import Link from "next/link"
import { ExternalLink, X, Clock, Shield, Briefcase, ChevronDown } from "lucide-react"
import { InteractiveButton } from "@/components/interactive-button"
import { Footer } from "@/components/footer"
import { ContactButton } from "@/components/contact-button"
import React, { useState } from "react"

// Client component for logo scroll-to-top
function ScrollLogo() {
  const [active, setActive] = useState(false)
  return (
    <img
      src="/cozy-navbar.webp"
      alt="Cozy logo"
      className={`w-full h-auto cursor-pointer transition-transform duration-200 ${active ? "scale-90" : "hover:scale-110"}`}
      onClick={() => {
        setActive(true)
        window.scrollTo({ top: 0, behavior: "smooth" })
        setTimeout(() => setActive(false), 150)
      }}
      onMouseLeave={() => setActive(false)}
    />
  )
}

export default function HomePage() {
  // Only the three featured projects
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
      title: "Login Page Concept 2",
      category: "UI/UX Design",
      year: "2023",
      description: "An alternative login page design with a cleaner glassy aesthetic.",
      image: "/projects/login-2.webp",
    },
    {
      id: 3,
      title: "Roblox Interface Redesign Game",
      category: "UI/UX Design",
      year: "2023",
      description: "An interface made for Roblox, inspired by the Steam Deck.",
      image: "/projects/roblox-2.webp",
    },
  ]

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const openImageModal = (projectId: number) => setSelectedImage(projectId)
  const closeImageModal = () => setSelectedImage(null)
  const selectedProject = projects.find((p) => p.id === selectedImage)

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-12 animate-fade-in">
        <div className="w-[120px]">
          {/* Logo clickable, scrolls to top */}
          <ScrollLogo />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white border-b-2 border-white pb-1">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/designs" className="text-gray-300 hover:text-white transition-colors">
            Designs
          </Link>
        </div>
        <Link href="/contact">
          <InteractiveButton className="px-6 py-3">Contact Me</InteractiveButton>
        </Link>
      </nav>

      {/* Hero Section - Better Centered */}
      <section className="px-6 lg:px-12 py-20 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            Building{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Unique Experiences
            </span>
            <br />
            for Digital products
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            I'm a <span className="text-orange-500">designer</span> who focuses on making UIs that are clean and easy to use, along with thoughtful product design. I mix good looks with usability to create digital experiences that work well and look great.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animate-delay-400">
            <Link href="/designs">
              <InteractiveButton variant="primary" className="px-12 py-4 text-lg">
                Designs
              </InteractiveButton>
            </Link>
            <Link href="/contact">
              <InteractiveButton variant="secondary" className="px-12 py-4 text-lg">
                Contact Me
              </InteractiveButton>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 animate-fade-in-up animate-delay-600">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Quick</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span>50+ Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="text-center pb-10 animate-fade-in animate-delay-600">
        <ChevronDown className="w-6 h-6 mx-auto text-gray-400 animate-bounce" />
      </div>

      {/* Featured Work Section */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Design Work</h2>
            <p className="text-gray-400 text-lg">Explore some of my recent design projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900/80 rounded-xl overflow-hidden hover:bg-zinc-800/90 transition-colors group"
              >
                {/* Image with modal open on click */}
                <div
                  className="aspect-video relative cursor-pointer group"
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
          <div className="text-center mt-12 animate-fade-in-up animate-delay-600">
            <Link href="/designs">
              <InteractiveButton className="px-12 py-4 text-lg">View All Projects</InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-16 right-0 text-white hover:text-orange-500 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            {/* Image Container */}
            <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              {/* Project Info */}
              <div className="p-6 bg-zinc-900">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-500 text-sm font-semibold">{selectedProject.category}</span>
                  <span className="text-gray-400 text-sm">{selectedProject.year}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Me Section */}
      <section className="px-6 lg:px-12 py-20 bg-zinc-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why work with me?</h2>
            <p className="text-gray-400 text-lg">What makes my design approach unique</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Delivery",
                desc: "Quick turnaround times without compromising on quality. I understand the importance of meeting deadlines.",
              },
              {
                icon: Shield,
                title: "Reliable Process",
                desc: "Consistent communication and a proven design process that ensures your project stays on track.",
              },
              {
                icon: Briefcase,
                title: "Proven Experience",
                desc: "Over 50 successful projects across various industries, from startups to established brands.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`text-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 relative hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's create something amazing together. Get in touch to discuss your design needs.
          </p>
          <ContactButton className="px-12 py-4 text-lg">Get In Touch</ContactButton>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
