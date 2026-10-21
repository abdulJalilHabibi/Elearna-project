import React from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import Container from "@/ui/Container";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 z-30 w-full py-6 text-white">
      <Container className="flex items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-10 text-[16px] font-normal md:flex lg:gap-14">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors duration-200 hover:text-brand ${
                  active ? "text-brand" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <img src="/bag.png" alt="cart" className="h-5 w-auto cursor-pointer" />
          <button className="cursor-pointer text-[15px] text-white transition-colors hover:text-brand sm:text-[17px]">
            Login
          </button>
          <div className="h-4 w-px bg-white/20" />
          <button className="cursor-pointer text-[15px] text-white transition-colors hover:text-brand sm:text-[17px]">
            Register
          </button>
        </div>
      </Container>
    </nav>
  );
}
