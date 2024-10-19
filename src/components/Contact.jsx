"use client";

const Contact = () => {

  const formAction = (data) => {
    const formValue = Object.fromEntries(data);

    console.log(formValue, "Form Value", formValue.name);
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 px-4 md:px-8 text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Contact Form */}
          <form className="w-full bg-white/10 p-8 rounded-lg shadow-lg" action={formAction}>
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary border-dashed border"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary border-dashed border"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary border-dashed border"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
