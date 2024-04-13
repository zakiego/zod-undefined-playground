"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
      code: "https://github.com/zakiego/zod-undefined-playground/blob/main/src/app/page.tsx",
      codeLabel: "page.tsx",
    },
    {
      href: "/without-zod",
      label: "❌ Undefined: without zod",
      code: "https://github.com/zakiego/zod-undefined-playground/blob/main/src/app/without-zod/page.tsx",
      codeLabel: "without-zod/page.tsx",
    },
    {
      href: "/with-zod",
      label: "🔒 Undefined: with zod",
      code: "https://github.com/zakiego/zod-undefined-playground/blob/main/src/app/with-zod/page.tsx",
      codeLabel: "with-zod/page.tsx",
    },
  ];

  const pathname = usePathname();

  const currentLink = link.find((item) => item.href === pathname);

  return (
    <Suspense>
      <Card className="mb-4">
        <CardContent className="pt-2 pb-2 text-xs">
          <p>
            Read more about this issue on{" "}
            <a
              href="https://zakiego.com/articles/seni-menerima-data"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-600 hover:underline font-semibold"
            >
              Seni Menerima Data dari Backend, untuk Frontend yang ingin Tidur
              Nyenyak
            </a>
          </p>
          <p className="mt-1">
            Check the code on{" "}
            <a
              href={currentLink?.code}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-600 hover:underline font-semibold"
            >
              {currentLink?.codeLabel}
            </a>
          </p>
        </CardContent>
      </Card>

      <div className="pb-4">
        <NavigationMenu>
          <NavigationMenuList className="block md:flex md:space-x-4 space-y-2 space-x-0 md:space-y-0">
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
