import { Linkedin, Github, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Navbar() { 
  return (
    <div className="w-full bg-transparent p-2">
      <div className="container mx-auto p-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
            Serenade
            </Link>
          </div>
            <div className="flex items-center space-x-4">
                <Linkedin className="text-white hover:text-gray-700" size={24} />
                <Github className="text-white hover:text-gray-700" size={24} />  
                <Instagram className="text-white hover:text-gray-700" size={24} />
                <Twitter className="text-white hover:text-gray-700" size={24} />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              Serenade
            </Link>
          </div>
          <div className="flex items-center space-x-2">
                <Linkedin className="text-white hover:text-gray-700" size={20} />
                <Github className="text-white hover:text-gray-700" size={20} />  
                <Instagram className="text-white hover:text-gray-700" size={20} />
                <Twitter className="text-white hover:text-gray-700" size={20} />
            </div>
        </div>
      </div>
  )
}