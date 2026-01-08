import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations();
    return (
        <div>
            <LanguageSwitcher />
            <ThemeToggle />
            <h1>{t("app_title")}</h1>
        </div>
    );
}