"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Adjust import according to your structure
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Yatin Blog</Link>
        </div>

        {/* Links + Buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="hover:text-gray-400 px-3 py-2">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 px-3 py-2">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-400 px-3 py-2">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-400 px-3 py-2">
            Contact
          </Link>

          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="mx-1">More</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/profile" className="hover:text-gray-400">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings" className="hover:text-gray-400">
                  Settings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="mx-1" variant="outline">
            SignUp
          </Button>
          <Button className="mx-1" variant="outline">
            Login
          </Button>
        </div>

        {/* Hamburger Icon + Sheet for Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <div className="text-black cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              {/* Mobile Menu Links */}
              <div className="flex flex-col items-start space-y-4 mt-4">
                <Link href="/" className="hover:text-gray-400 px-3 py-2">
                  Home
                </Link>
                <Link href="/about" className="hover:text-gray-400 px-3 py-2">
                  About
                </Link>
                <Link href="/blog" className="hover:text-gray-400 px-3 py-2">
                  Blog
                </Link>
                <Link href="/contact" className="hover:text-gray-400 px-3 py-2">
                  Contact
                </Link>
                <Button className="mx-1 w-full" variant="outline">
                  SignUp
                </Button>
                <Button className="mx-1 w-full" variant="outline">
                  Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
