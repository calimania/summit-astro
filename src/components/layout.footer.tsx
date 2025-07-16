import type { Page, Store } from '../markket/index.d';
import { getCollection } from 'astro:content';

const pages = await getCollection('pages');

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
            {store?.Favicon?.url && (
              <a href="/">
                <img
                  src={store?.Favicon?.url}
                  alt={`${store.title} logo`}
                  className="h-12 mb-4"
                />
              </a>
            )}
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              {store?.SEO?.metaDescription }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
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
          <div>
            <h3 className="text-white font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              {pages?.filter(p => ['about', 'newsletter', 'blog', 'products'].includes(p.data.slug))?.map((page) => (
                <li key={page.id}>
                  <a
                    href={`/${page.data.slug}`}
                    target={'_self'}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {page.data.Title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} {store?.title || 'Some rights reserved.'}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {!isHomePage && (
              <a
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
            )}
            <a
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
