import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-800">DSV</h1>
          </Link>
          <span className="ml-2 text-gray-600 hidden md:inline">Global Logistics</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">Track & Trace</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">Get Quote</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">Locations</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">Support</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center text-gray-600">
            <span>EN</span>
            <span className="mx-1">|</span>
            <span>US</span>
          </div>
          <Link href="/auth/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Customer Portal
            </button>
          </Link>
        </div>
      </div>
      <!-- Smartsupp Live Chat script -->
<script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'b5128a73cc5937dbd8350f946eb65317e4a26df6';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>
<noscript> Powered by <a href=“https://www.smartsupp.com” target=“_blank”>Smartsupp</a></noscript>
        
    </header>
  );
}
