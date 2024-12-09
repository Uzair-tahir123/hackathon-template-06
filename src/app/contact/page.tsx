import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/shophero.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Contact</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="text-center py-4 bg-white shadow-md">
        <p className="text-gray-600 font-medium">
          <span className="font-bold text-gray-800">Home</span> &gt; Contact
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 lg:px-0">
        <h2 className="text-center text-2xl font-bold text-gray-800">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mt-4">
          For more information about our products & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-yellow-500 text-xl" />
              <div>
                <h3 className="font-bold text-gray-800">Address</h3>
                <p className="text-gray-600">329-636 W 4th Avenue, New York 10016, United States</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-yellow-500 text-xl" />
              <div>
                <h3 className="font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600">Mobile: (123) 456-7890</p>
                <p className="text-gray-600">Hotline: (456) 456-6789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-yellow-500 text-xl" />
              <div>
                <h3 className="font-bold text-gray-800">Working Time</h3>
                <p className="text-gray-600">Monday–Friday: 9:00–20:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00–18:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Alice"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="alice@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-yellow-500 text-white font-bold rounded-md shadow-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
