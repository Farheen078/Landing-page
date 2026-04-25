export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div><h3 className="text-white text-xl font-bold mb-4">SaaSify</h3><p className="text-sm leading-relaxed">Modern automation platform for forward-thinking teams.</p></div>
          <div><h4 className="text-white font-semibold mb-4">Product</h4><ul className="space-y-2 text-sm"><li><a href="#features" className="hover:text-white transition">Features</a></li><li><a href="#pricing" className="hover:text-white transition">Pricing</a></li><li><a href="#" className="hover:text-white transition">Integrations</a></li><li><a href="#" className="hover:text-white transition">Changelog</a></li></ul></div>
          <div><h4 className="text-white font-semibold mb-4">Company</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white transition">About</a></li><li><a href="#" className="hover:text-white transition">Blog</a></li><li><a href="#" className="hover:text-white transition">Careers</a></li><li><a href="#" className="hover:text-white transition">Press</a></li></ul></div>
          <div><h4 className="text-white font-semibold mb-4">Legal</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white transition">Privacy</a></li><li><a href="#" className="hover:text-white transition">Terms</a></li><li><a href="#" className="hover:text-white transition">Security</a></li><li><a href="#" className="hover:text-white transition">Cookies</a></li></ul></div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} SaaSify, Inc. All rights reserved.</p>
          <div className="flex gap-6"><a href="#" className="hover:text-white transition">Twitter</a><a href="#" className="hover:text-white transition">LinkedIn</a><a href="#" className="hover:text-white transition">GitHub</a></div>
        </div>
      </div>
    </footer>
  );
}