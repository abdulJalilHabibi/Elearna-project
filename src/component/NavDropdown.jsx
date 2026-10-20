import { useState } from "react";

function Chevron({ className = "" }) {
  return (
    <svg
      className={`h-3 w-3 ${className}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Desktop: opens on hover. Mobile: toggles on tap (controlled via `mobile`).
export default function NavDropdown({ item, mobile = false }) {
  const [open, setOpen] = useState(false);

  if (mobile) {
    return (
      <div className="border-b border-white/10">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between py-4 text-left text-white"
        >
          {item.label}
          <Chevron
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="flex flex-col pb-3 pl-4">
            {item.children.map((child) => (
              <a
                key={child.label}
                href={child.href}
                className="py-2 text-white/70 hover:text-brand"
              >
                {child.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="group relative">
      <button className="flex cursor-pointer items-center gap-1.5 px-5 pt-[18px] pb-[21px] text-[16px] text-white">
        {item.label}
      </button>
    </div>
  );
}
