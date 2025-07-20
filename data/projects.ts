import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'sillalink-company',
    status: 'completed',
    featured: true,
    priority: 1,
    startDate: '2025-01-15',
    endDate: '2025-03-20',
    lastUpdated: '2025-03-20',

    thumbnail: {
      src: '/images/projects/programCompany/sillalink.png',
      alt: 'Software Company Platform Screenshot',
      width: 800,
      height: 600
    },

    images: [
      {
        src: '/images/projects/programCompany/sillalink.png',
        alt: 'Company Landing Page',
        width: 1200,
        height: 800
      },
      {
        src: '/images/projects/programCompany/dashboard.png',
        alt: 'Company Dashboard',
        width: 1200,
        height: 800
      },
      {
        src: '/images/projects/programCompany/phoneV.png',
        alt: 'Mobile Friendly View',
        width: 400,
        height: 800
      }
    ],

    technologies: [
      { name: 'Next.js', category: 'frontend', icon: '/icons/nextjs.png', color: '#fff' },
      { name: 'TypeScript', category: 'frontend', icon: '/icons/typescript.png', color: '#3178C6' },
      { name: 'Tailwind CSS', category: 'frontend', icon: '/icons/tailwind.png', color: '#06B6D4' },
      { name: 'Mongo-DB', category: 'database', icon: '/icons/mongodb.png', color: '#599636' },
      { name: 'Node-Js', category: 'backend', icon: '/icons/nodejs.png', color: '#599636' }
    ],

    links: [
      {
        type: 'demo',
        url: 'https://sillalink.com',
        label: 'Live Demo'
      },
      {
        type: 'github',
        url: 'https://github.com/yourusername/software-company-platform',
        label: 'Source Code'
      }
    ],

    translations: {
      en: {
        title: 'Modern Software Company Platform',
        description: 'A comprehensive company website built for a software development firm. It features service management, client project showcases, contact forms, multilingual support, and a responsive design. The platform allows potential clients to explore services, view past work, and easily reach out to the company.',
        shortDescription: 'Corporate website for a modern software company',
        features: [
          'Multilingual support (English and Arabic)',
          'Service pages with detailed offerings',
          'Project portfolio with media galleries',
          'Responsive design across devices',
          'Contact forms with validation and submission handling',
          'Client testimonial section',
          'Admin panel to manage content',
          'Search engine optimized pages'
        ],
        challenges: [
          'Building a flexible structure for multilingual content',
          'Designing reusable components for multiple page types',
          'Ensuring fast performance with optimized media and code splitting'
        ],
        learnings: [
          'Implementing i18n in a scalable Next.js app',
          'Building modular content-driven architecture',
          'SEO best practices for business websites'
        ],
        images: [
          { alt: 'Company Landing Page', caption: 'Modern homepage showcasing services' },
          { alt: 'Client Dashboard', caption: 'Custom dashboard for client interaction' },
          { alt: 'Mobile Friendly View', caption: 'Mobile-optimized layout for accessibility' }
        ]
      },
      ar: {
        title: 'منصة شركة برمجيات حديثة',
        description: 'موقع إلكتروني متكامل تم تطويره لشركة برمجيات حديثة. يتضمن صفحات الخدمات، معرض المشاريع السابقة، نموذج التواصل، ودعم متعدد اللغات. يتيح الموقع للعملاء المحتملين التعرف على الخدمات، واستعراض الأعمال السابقة، والتواصل بسهولة مع الشركة.',
        shortDescription: 'موقع شركة برمجيات عصري متعدد اللغات',
        features: [
          'دعم متعدد اللغات (العربية والإنجليزية)',
          'صفحات للخدمات مع شرح تفصيلي',
          'معرض مشاريع مع صور وعروض',
          'تصميم متجاوب لجميع الأجهزة',
          'نموذج تواصل مع تحقق من البيانات',
          'قسم شهادات العملاء وآرائهم',
          'لوحة تحكم لإدارة المحتوى',
          'تحسين صفحات الموقع لمحركات البحث'
        ],
        challenges: [
          'إنشاء هيكل مرن لدعم المحتوى بلغتين',
          'تصميم مكونات قابلة لإعادة الاستخدام لصفحات متعددة',
          'تحقيق أداء سريع من خلال تحسين الصور وتجزئة الكود'
        ],
        learnings: [
          'تطبيق نظام i18n قابل للتوسع في Next.js',
          'بناء هيكل معماري قائم على المحتوى قابل للتعديل',
          'أفضل ممارسات تحسين المواقع لمحركات البحث'
        ],
        images: [
          { alt: 'الصفحة الرئيسية للشركة', caption: 'واجهة حديثة تعرض الخدمات' },
          { alt: 'لوحة تحكم العميل', caption: 'لوحة تحكم مخصصة لتفاعل العملاء' },
          { alt: 'عرض متجاوب للهاتف المحمول', caption: 'تصميم محسن للأجهزة المحمولة' }
        ]
      }
    },

    seo: {
      keywords: ['software company', 'nextjs', 'typescript', 'multilingual', 'corporate website'],
      category: 'company-website'
    }
  },


  {
  id: '2',
  slug: 'dbhamz-perfumes-website',
  status: 'completed',
  featured: true,
  priority: 2,
  startDate: '2023-10-01',
  endDate: '2024-03-15',
  lastUpdated: '2024-12-15',

  thumbnail: {
    src: '/images/projects/dbhmaz/dbhamz.png',
    alt: 'Dbhamz Perfume Store Screenshot',
    width: 800,
    height: 600
  },

  images: [
    {
      src: '/images/projects/dbhmaz/dbhamz.png',
      alt: 'Product Page Screenshot',
      width: 1200,
      height: 800
    },
    {
      src: '/images/projects/dbhmaz/TAP.png',
      alt: 'Mobile View of Product Page',
      width: 400,
      height: 800
    },
    {
      src: '/images/projects/dbhmaz/db-phone.png',
      alt: 'Mobile View of Product Page',
      width: 400,
      height: 800
    }
  ],

  technologies: [
    { name: 'React', category: 'frontend', icon: '/icons/react.png', color: '#61DAFB' },
    { name: 'Node.js', category: 'backend', icon: '/icons/nodejs.png', color: '#339933' },
    { name: 'MongoDB', category: 'database', icon: '/icons/mongodb.png', color: '#47A248' }
  ],

  links: [
    {
      type: 'demo',
      url: 'https://dbhamz.com',
      label: 'Live Store'
    }
  ],

  translations: {
    en: {
      title: 'Dbhamz Perfume Online Store',
      description: 'An elegant online perfume store offering a wide selection of luxury fragrances for men and women. Designed with a focus on aesthetics, user experience, and seamless checkout.',
      shortDescription: 'Luxury fragrance store with elegant design and secure checkout',
      features: [
        'Product browsing with high-quality images',
        'Mobile-responsive shopping experience',
        'Secure online payments and checkout',
        'Product filtering by scent and category',
        'Admin panel for managing inventory'
      ],
      challenges: [
        'Designing a visually appealing and responsive UI',
        'Integrating secure payment gateway'
      ],
      learnings: [
        'User-centered eCommerce design',
        'Payment gateway integration (e.g. Tap)',
        'Inventory management best practices'
      ],
      images: [
        { alt: 'Product Detail Page', caption: 'Detailed product view with scent notes and reviews' }
      ]
    },
    ar: {
      title: 'متجر Dbhamz الإلكتروني للعطور',
      description: 'متجر إلكتروني أنيق لبيع العطور الفاخرة للرجال والنساء، يتميز بتصميم جذاب وتجربة مستخدم سلسة، مع نظام دفع آمن وسهل.',
      shortDescription: 'متجر عطور فاخر بتصميم جذاب ودفع آمن',
      features: [
        'تصفح المنتجات مع صور عالية الجودة',
        'تجربة شراء متجاوبة مع الجوال',
        'نظام دفع إلكتروني آمن وسهل',
        'تصفية المنتجات حسب الرائحة والفئة',
        'لوحة تحكم لإدارة المخزون والمنتجات'
      ],
      challenges: [
        'تصميم واجهة مستخدم جذابة وسريعة الاستجابة',
        'دمج بوابة دفع آمنة وموثوقة'
      ],
      learnings: [
        'تصميم متجر إلكتروني يركز على المستخدم',
        'دمج أنظمة الدفع مثل Tap',
        'أفضل ممارسات إدارة المخزون'
      ],
      images: [
        { alt: 'صفحة تفاصيل المنتج', caption: 'عرض مفصل للمنتج يشمل نوتات العطر والتقييمات' }
      ]
    }
  },

  seo: {
    keywords: ['perfume store', 'luxury fragrances', 'online shopping', 'react', 'nodejs'],
    category: 'e-commerce'
  }
}



  ,
  {
  id: '3',
  slug: 'sentora-perfume-store',
  status: 'completed',
  featured: true,
  priority: 1,
  startDate: '2025-01-15',
  endDate: '2025-03-20',
  lastUpdated: '2025-03-20',

  thumbnail: {
    src: '/images/projects/sentora/sentora.png',
    alt: 'Sentora Perfume Store Screenshot',
    width: 800,
    height: 600
  },

  images: [
    {
      src: '/images/projects/sentora/sentora.png',
      alt: 'Sentora Landing Page',
      width: 1200,
      height: 800
    },
    {
      src: '/images/projects/sentora/sentora-product.png',
      alt: 'Admin Dashboard for Products',
      width: 1200,
      height: 800
    },
    {
      src: '/images/projects/sentora/sentora-login.png',
      alt: 'Mobile View of Sentora',
      width: 400,
      height: 800
    },
    {
      src: '/images/projects/sentora/sentora-dash.png',
      alt: 'Mobile View of Sentora',
      width: 400,
      height: 800
    }
  ],

  technologies: [
    { name: 'Next.js', category: 'frontend', icon: '/icons/nextjs.png', color: '#fff' },
    { name: 'TypeScript', category: 'frontend', icon: '/icons/typescript.png', color: '#3178C6' },
    { name: 'Tailwind CSS', category: 'frontend', icon: '/icons/tailwind.png', color: '#06B6D4' },
    { name: 'MongoDB', category: 'database', icon: '/icons/mongodb.png', color: '#599636' },
    { name: 'Node.js', category: 'backend', icon: '/icons/nodejs.png', color: '#599636' }
  ],

  links: [
    {
      type: 'demo',
      url: 'https://sentora.com',
      label: 'Live Store'
    },
    {
      type: 'github',
      url: 'https://github.com/yourusername/sentora-perfume-store',
      label: 'Source Code'
    }
  ],

  translations: {
    en: {
      title: 'Sentora – Luxury Perfume Store',
      description: 'A high-end eCommerce platform for selling luxury perfumes. Sentora offers a seamless shopping experience with elegant UI, mobile responsiveness, product filtering, customer reviews, and an admin panel for inventory and order management.',
      shortDescription: 'Elegant online store for luxury perfumes',
      features: [
        'Multilingual support (English and Arabic)',
        'Product pages with detailed scent profiles',
        'Mobile-friendly and responsive UI',
        'Secure checkout with online payment integration',
        'Search and filter functionality by category or scent',
        'Customer reviews and ratings',
        'Admin dashboard to manage products and orders',
        'SEO-optimized product and landing pages'
      ],
      challenges: [
        'Designing a luxurious and intuitive interface',
        'Handling dynamic product data with filters and reviews',
        'Integrating a secure and localized payment system'
      ],
      learnings: [
        'Advanced filtering and product search techniques',
        'E-commerce user experience optimization',
        'Secure payment gateway integration (Tap, Stripe, etc.)'
      ],
      images: [
        { alt: 'Sentora Landing Page', caption: 'Elegant homepage showcasing featured perfumes' },
        { alt: 'Admin Dashboard', caption: 'Manage inventory, orders, and customer reviews' },
        { alt: 'Mobile View', caption: 'Fully optimized mobile shopping experience' }
      ]
    },
    ar: {
      title: 'Sentora – متجر العطور الفاخرة',
      description: 'منصة تجارة إلكترونية متكاملة لبيع العطور الفاخرة. يقدم متجر Sentora تجربة تسوق سلسة وتصميمًا أنيقًا متجاوبًا مع جميع الأجهزة، مع دعم للتصفية حسب الفئة أو الرائحة، ونظام تقييمات، ولوحة تحكم لإدارة المنتجات والطلبات.',
      shortDescription: 'متجر إلكتروني أنيق للعطور الفاخرة',
      features: [
        'دعم متعدد اللغات (العربية والإنجليزية)',
        'صفحات منتجات بتفاصيل دقيقة عن نوتات العطر',
        'تصميم متجاوب مع جميع الشاشات',
        'دفع إلكتروني آمن وسهل الاستخدام',
        'بحث وتصفية للمنتجات حسب الفئة أو الرائحة',
        'تقييمات وآراء العملاء',
        'لوحة تحكم لإدارة المنتجات والطلبات',
        'تحسين صفحات المنتجات لمحركات البحث'
      ],
      challenges: [
        'تصميم واجهة فاخرة وسهلة الاستخدام',
        'إدارة بيانات المنتجات بطريقة ديناميكية مع التقييمات والتصفية',
        'دمج نظام دفع آمن ومحلي'
      ],
      learnings: [
        'تقنيات متقدمة لتصفية المنتجات والبحث',
        'تحسين تجربة المستخدم في التجارة الإلكترونية',
        'دمج أنظمة الدفع الآمنة مثل Tap أو Stripe'
      ],
      images: [
        { alt: 'الصفحة الرئيسية لمتجر Sentora', caption: 'واجهة أنيقة تعرض العطور المميزة' },
        { alt: 'لوحة التحكم', caption: 'إدارة المنتجات والطلبات والتقييمات' },
        { alt: 'عرض الهاتف', caption: 'تجربة تسوق متكاملة عبر الهاتف' }
      ]
    }
  },

  seo: {
    keywords: ['perfume eCommerce', 'luxury perfumes', 'online perfume store', 'nextjs store', 'sentora perfume'],
    category: 'e-commerce'
  }
},

 {
  id: '4',
  slug: 'daraa-shop',
  status: 'in-progress',
  featured: false,
  priority: 2,
  startDate: '2025-07-01',
  endDate: '2026-1-31',
  lastUpdated: '2025-07-20',

  thumbnail: {
    src: '/images/projects/daraa-shop/daraashop.png',
    alt: 'Daraa Shop Screenshot',
    width: 800,
    height: 600
  },

  images: [
    {
      src: '/images/projects/daraa-shop/daraashop.png',
      alt: 'Daraa Shop Landing Page',
      width: 1200,
      height: 800
    },
    {
      src: '/images/projects/daraa-shop/product.png',
      alt: 'Product Listing View',
      width: 1200,
      height: 800
    },
    {
      src: '/images/projects/daraa-shop/mobile.png',
      alt: 'Mobile View of Daraa Shop',
      width: 400,
      height: 800
    },
    {
      src: '/images/projects/daraa-shop/dashboard.png',
      alt: 'Admin Dashboard Mockup',
      width: 1200,
      height: 800
    }
  ],

  technologies: [
    { name: 'Next.js', category: 'frontend', icon: '/icons/nextjs.png', color: '#fff' },
    { name: 'TypeScript', category: 'frontend', icon: '/icons/typescript.png', color: '#3178C6' },
    { name: 'Tailwind CSS', category: 'frontend', icon: '/icons/tailwind.png', color: '#06B6D4' },
    { name: 'MongoDB', category: 'database', icon: '/icons/mongodb.png', color: '#599636' },
    { name: 'Node.js', category: 'backend', icon: '/icons/nodejs.png', color: '#599636' }
  ],

  links: [
    {
      type: 'demo',
      url: '',
      label: 'Coming Soon'
    },
    {
      type: 'github',
      url: 'https://github.com/yourusername/daraa-shop',
      label: 'Source Code'
    }
  ],

  translations: {
    en: {
      title: 'Daraa Shop – Local Syrian Online Store',
      description: 'Daraa Shop is a Syrian eCommerce platform under development, aiming to provide local residents with easy access to various products including perfumes, clothing, electronics, and more. The platform is being designed with mobile-first responsiveness, Arabic language support, and future integration with local payment systems.',
      shortDescription: 'Online store serving southern Syria – under construction',
      features: [
        'Mobile-first responsive design',
        'Arabic language interface',
        'Simple and intuitive product pages',
        'Product filtering and categories',
        'Admin dashboard for managing inventory (in progress)',
        'Future integration with local Syrian payment methods'
      ],
      challenges: [
        'Supporting local Syrian infrastructure and internet constraints',
        'Planning for payment and delivery systems without global services'
      ],
      learnings: [
        'Building scalable eCommerce for local markets',
        'Designing lightweight UI for low-bandwidth areas',
        'Preparing infrastructure for offline order tracking'
      ],
      images: [
        { alt: 'Daraa Shop Landing Page', caption: 'Homepage introducing the platform and offers' },
        { alt: 'Product Listing View', caption: 'Preview of categories and product layout' },
        { alt: 'Mobile View of Daraa Shop', caption: 'Responsive design tailored for mobile users' }
      ]
    },
    ar: {
      title: 'درعا شوب – متجر إلكتروني سوري محلي',
      description: 'درعا شوب هو منصة تجارة إلكترونية قيد التطوير تستهدف سكان الجنوب السوري، وتتيح لهم الوصول إلى منتجات متنوعة مثل العطور والملابس والإلكترونيات وغيرها. يتم تطوير الموقع بتصميم متجاوب مع الجوال ودعم اللغة العربية، مع خطط مستقبلية لدمج طرق الدفع المحلية.',
      shortDescription: 'متجر إلكتروني يخدم الجنوب السوري – قيد الإنشاء',
      features: [
        'تصميم متجاوب يركز على الجوال',
        'واجهة مستخدم باللغة العربية',
        'صفحات منتجات بسيطة وسهلة التصفح',
        'نظام تصفية وتنظيم المنتجات حسب الفئات',
        'لوحة تحكم لإدارة المنتجات (قيد التطوير)',
        'خطط مستقبلية لدمج بوابات دفع محلية داخل سوريا'
      ],
      challenges: [
        'دعم البنية التحتية المحلية والاتصال المحدود بالإنترنت',
        'تخطيط أنظمة الدفع والتوصيل بدون الاعتماد على خدمات عالمية'
      ],
      learnings: [
        'بناء متجر إلكتروني قابل للتوسع في بيئة محلية',
        'تصميم واجهة خفيفة ومناسبة للاتصال الضعيف',
        'التحضير لأنظمة تتبع الطلبات حتى دون اتصال مباشر'
      ],
      images: [
        { alt: 'الصفحة الرئيسية لمتجر درعا شوب', caption: 'واجهة الموقع وعرض العروض والمنتجات' },
        { alt: 'عرض المنتجات', caption: 'طريقة عرض المنتجات والفئات' },
        { alt: 'عرض الهاتف المحمول', caption: 'تصميم متجاوب يناسب مستخدمي الجوال' }
      ]
    }
  },

  seo: {
    keywords: ['متجر سوري', 'درعا', 'تجارة إلكترونية سوريا', 'ecommerce syria', 'daraa shop', 'متجر درعا'],
    category: 'e-commerce'
  }
},

];

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter(project => project.featured)
    .sort((a, b) => a.priority - b.priority);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects
    .filter(project => project.seo.category === category)
    .sort((a, b) => a.priority - b.priority);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => a.priority - b.priority);
}
