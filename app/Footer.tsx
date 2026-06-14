import React from 'react'
import SpinText from './components/ui/SpinText'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo Section */}
          <div>
            <SpinText
                                    className="text-2xl md:text-2xl font-bold text-white max-w-3xl"
                                    text="NexaForge"
                                    duration={1}
                                    stagger={0.03}
                                    delay={0.5}
                                    />

            <p className="max-w-xs leading-8 text-gray-400">
              AI & IT solutions company helping enterprises
              innovate, scale, and lead in the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                "Home",
                "Services",
                "Case Studies",
                "Blog",
                "About",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:text-violet-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-xl font-semibold text-white">
              Services
            </h4>

            <ul className="space-y-3">
              {[
                "AI Development",
                "Cloud Engineering",
                "Data Analytics",
                "Cyber Security",
                "Automation",
                "Digital Transformation",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:text-violet-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 text-xl font-semibold text-white">
              Resources
            </h4>

            <ul className="space-y-3">
              {[
                "Blog",
                "Case Studies",
                "Careers",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:text-violet-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
  <h4 className="mb-6 text-xl font-semibold text-white">
    Follow Us
  </h4>

  <div className="flex gap-3">
    {/* LinkedIn */}
    <a
      href="#"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M4.98 3.5C4.98 4.60457 4.08457 5.5 2.98 5.5C1.87543 5.5 0.98 4.60457 0.98 3.5C0.98 2.39543 1.87543 1.5 2.98 1.5C4.08457 1.5 4.98 2.39543 4.98 3.5ZM1.48 8H4.48V22H1.48V8ZM8.48 8H11.36V9.91H11.4C11.8 9.15 12.78 8.35 14.23 8.35C17.24 8.35 17.8 10.33 17.8 12.91V22H14.8V13.94C14.8 12.02 14.77 9.55 12.15 9.55C9.49 9.55 9.08 11.63 9.08 13.8V22H6.08V8H8.48Z" />
      </svg>
    </a>

    {/* Twitter/X */}
    <a
      href="#"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M18.244 2H21.5L14.39 10.126L22.75 22H16.204L11.07 14.81L4.78 22H1.52L9.13 13.298L1.11 2H7.822L12.46 8.57L18.244 2ZM17.102 20.05H18.905L6.842 3.847H4.908L17.102 20.05Z" />
      </svg>
    </a>

    {/* GitHub */}
    <a
      href="#"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.8 3.438 22.3 8.205 23.887C8.805 23.999 9.025 23.63 9.025 23.313C9.025 23.028 9.014 22.073 9.008 20.809C5.672 21.534 4.968 19.393 4.968 19.393C4.422 18.006 3.633 17.638 3.633 17.638C2.545 16.893 3.717 16.909 3.717 16.909C4.922 16.994 5.556 18.148 5.556 18.148C6.625 19.98 8.361 19.451 9.05 19.146C9.158 18.372 9.468 17.844 9.81 17.545C7.145 17.241 4.343 16.212 4.343 11.606C4.343 10.293 4.813 9.219 5.579 8.381C5.455 8.079 5.042 6.859 5.696 5.207C5.696 5.207 6.707 4.884 9.001 6.437C9.961 6.17 10.99 6.037 12 6.032C13.01 6.037 14.04 6.17 15 6.437C17.293 4.884 18.303 5.207 18.303 5.207C18.958 6.859 18.545 8.079 18.421 8.381C19.188 9.219 19.657 10.293 19.657 11.606C19.657 16.223 16.849 17.238 14.176 17.536C14.606 17.906 14.99 18.633 14.99 19.748C14.99 21.349 14.975 22.639 14.975 23.313C14.975 23.633 15.19 24.004 15.8 23.886C20.565 22.297 24 17.799 24 12.5C24 5.87 18.627 0.5 12 0.5Z" />
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="#"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M23.5 6.2C23.23 5.18 22.42 4.37 21.4 4.1C19.57 3.6 12 3.6 12 3.6C12 3.6 4.43 3.6 2.6 4.1C1.58 4.37 0.77 5.18 0.5 6.2C0 8.03 0 12 0 12C0 12 0 15.97 0.5 17.8C0.77 18.82 1.58 19.63 2.6 19.9C4.43 20.4 12 20.4 12 20.4C12 20.4 19.57 20.4 21.4 19.9C22.42 19.63 23.23 18.82 23.5 17.8C24 15.97 24 12 24 12C24 12 24 8.03 23.5 6.2ZM9.6 15.8V8.2L16 12L9.6 15.8Z" />
      </svg>
    </a>
  </div>
</div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500">
            © 2026 NexaForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
