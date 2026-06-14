export default function GetinTouch() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.25),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[400px_1fr]">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-violet-500">
              05. Get In Touch
            </span>

            <h2 className="mb-10 text-4xl font-bold leading-tight text-white md:text-5xl">
              Let's Build Something
              <br />
              Amazing Together
            </h2>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <span className="text-lg text-white">
                  hello@newaforge.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.042 11.042 0 005.516 5.516l1.128-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>

                <span className="text-lg text-white">
                  +1 (555) 123-4567
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <span className="text-lg text-white">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="border-l border-white/10 pl-0 lg:pl-10">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-16 rounded-xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-gray-400 backdrop-blur-md outline-none transition focus:border-violet-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-16 rounded-xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-gray-400 backdrop-blur-md outline-none transition focus:border-violet-500"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="h-16 rounded-xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-gray-400 backdrop-blur-md outline-none transition focus:border-violet-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="h-16 rounded-xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-gray-400 backdrop-blur-md outline-none transition focus:border-violet-500"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-5 text-white placeholder:text-gray-400 backdrop-blur-md outline-none transition focus:border-violet-500"
              />

              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-violet-600 to-indigo-500 px-10 py-4 font-medium text-white transition hover:scale-105"
              >
                Send Message

                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}