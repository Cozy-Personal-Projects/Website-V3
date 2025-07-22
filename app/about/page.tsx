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
        <div className="text-4xl font-black tracking-wider">
          <span className="text-orange-500">COZY</span>
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
            {/* Profile Image Placeholder */}
            <div className="lg:col-span-1 animate-fade-in-up animate-delay-200">
              <div className="aspect-square bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl mb-6 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold mb-2">Designer & Creative</h3>
                <p className="text-gray-400 mb-4">Based in [Your Location]</p>
                <InteractiveButton className="px-8 py-3 text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </InteractiveButton>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in-up animate-delay-400">
              <div>
                <h2 className="text-2xl font-bold mb-4">My Story</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I've always been fascinated by the intersection of creativity and functionality. What started as a
                    curiosity about how things work evolved into a passion for designing digital experiences that truly
                    serve people.
                  </p>
                  <p>
                    Over the years, I've had the privilege of working with diverse clients, from innovative startups to
                    established brands, helping them translate their vision into compelling digital products. Each
                    project teaches me something new about the delicate balance between aesthetics and usability.
                  </p>
                  <p>
                    When I'm not designing, you'll find me exploring new design trends, experimenting with creative
                    tools, or enjoying a good cup of coffee while sketching ideas.
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
                      Creating intuitive interfaces that users love to interact with.
                    </p>
                  </div>
                  <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors duration-300">
                    <Users className="w-8 h-8 text-orange-500 mb-3" />
                    <h3 className="text-lg font-semibold mb-2">User Research</h3>
                    <p className="text-gray-400 text-sm">Understanding user needs to inform design decisions.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">My Approach</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I believe great design starts with understanding. Before diving into pixels and prototypes, I take
                    time to understand your goals, your users, and the problems we're solving together.
                  </p>
                  <p>
                    My process is collaborative and iterative. I value your input at every stage and believe the best
                    solutions emerge when we work together as partners in the creative process.
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
              { number: "∞", label: "Cups of Coffee" },
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
