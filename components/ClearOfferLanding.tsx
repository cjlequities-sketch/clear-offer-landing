import React from 'react';

export default function ClearOfferLanding() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <header className="flex justify-between items-center px-10 py-6 bg-slate-50 border-b border-slate-200">
        <img src="/logo.png" alt="Clear Offer Logo" className="h-20" />
        <nav>
          <a href="#how" className="mr-6 font-medium hover:text-blue-600">How It Works</a>
          <a href="#comparison" className="mr-6 font-medium hover:text-blue-600">Compare</a>
          <a href="#benefits" className="mr-6 font-medium hover:text-blue-600">Benefits</a>
          <a href="#areas" className="mr-6 font-medium hover:text-blue-600">Areas We Serve</a>
          <a href="#contact" className="bg-slate-900 text-white px-5 py-3 rounded-lg hover:bg-blue-700">Get an Offer</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto my-16 flex flex-wrap items-center gap-8 px-6">
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight">
            Get a fast, fair <span className="text-blue-600">cash offer</span> for your home.
          </h1>
          <p className="text-lg mt-4 text-slate-600">No fees. No repairs. No showings. Pick your closing date.</p>
        </div>

        <div className="flex-1 bg-white border border-slate-200 rounded-xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Request your cash offer</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-slate-300 rounded-lg p-3" />
            <input type="tel" placeholder="Phone Number" className="w-full border border-slate-300 rounded-lg p-3" />
            <input type="email" placeholder="Email" className="w-full border border-slate-300 rounded-lg p-3" />
            <input type="text" placeholder="Property Address" className="w-full border border-slate-300 rounded-lg p-3" />
            <textarea placeholder="Anything else we should know?" className="w-full border border-slate-300 rounded-lg p-3 h-24" />
            <label className="text-sm text-slate-600 flex items-start gap-2">
              <input type="checkbox" className="mt-1" /> I agree to receive calls/texts from Clear Offer about my inquiry. Msg & data rates may apply.
            </label>
            <button type="submit" className="bg-slate-900 text-white w-full py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">Get My Cash Offer</button>
          </form>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto my-16 bg-slate-100 p-8 rounded-xl">
        <div>⭐ Concierge-Level Service</div>
        <div>💰 No Hidden Fees</div>
        <div>⏱ Close on Your Timeline</div>
      </section>

      <section id="comparison" className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 my-16 px-6">
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-center text-blue-600 text-xl font-bold mb-4">Clear Offer</h3>
          <ul className="space-y-2 text-slate-700">
            <li>✔ No commissions or fees</li>
            <li>✔ No repairs or cleaning required</li>
            <li>✔ Cash offer within 24–48 hours</li>
            <li>✔ Choose your closing date</li>
            <li>✔ Skip showings and open houses</li>
            <li>✔ Guaranteed, hassle-free sale</li>
          </ul>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-center text-slate-700 text-xl font-bold mb-4">Traditional Agent</h3>
          <ul className="space-y-2 text-slate-700">
            <li>✖ 6% commission + closing costs</li>
            <li>✖ Repairs and cleaning often required</li>
            <li>✖ Weeks to get offers</li>
            <li>✖ Closing timeline not guaranteed</li>
            <li>✖ Multiple showings and open houses</li>
            <li>✖ Uncertain sale outcome</li>
          </ul>
        </div>
      </section>

      <section id="areas" className="relative bg-slate-200 text-center py-16">
        <h2 className="text-3xl font-bold text-slate-900">Areas We Serve</h2>
        <p className="text-slate-600 mt-2 mb-8 max-w-lg mx-auto">
          We proudly buy homes nationwide, providing sellers with a seamless experience no matter where you are.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {['Atlanta', 'Raleigh', 'Charlotte', 'Dallas', 'Nashville', 'Tampa'].map((city) => (
            <div key={city} className="bg-white border border-slate-300 py-3 rounded-lg font-medium text-slate-800">{city}</div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {[
            { quote: 'Clear Offer made everything easy. We picked our closing date and were done in two weeks.', name: 'M. Johnson • Raleigh' },
            { quote: 'No repairs, no stress, and a fair price. Highly recommend their team!', name: 'K. Patel • Dallas' },
            { quote: 'We needed a quick sale before relocating. Clear Offer delivered exactly what they promised.', name: 'R. Nguyen • Charlotte' }
          ].map((t, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <p className="italic text-slate-700">“{t.quote}”</p>
              <span className="block mt-4 font-semibold text-slate-900">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-slate-50 border-t border-slate-200 py-8 text-center text-slate-600 text-sm">
        📞 (919) 438-1837 • ✉ info@clearofferdirect.com<br />
        Clear Offer is a DBA of LRH Services LLC. © 2025 All rights reserved.
      </footer>
    </div>
  );
}
