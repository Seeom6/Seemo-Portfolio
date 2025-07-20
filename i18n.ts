import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Handle undefined locale by defaulting to 'en'
  const validLocale = locale || 'en';

  // Validate that the locale parameter is valid
  if (!locales.includes(validLocale as any)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${validLocale}.json`)).default,
    locale: validLocale
  };
});
