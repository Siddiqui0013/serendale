import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Database, Github, Twitter, Sparkles, Mail, Briefcase, LineChart, Terminal, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />

      <div className="flex flex-col w-full space-y-4 items-center justify-center py-20">
      <h1 className="bg-gradient-to-r text-3xl md:text-5xl from-fuchsia-500 via-violet-500 to-blue-400 text-transparent bg-clip-text">
        Ready to Get Started?
      </h1>
      <p className="text-center text-xl text-gray-500"> Sign up for free and start building your software today! </p>
      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 py-6 text-lg">
            <Link href="/get-started">Get started</Link>
          </Button>
      </div>

      <FaqSection />
      <Footer />

    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-1 opacity-50 top-[30%] z-0 w-full h-full">
        <Image src="/bg-hero.png" alt="Background" fill priority className="object-cover w-[80%] transform -rotate-6" />
      </div>

      {/* Purple glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/20 z-0"></div>

      <div className="container mx-auto relative z-10 flex flex-col items-center">
        {/* Heading with gradient text */}
        <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold mb-16">
          <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-400 text-transparent bg-clip-text">
            Design with Words<span className="text-blue-400">.</span>
          </span>
          <br />
          <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-400 text-transparent bg-clip-text">
            Build Visually<span className="text-blue-400">.</span>
          </span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 py-6 text-lg">
            <Link href="/get-started">Get started</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-violet-200/80 hover:bg-violet-300/80 text-gray-800 rounded-md px-8 py-6 text-lg"
          >
            <Link href="/learn-more">Read more</Link>
          </Button>
        </div>

        {/* Input box with purple glow */}
        {/* <div className="w-full max-w-4xl relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur-sm"></div>
          <div className="relative bg-gray-200 rounded-xl p-1">
            <textarea
              className="w-full h-40 bg-gray-200 rounded-xl p-4 resize-none focus:outline-none"
              placeholder="Enter your prompt here..."
            />
            <Button className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M3 5h4" />
                <path d="M19 17v4" />
                <path d="M17 19h4" />
              </svg>
              Generate
            </Button>
          </div>
        </div> */}

