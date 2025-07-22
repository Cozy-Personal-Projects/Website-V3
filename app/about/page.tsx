import Link from "next/link"
import { ArrowLeft, Download, Palette, Users } from "lucide-react"
import { InteractiveButton } from "@/components/interactive-button"
import { Footer } from "@/components/footer"
import { ContactButton } from "@/components/contact-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-12 animate-fade-in">
<div className="w-[120px]">
  <Link href="/">
    <img src="/cozy-navbar.webp" alt="Cozy logo" className="w-full h-auto" />
  </Link>
</div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white border-b-2 border-white pb-1">
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
      <div className="px-6 lg:px-12 pt-6 animate-fade-in animate-delay-200">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 leading-relaxed">
            I'm a passionate designer who believes in creating digital experiences that feel both beautiful and
            intuitive.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <div className="lg:col-span-1 animate-fade-in-up animate-delay-200">
              <div className="aspect-square bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl mb-6 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                {/* Replace the div with the actual image */}
                <img
                  src="/my-pfp.gif"
                  alt="My Profile Picture"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold mb-2">Designer & Creative</h3>
                <p className="text-gray-400 mb-4">Based in Romania</p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in-up animate-delay-400">
              <div>
                <h2 className="text-2xl font-bold mb-4">My Story</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I've always loved bringing designs to life in apps and on websites. It feels great when someone thinks, "Wow, that looks good!" I'm lucky to work in such a creative field!
                   </p>
                  <p>
                    Over the years, I've designed for many clients, big and small. My work includes UI/UX, logos, banners, card and board games, and even creating worlds for a game called "Roblox".
                  </p>
                  <p>
                    When I'm not designing, you'll find me on Discord or playing games. Gaming is my favorite way to relax, and I even see myself potentially becoming a game developer in the near future.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">What I Do</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors duration-300">
                    <Palette className="w-8 h-8 text-orange-500 mb-3" />
                    <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-gray-400 text-sm">
                      Creating beautiful and professional interfaces that users love to use.
                    </p>
                  </div>
                  <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors duration-300">
                    <Users className="w-8 h-8 text-orange-500 mb-3" />
                    <h3 className="text-lg font-semibold mb-2">User Research</h3>
                    <p className="text-gray-400 text-sm">Finding the way to creating the best experience possible.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">My Approach</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I believe a good design begins with understanding. Before I start working on designs and prototypes, I make sure to understand your goals, your users, and what I'll have to achieve.
                  </p>
                  <p>
                    My process involves a lot of collaboration and back and forth. I value your input at every single step, as I believe the best solutions come from us working together as partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-12 py-20 bg-zinc-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "∞", label: "Happy Users" },
            ].map((stat, index) => (
              <div key={stat.label} className={`animate-fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's work together</h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm always excited to take on new challenges and create something amazing.
          </p>
          <ContactButton className="px-12 py-4 text-lg">Start a Project</ContactButton>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
