import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AIKE</h2>
          </div>
          <div>
            <h3 className="text-gray-900 font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              <li>  
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Category Links */}
          <div>
            <h3 className="text-gray-900 font-medium mb-6">Category</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Living Room
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Dining Room
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Home Office
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Bedroom
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Outdoor
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 font-medium mb-6">Join our newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 hover:text-gray-600 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center pt-8 border-t border-gray-200 text-sm text-gray-600 text-center md:text-left">
          <p className="w-full md:w-auto">Copyright © 2024 AIKE. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms of Condition
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
