import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  // Si no hay locale, usa el default
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'es';
  }
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
