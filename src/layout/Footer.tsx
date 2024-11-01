import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">ShopEase</h3>
            <p className="text-gray-600 text-sm">
              Your one-stop destination for premium products. We provide quality items
              that enhance your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Shop', 'Categories', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                'FAQ',
                'Shipping Policy',
                'Returns & Exchanges',
                'Track Order',
                'Privacy Policy',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span className="text-sm">123 Commerce St, City, 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-indigo-600" />
                <span className="text-sm">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-indigo-600" />
                <span className="text-sm">support@shopease.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} ShopEase. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}