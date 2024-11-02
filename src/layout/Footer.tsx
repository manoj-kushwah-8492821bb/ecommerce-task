
export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    </footer>
  );
}