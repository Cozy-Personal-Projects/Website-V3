"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, X } from "lucide-react"
import { InteractiveButton } from "@/components/interactive-button"
import { ContactButton } from "@/components/contact-button"
import { useState } from "react"

export default function DesignsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Cozy Website V1",
      category: "Web Design",
      year: "July 2025",
      description: "A modern website made for me, the first version.",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Design",
      year: "2024",
      description: "Intuitive mobile banking interface designed for security and ease of use.",
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      year: "2023",
      description: "Clean and functional dashboard for a project management SaaS platform.",
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Branding",
      year: "2023",
      description: "Complete brand identity design for a sustainable fashion startup.",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Web Design",
      year: "2023",
      description: "Personal portfolio website for a creative professional.",
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile Design",
      year: "2023",
      description: "User-friendly food delivery app with focus on quick ordering process.",
    },
  ]

  const openImageModal = (projectId: number) => {
    setSelectedImage(projectId)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const selectedProject = projects.find((p) => p.id === selectedImage)

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-12">
<div className="w-[120px]">
  <Link href="/">
    <img src="/cozy-navbar.webp" alt="Cozy logo" className="w-full h-auto" />
  </Link>
</div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/designs" className="text-white border-b-2 border-white pb-1">Designs</Link>
        </div>
        <Link href="/contact">
          <InteractiveButton className="px-6 py-3">Contact Me</InteractiveButton>
        </Link>
      </nav>

      {/* Back Button */}
      <div className="px-6 lg:px-12 pt-6">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
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
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900/80 rounded-xl overflow-hidden hover:bg-zinc-800/90 transition-colors group"
              >
                {project.id === 1 ? (
                  <div
                    className="aspect-video relative cursor-pointer group"
                    onClick={() => openImageModal(project.id)}
                  >
                    <img
                      src="/projects/cozy-website-v1.webp"
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ) : (
                  <div
                    className="aspect-video bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative img-fade cursor-pointer"
                    onClick={() => openImageModal(project.id)}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                )}
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
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 lg:px-12 py-20 bg-zinc-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Design Process</h2>
            <p className="text-gray-400 text-lg">How I approach each project to ensure the best results</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {["Discover", "Define", "Design", "Deliver"].map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl relative">
                  <div className="absolute inset-0 border-2 border-orange-300 rounded-full opacity-50"></div>
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step}</h3>
                <p className="text-gray-400 text-sm">
                  {[
                    "Understanding your goals, users, and requirements",
                    "Creating a clear strategy and project roadmap",
                    "Crafting the visual and interactive experience",
                    "Final refinements and handoff for development",
                  ][index]}
                </p>
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
                  src={
                    selectedProject.id === 1
                      ? "/projects/cozy-website-v1.webp"
                      : "/placeholder.svg?height=600&width=800&text=Design+Preview"
                  }
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
    </div>
  )
}
