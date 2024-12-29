"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { QrCode } from "@/components/qr-code";

const Navbar = () => {
  const [isQrVisible, setIsQrVisible] = useState(false);

  const toggleQr = () => setIsQrVisible(!isQrVisible);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Notre Solution", href: "/#solution" },
    { name: "Automatisation", href: "/#automatisation" },
    { name: "Tout sur le Padel", href: "/tout-sur-le-padel" },
    { name: "Padel à Grisolles", href: "/grisolles" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://raw.githubusercontent.com/Olive06/village-padel/main/logo_old.png"
                alt="Village Padel"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#0A3778] px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              onClick={toggleQr}
              variant="default"
              className="bg-[#0A3778] hover:bg-[#0A3778]/90"
            >
              {isQrVisible ? "Scannez-moi" : "Télécharger notre application"}
            </Button>
          </div>

          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-[#0A3778] px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    onClick={toggleQr}
                    variant="default"
                    className="bg-[#0A3778] hover:bg-[#0A3778]/90"
                  >
                    {isQrVisible ? "Scannez-moi" : "Télécharger notre application"}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      {isQrVisible && <QrCode />}
    </header>
  );
}

export default Navbar;