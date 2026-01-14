"use client";

import { LanguageSwitcher } from "../common/LanguageSwitcher";
import { ThemeToggle } from "../common/ThemeToggle";
import Image from "next/image";
import { Menu } from "antd";
import { useRouter } from "next/navigation";

export function HeaderLanding() {
    const router = useRouter();
    return (
        <header className="flex items-center sticky top-0 z-50 gap-6 justify-center max-w-7xl mx-auto py-2">
            <div className="flex items-center justify-center ">
                <Image src="/LogoSun.svg" alt="Logo" width={150} height={50} />
            </div>
            <Menu
                mode="horizontal"
                className="w-full !border-none text-lg font-medium !bg-transparent"
                items={[
                    { label: "Home", key: "home", onClick: () => router.push("/") },
                    { label: "About", key: "about", onClick: () => router.push("/about") },
                    { label: "Contact", key: "contact", onClick: () => router.push("/contact") },
                ]}
            />
            <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
            </div>
        </header>
    );
}