import { ArrowRight, Code, Database, FileCode, Github, Linkedin, Mail, Server, Terminal } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import AnimatedText from "@/components/animated-text"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,128,255,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="z-10 text-center space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            <AnimatedText text="Hello, I'm [Your Name]" />
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            <AnimatedText
              text="Full Stack Developer specializing in Python, JavaScript, and Web Technologies"
              delay={1.5}
            />
          </h2>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <SkillBadge icon={<FileCode className="w-4 h-4" />} name="HTML/CSS" />
            <SkillBadge icon={<Code className="w-4 h-4" />} name="JavaScript" />
            <SkillBadge icon={<Terminal className="w-4 h-4" />} name="Python" />
            <SkillBadge icon={<Database className="w-4 h-4" />} name="SQL" />
            <SkillBadge icon={<Server className="w-4 h-4" />} name="Node.js" />
          </div>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </div>
          <div className="pt-8 flex justify-center gap-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90 text-gray-600 dark:text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"></div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a passionate full-stack developer with expertise in Python, JavaScript, HTML/CSS, SQL, and Node.js.
                With a strong foundation in both frontend and backend technologies, I create seamless, user-friendly
                applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                My journey in programming began with [your background story]. Since then, I've been dedicated to
                continuous learning and applying my skills to solve real-world problems.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Education</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  [Your Degree] in [Your Field] - [University Name] ([Year])
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard title="HTML/CSS" level={90} />
            <SkillCard title="JavaScript" level={85} />
            <SkillCard title="Basic of Python" level={80} />
            <SkillCard title="SQL" level={75} />
            <SkillCard title="Node.js" level={70} />
            <SkillCard title="React" level={65} />
            <SkillCard title="Git" level={80} />
            <SkillCard title="Responsive Design" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce solution with user authentication, product management, and payment processing."
              technologies={["Python", "Django", "JavaScript", "PostgreSQL"]}
              image="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="Task Management App"
              description="A responsive web application for managing tasks with drag-and-drop functionality and real-time updates."
              technologies={["React", "Node.js", "Express", "MongoDB"]}
              image="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="Data Visualization Dashboard"
              description="An interactive dashboard displaying complex data sets with filterable charts and exportable reports."
              technologies={["JavaScript", "D3.js", "HTML/CSS", "Python"]}
              image="/placeholder.svg?height=300&width=400"
            />
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">your.email@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">github.com/yourusername</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">linkedin.com/in/yourusername</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 pt-4">
                I'm currently open to freelance opportunities and collaborations. Feel free to reach out if you have a
                project in mind!
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} [Your Name]. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

function SkillCard({ title, level }: { title: string; level: number }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{title}</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
      <p className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">{level}%</p>
    </div>
  )
}
