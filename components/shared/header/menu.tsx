import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="mr-2 h-4 w-4" /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon className="mr-2 h-4 w-4" /> Sign In
          </Link>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="align-middle">
              <EllipsisVertical />
            </Button>
          </SheetTrigger>

          {/* IMPROVEMENTS: 
              1. Added 'p-6' for breathing room.
              2. Increased 'gap-6' for section spacing.
          */}
          <SheetContent className="flex flex-col items-start p-6 gap-6">
            <div className="space-y-1">
              <SheetTitle className="text-xl font-semibold">Menu</SheetTitle>
              <SheetDescription>
                Access your account and settings.
              </SheetDescription>
            </div>

            {/* Theme Toggle Section */}
            <div className="w-full space-y-3">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Appearance
              </p>
              <ModeToggle />
            </div>

            {/* Navigation Section */}
            <div className="w-full space-y-3">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Main Menu
              </p>

              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start py-6"
                >
                  <Link href="/cart" className="flex items-center text-lg">
                    <ShoppingCart className="mr-4 h-5 w-5" /> Cart
                  </Link>
                </Button>

                <Button asChild className="w-full justify-start py-6">
                  <Link href="/sign-in" className="flex items-center text-lg">
                    <UserIcon className="mr-4 h-5 w-5" /> Sign In
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