<div className="w-full max-w-4xl relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur-sm"></div>
          <div className="relative bg-gray-200 rounded-xl p-1">
            <textarea
              className="w-full h-40 bg-gray-200 rounded-xl p-4 resize-none focus:outline-none"
              placeholder="Enter your prompt here..."
              id="hero-prompt"
            />
            <Button
              asChild
              className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center gap-2"
            >
              <Link href="/generate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M3 5h4" />
                  <path d="M19 17v4" />
                  <path d="M17 19h4" />
                </svg>
                Generate
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { icon: Database, label: "Database" },
    { icon: Sparkles, label: "AI Magic" },
    { icon: Mail, label: "Email" },
    { icon: Briefcase, label: "Security" },
    { icon: LineChart, label: "Analytics" },
    { icon: Terminal, label: "Terminal" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Standard Features Panel */}
          <div className="bg-[#2c2c2c] rounded-2xl p-10 flex flex-col space-y-8">
            {features.map((feature, index) => (
              <div key={`standard-${index}`} className="flex justify-between items-center space-x-4">
                <div className="flex gap-4">
                <feature.icon className="w-6 h-6 text-white" />
                <span className="text-white text-lg">{feature.label}</span>
                </div>
                <p>.......................................</p>
                <span className="text-lg text-red-400">Manual Integeration</span>
              </div>
            ))}
          </div>

          {/* Premium Features Panel */}
          <div className="bg-[#2c2c2c] rounded-2xl p-10 flex flex-col space-y-8">
            {features.map((feature, index) => (
              <div key={`premium-${index}`} className="flex items-center justify-between space-x-4">
                <div className="flex gap-4">
                <feature.icon className="w-6 h-6 text-[#ff1cf7]" />
                <span className="text-lg ">{feature.label}</span>
                </div>
                <p>..................................................................</p>
                <span className="text-[#ff1cf7] text-lg">Built In</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function UseCasesSection() {
  const testimonials = [
    {
      id: 1,
      title: "Replace expensive SaaS",
      quote:
        "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
      image: "/placeholder.svg?height=60&width=60",
      borderColor: "from-fuchsia-500 to-violet-500",
    },
    {
      id: 2,
      title: "Replace expensive SaaS",
      quote:
        "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
      image: "/placeholder.svg?height=60&width=60",
      borderColor: "from-blue-400 to-cyan-400",
    },
    {
      id: 3,
      title: "Replace expensive SaaS",
      quote:
        "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
      image: "/placeholder.svg?height=60&width=60",
      borderColor: "from-fuchsia-500 to-violet-500",
    },
    {
      id: 4,
      title: "Replace expensive SaaS",
      quote:
        "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
      image: "/placeholder.svg?height=60&width=60",
      borderColor: "from-blue-400 to-cyan-400",
    },
    {
      id: 5,
      title: "Replace expensive SaaS",
      quote:
        "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
      image: "/placeholder.svg?height=60&width=60",
      borderColor: "from-fuchsia-500 to-violet-500",
    },
    {
      id: 6,
      title: "Replace expensive SaaS",
      quote:
        "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
      image: "/placeholder.svg?height=60&width=60",
      borderColor: "from-blue-400 to-cyan-400",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-[#ff1cf7] text-2xl font-medium mb-4">use cases</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-400 text-transparent bg-clip-text">
              Save time, money and headaches.
            </span>
          </h3>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-400 text-transparent bg-clip-text">
              Let AI build your apps<span className="text-blue-400">.</span>
            </span>
          </h3>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative">
              {/* Gradient border effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.borderColor} rounded-2xl blur-sm`}
              ></div>

              {/* Card content */}
              <div className="relative bg-[#2c2c2c] rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt="Profile"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-[#ff1cf7] text-lg font-medium mb-2">{testimonial.title}</h4>
                  <p className="text-white text-sm">&quot;{testimonial.quote}&quot;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  // FAQ data
  const faqs = [
    {
      question: "Pellentesque ac bibendum tortor?",
      answer: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Heading and CTA buttons */}
          <div>
            {/* Heading with gradient text */}
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-400 text-transparent bg-clip-text">
                Frequently
                <br />
                asked
                <br />
                questions
              </span>
            </h2>

            {/* Decorative element */}
            <div className="flex items-center gap-2 mb-12">
              <div className="w-2 h-2 rounded-full bg-fuchsia-500"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-400 rounded-full"></div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6">
              <Link
                href="/faq"
                className="group flex items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-300 hover:from-cyan-400 hover:to-blue-400 text-black font-bold py-6 px-8 rounded-full transition-all duration-300"
              >
                <span className="text-xl">Visit FAQ center</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/blog"
                className="group flex items-center justify-between bg-gradient-to-r from-blue-200 to-violet-300 hover:from-blue-300 hover:to-violet-400 text-black font-bold py-6 px-8 rounded-full transition-all duration-300"
              >
                <span className="text-xl">Visit our blog</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/help"
                className="group flex items-center justify-between bg-gradient-to-r from-cyan-300 to-fuchsia-300 hover:from-cyan-400 hover:to-fuchsia-400 text-black font-bold py-6 px-8 rounded-full transition-all duration-300"
              >
                <span className="text-xl">Ask for more help</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible className="w-full ">
                <AccordionItem value={`item-${index}`} className="">
                  <AccordionTrigger
                    className={`bg-[#2c2c2c] text-white p-6 rounded-t-xl text-left text-xl font-medium hover:no-underline`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`bg-[#2c2c2c] text-white/90 mt-0 p-6 pt-0 rounded-b-xl text-lg`}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#2c2c2c] py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left side - Logo, text and social icons */}
          <div className="max-w-md mb-10 md:mb-0">
            {/* Logo */}
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-400 text-transparent bg-clip-text">
                Serendale
              </span>
            </h2>

            {/* Text */}
            <p className="text-white/80 mb-8">
              Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact our
              support team. Sign up for free and start building your software today!
            </p>

            {/* Social icons */}
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-white hover:text-fuchsia-400 transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://discord.com" className="text-white hover:text-fuchsia-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-discord"
                >
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <path d="M7.5 7.2a4.3 4.3 0 0 1 9 0" />
                  <path d="M3.2 14.8a4.3 4.3 0 0 1 0-5.6A16.7 16.7 0 0 1 7 7.5" />
                  <path d="M20.8 14.8a4.3 4.3 0 0 0 0-5.6 16.7 16.7 0 0 0-3.8-1.7" />
                  <path d="M7.5 16.8a4.3 4.3 0 0 0 9 0" />
                </svg>
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="https://reddit.com" className="text-white hover:text-fuchsia-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span className="sr-only">Reddit</span>
              </Link>
              <Link href="https://twitter.com" className="text-white hover:text-fuchsia-400 transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex flex-col items-end space-y-4">
            <Link href="/company" className="text-white hover:text-fuchsia-400 text-xl transition-colors">
              Company
            </Link>
            <Link href="/app" className="text-white hover:text-fuchsia-400 text-xl transition-colors">
              User App
            </Link>
            <Link href="/about" className="text-white hover:text-fuchsia-400 text-xl transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-white hover:text-fuchsia-400 text-xl transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}