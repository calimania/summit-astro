import type { Page, Store } from '../markket/index.d';

type FooterProps = {
  store?: Store;
  page?: Page;
};

const Footer = ({store, page}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const isHomePage = page?.slug === 'home';

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            {store?.Logo?.url && (
              <img
                src={store.Logo.url}
                alt={`${store.title} logo`}
                className="h-12 mb-4"
              />
            )}
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              {store?.SEO?.metaDescription }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {!isHomePage && (
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
              )}
              {store?.URLS?.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.URL}
                    target={link.URL.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.Label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} {store?.title || 'All rights reserved.'}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* {store?.URLS?.map((link) => (
              <a
                key={link.id}
                href={link.URL}
                target={link.URL.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.Label}
              </a>
            ))} */}
            <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">home</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
