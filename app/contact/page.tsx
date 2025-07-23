"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MessageCircle, Send, UserRound } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { InteractiveButton } from "@/components/interactive-button"
import { Footer } from "@/components/footer"

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

export default function ContactPage() {
  // Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showFallback, setShowFallback] = useState(false)

  // Simple sanitization: remove newlines and encode URI components
  function sanitize(str: string) {
    return encodeURIComponent(str.replace(/[\r\n]+/g, " ").replace(/%0A|%0D/gi, ""))
  }

  // Handle input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  // Handle form submit
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const to = "cozyhqinquiries@gmail.com"
    const subject = sanitize(form.subject || "Project Inquiry")
    const body = sanitize(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    // Try to open mail client
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    // Show fallback after a short delay (user can close modal if mail client opened)
    setTimeout(() => setShowFallback(true), 1500)
  }

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-12">
        <div className="w-[120px]">
          <Link href="/">
            <ScrollLogo />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
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
            Let's <span className="text-orange-500">Connect</span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 leading-relaxed">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, or just having a friendly chat
                  about design. Feel free to reach out through any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">cozyhqinquiries@gmail.com</p>
                  </div>
                </div>
                {/* Discord Contact */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <UserRound className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Discord</h3>
                    <p className="text-gray-400">@cozyhq</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-gray-400">Usually within 24 hours email, less on Discord</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h3 className="font-semibold mb-3">What to expect:</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Quick response to your inquiry</li>
                  <li>• Detailed discussion about your project</li>
                  <li>• Transparent timeline and process</li>
                  <li>• Collaborative approach to design</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-900 p-8 rounded-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-orange-500"
                      placeholder="John"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-orange-500"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-orange-500"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-orange-500"
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-orange-500 min-h-[120px]"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <InteractiveButton className="w-full px-8 py-3">
                  <Send className="w-4 h-4 mr-2 inline" />
                  Send Message
                </InteractiveButton>
              </form>
              {showFallback && (
                <div className="mt-6 bg-zinc-800 p-4 rounded-xl text-center">
                  <p className="mb-2 text-orange-400 font-semibold">
                    If your mail app did not open, please copy and send manually:
                  </p>
                  <div className="mb-2 text-gray-300 text-sm">
                    <b>Email:</b> cozyhqinquiries@gmail.com
                  </div>
                  <div className="mb-2 text-gray-300 text-sm">
                    <b>Subject:</b> {form.subject}
                  </div>
                  <div className="mb-2 text-gray-300 text-sm">
                    <b>Message:</b> <br />
                    Name: {form.firstName} {form.lastName}<br />
                    Email: {form.email}<br />
                    {form.message}
                  </div>
                  <button
                    className="mt-2 px-4 py-2 bg-orange-500 rounded text-black font-bold"
                    onClick={() => setShowFallback(false)}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 lg:px-12 py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-zinc-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">What's your typical project timeline?</h3>
              <p className="text-gray-400">
                Project timelines vary depending on scope, but most projects take 2-6 weeks from start to finish. I'll
                provide a detailed timeline during our initial consultation.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Do you work with clients remotely?</h3>
              <p className="text-gray-400">
                I work with clients worldwide and have a proven process for remote collaboration using modern design and
                communication tools.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">What information do you need to get started?</h3>
              <p className="text-gray-400">
                I'll need to understand your goals, target audience, any existing brand guidelines, and examples of
                designs you like. We'll cover all this in our initial discussion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}