import { OnScroll } from "./OnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 -mt-48 lg:px-8 "
    >
      <OnScroll>
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="xyz@example.com"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </OnScroll>
    </section>
  );
};
