"use client";

import { Button } from "antd";
import { useLocale } from "next-intl";
import { locales, type Locale } from "@/libs/i18n/config";
import { useRouter } from "next/navigation";

const languageFlags: Record<Locale, string> = {
  vi: "🇻🇳",
  en: "🇬🇧",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();

  // Get the other locale (toggle)
  const toggleLocale = locales.find((loc) => loc !== locale) as Locale;

  const handleLanguageChange = () => {
    document.cookie = `NEXT_LOCALE=${toggleLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  return (
    <Button
      type="text"
      onClick={handleLanguageChange}
      size="large"
    >
      {languageFlags[toggleLocale]}
    </Button>
  );
}

