import { useState } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, Star, CheckCircle2, 
  ChevronRight, ShieldCheck, Award, Droplets, Sparkles
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-red-500" />
              <span className="font-bold text-2xl tracking-tight text-white">AGM <span className="text-red-500">Detailing</span></span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-zinc-300 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-zinc-300 hover:text-white transition-colors">About</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:7089433089" className="text-zinc-300 hover:text-white flex items-center gap-2 font-medium transition-colors">
                <Phone className="h-4 w-4 text-red-500" />
                (708) 943-3089
              </a>
              <a href="#contact" className="bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-red-500/25">
                Book Now
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md">Services</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md">About</a>
              <a href="tel:7089433089" className="block px-3 py-2 text-base font-medium text-red-400 hover:text-red-300 hover:bg-zinc-800 rounded-md flex items-center gap-2">
                <Phone className="h-4 w-4" /> (708) 943-3089
              </a>
              <a href="#contact" className="block mt-4 text-center bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-red-500/25 mx-3">
                Book Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury car detailing" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Your Car, <span className="text-red-500">Reborn.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-10 font-light">
            Precision Detailing in Maywood. I don't just wash cars; I restore their showroom glory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-500/25 flex items-center justify-center gap-2">
              Get a Free Quote <ChevronRight className="h-5 w-5" />
            </a>
            <a href="#services" className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 border border-zinc-700">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-zinc-800 bg-zinc-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Trusted Products & Techniques</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-xl font-bold text-zinc-300"><ShieldCheck className="h-6 w-6 text-red-500" /> P&S</div>
            <div className="flex items-center gap-2 text-xl font-bold text-zinc-300"><Droplets className="h-6 w-6 text-red-500" /> Koch Chemie</div>
            <div className="flex items-center gap-2 text-xl font-bold text-zinc-300"><Award className="h-6 w-6 text-red-500" /> Meguiar's</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Detailing Packages</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Choose the perfect level of care for your vehicle. All prices are starting estimates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Essential Detail</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">$25</span>
                <span className="text-zinc-500 font-medium">+</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> 3-bucket wash</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Foam bath</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Wheels & tires cleaned</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Interior wipe down</li>
              </ul>
              <p className="text-xs text-zinc-500 mb-6 italic">* Price is by condition</p>
              <a href="#contact" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 text-center block">Select Essential</a>
            </div>

            {/* Elite (Most Popular) */}
            <div className="bg-zinc-900 border-2 border-red-500 rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-red-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 mt-2">Elite Detail</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">$125</span>
                <span className="text-zinc-500 font-medium">+</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Clay bar treatment</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Ceramic sealant</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Steam clean carpets</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Leather conditioning</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Deep extraction</li>
              </ul>
              <p className="text-xs text-zinc-500 mb-6 italic">* Price is by condition</p>
              <a href="#contact" className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 text-center block shadow-lg shadow-red-500/25">Select Elite</a>
            </div>

            {/* Premium */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Premium Detail</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">$75</span>
                <span className="text-zinc-500 font-medium">+</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Deep clean wheels</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Interior blowout</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Full deep vacuum</li>
                <li className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /> Door & trunk jambs</li>
              </ul>
              <p className="text-xs text-zinc-500 mb-6 italic">* Price is by condition</p>
              <a href="#contact" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 text-center block">Select Premium</a>
            </div>
          </div>

          {/* Exterior Only Add-on */}
          <div className="mt-12 max-w-3xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Exterior Only: Clay & Seal Treatment</h4>
              <p className="text-zinc-400 text-sm">Decontamination wash, clay bar, and 6-month ceramic sealant.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-2xl font-bold text-white">$85<span className="text-zinc-500 text-lg font-medium">+</span></div>
              <a href="#contact" className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105 whitespace-nowrap">Add On</a>
            </div>
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section id="about" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* About Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About AGM Detailing</h2>
              <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                Located in the heart of Maywood, IL, AGM Auto Detailing is dedicated to providing premium, meticulous car care. I use industry-leading products and techniques to ensure your vehicle receives the ultimate treatment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Location</h4>
                    <p className="text-zinc-400">Sent Once Booked</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                    <Clock className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Hours of Operation</h4>
                    <p className="text-zinc-400">Mon - Fri: 11:00 AM - 4:30 PM<br/>Sat: 10:00 AM - 4:30 PM<br/>Sun: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Contact</h4>
                    <p className="text-zinc-400">(708) 943-3089</p>
                    {/* Mobile Click to Call */}
                    <a href="tel:7089433089" className="md:hidden mt-3 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
                      <Phone className="h-4 w-4" /> Click to Call
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quote Form */}
            <div id="contact" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get a Quick Quote</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1.5">Full Name</label>
                  <input type="text" id="name" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1.5">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" placeholder="(708) 555-0123" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium text-zinc-400 mb-1.5">Vehicle Type</label>
                    <select id="vehicle" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all appearance-none">
                      <option value="">Select Type...</option>
                      <option value="sedan">Sedan / Coupe</option>
                      <option value="suv">SUV / Truck</option>
                      <option value="lifted">Lifted / Oversized</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-1.5">Service Interested In</label>
                    <select id="service" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all appearance-none">
                      <option value="">Select Service...</option>
                      <option value="essential">Essential Detail ($25+)</option>
                      <option value="premium">Premium Detail ($75+)</option>
                      <option value="elite">Elite Detail ($125+)</option>
                      <option value="exterior">Exterior Only ($85+)</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-red-500/25 mt-4">
                  Request Quote
                </button>
                <p className="text-center text-xs text-zinc-500 mt-4">I'll get back to you within 24 hours.</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-red-500" />
                <span className="font-bold text-xl tracking-tight text-white">AGM <span className="text-red-500">Detailing</span></span>
              </div>
              <p className="text-zinc-400 max-w-sm mb-6">
                Premium auto detailing services in Maywood, IL. I bring your vehicle back to its showroom glory with precision and care.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-zinc-400 hover:text-red-400 transition-colors">Services & Pricing</a></li>
                <li><a href="#about" className="text-zinc-400 hover:text-red-400 transition-colors">About Me</a></li>
                <li><a href="#contact" className="text-zinc-400 hover:text-red-400 transition-colors">Book an Appointment</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Location</h4>
              {/* Google Maps Placeholder */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl h-32 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-zinc-800/50 group-hover:bg-zinc-800/30 transition-colors z-10 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-red-500 drop-shadow-lg" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
                  alt="Map placeholder" 
                  className="w-full h-full object-cover opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-zinc-500 text-sm mt-3 text-center">Sent Once Booked</p>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">
              &copy; {new Date().getFullYear()} AGM Auto Detailing. All rights reserved.
            </p>
            <p className="text-zinc-600 text-sm">
              Designed for performance & conversion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
