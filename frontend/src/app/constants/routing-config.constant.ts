const ROUTES = {
  home: '/',
  products: '/products',
  contact: '/contact',
};

const routingConfig = {
  navItems: [
    { label: 'Home', icon: 'home', route: ROUTES.home },
    { label: 'Products', icon: 'storefront', route: ROUTES.products },
    { label: 'Contact', icon: 'contact_mail', route: ROUTES.contact },
  ],
  footerLinks: [
    { icon: 'home', label: 'Home', route: '/' },
    { icon: 'local_dining', label: 'Food', route: '/products' },
  ],
};

export { routingConfig };
