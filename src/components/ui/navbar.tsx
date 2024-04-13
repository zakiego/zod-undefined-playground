"use client";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export const Navbar = () => {
  const link = [
    {
      href: "/",
      label: "🙂 Normal",
    },
    {
      href: "/without-zod",
      label: "❌ Undefined: without zod",
    },
    {
      href: "/with-zod",
      label: "🔒 Undefined: with zod",
    },
  ];

  const pathname = usePathname();

  return (
    <Suspense>
      <div className="pb-4">
        <NavigationMenu>
          <NavigationMenuList>
            {link.map((item, index) => {
              const isCurrent = item.href === pathname;

              return (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} passHref legacyBehavior>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={isCurrent}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Suspense>
  );
};
