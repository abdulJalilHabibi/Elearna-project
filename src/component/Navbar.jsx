import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import Container from "@/ui/Container";
import { contact, cartIcon } from "../pages/Home/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Courses", to: "/courses" },
    { label: "Pricing", to: "/pricing" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <header className="absolute top-0 lg:px-10 left-0 z-40 w-full text-white">
      {/* Top Bar - Only on Home Page */}
      {isHome && (
        <div className="hidden border-b border-white/15 py-2.5 text-[14px] lg:block">
          <Container className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-white/80">
              <span>Are you interested in online coaching?</span>
              <Link
                to="/contact"
                className="font-medium text-white underline transition-colors hover:text-brand"
              >
                Contact us.
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${contact.email}`}
                className="text-white/90 transition-colors hover:text-brand"
              >
                {contact.email}
              </a>
              <span className="h-3.5 w-px bg-white/20" />
              <a
                href={contact.phoneHref}
                className="text-white/90 transition-colors hover:text-brand"
              >
                Call: {contact.phone}
              </a>
            </div>
          </Container>
        </div>
      )}

      {/* Main Navbar */}
      <div className="py-4 sm:py-5 lg:py-6">
        <Container className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 text-[16px] font-normal lg:flex xl:gap-12">
            {links.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors duration-200 hover:text-brand ${
                    active ? "text-brand font-medium" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side items */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              aria-label="Cart"
              className="relative flex cursor-pointer items-center"
            >
              <img
                src={cartIcon || "/bag.png"}
                alt="cart"
                className="h-5 w-auto"
              />
              <span className="-top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-heading">
                0
              </span>
            </button>

            <div className="hidden items-center gap-4 sm:flex lg:gap-5">
              <Link
                to="/login"
                className="cursor-pointer text-[15px] text-white transition-colors hover:text-brand lg:text-[16px]"
              >
                Login
              </Link>
              <div className="h-4 w-px bg-white/25" />
              <Link
                to="/register"
                className="cursor-pointer text-[15px] text-white transition-colors hover:text-brand lg:text-[16px]"
              >
                Register
              </Link>
            </div>

            {/* Mobile/Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-white/20 text-white transition-colors hover:border-brand hover:text-brand lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                    mobileMenuOpen
                      ? "translate-y-[7px] rotate-45 !bg-brand"
                      : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                    mobileMenuOpen
                      ? "-translate-y-[7px] -rotate-45 !bg-brand"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </Container>

        {/* Mobile & Tablet Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Container className="pt-4">
            <div className="rounded-xl border border-white/15 bg-[#0f252a]/98 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col gap-1.5 text-[16px] font-medium">
                {links.map((link) => {
                  const active = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center justify-between rounded-lg px-4 py-2.5 transition-colors ${
                        active
                          ? "bg-white/10 text-brand font-semibold"
                          : "text-white/90 hover:bg-white/5 hover:text-brand"
                      }`}
                    >
                      <span>{link.label}</span>
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 sm:hidden">
                <div className="flex items-center gap-3">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 rounded border border-white/20 py-2.5 text-center text-[14px] font-medium text-white transition-colors hover:bg-white/10 hover:text-brand"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 rounded bg-brand py-2.5 text-center text-[14px] font-semibold text-heading transition-colors hover:bg-[#e5a305]"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
