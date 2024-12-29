"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { navigation } from "@/lib/constants";

interface MobileMenuProps {
  toggleQr: () => void;
  isQrVisible: boolean;
}

export function MobileMenu({ toggleQr, isQrVisible }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Menu</SheetTitle>
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
  );
}