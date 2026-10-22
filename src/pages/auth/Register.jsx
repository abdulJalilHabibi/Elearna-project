import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reveal from "@/ui/Reveal";

const bgImage =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66e17d14fc5b26abda6ac749_Membership%20Background.webp";
const logoUrl =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    acceptPrivacy: false,
    acceptCommunications: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/log-in");
      }, 1500);
    }, 700);
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#0F252A] bg-cover bg-center bg-no-repeat px-4 py-6 sm:py-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Top Header with Logo */}
      <header className="mx-auto flex w-full max-w-[1084px] items-center justify-center sm:justify-start">
        <Link to="/" aria-label="Elearna Home">
          <img
            src={logoUrl}
            alt="Elearna"
            width={105}
            height={26}
            className="h-[26px] w-[105px] object-contain"
          />
        </Link>
      </header>

      {/* Center Auth Form Block */}
      <main className="my-auto flex w-full justify-center py-6 sm:py-8">
        <Reveal delay={80} className="w-full max-w-[470px]">
          {/* Form Top Title */}
          <div className="mb-5 flex flex-col items-center text-center">
            <h1 className="text-[28px] font-bold tracking-[-1px] text-white sm:text-[35px]">
              Sign up
            </h1>
            <p className="mt-1 text-[14px] text-white/90 sm:text-[15px]">
              More then <span className="font-semibold text-white">50k students</span> join with us!
            </p>
          </div>

          {/* Form Card Box */}
          <div className="rounded-[4px] bg-[#20383E] p-6 shadow-[0_60px_120px_#091416] sm:p-10 sm:pb-11">
            {success ? (
              <div className="py-6 text-center text-white">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1BE3A3] text-heading">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold">Account created!</h3>
                <p className="mt-1 text-[14px] text-white/70">
                  Redirecting to log in...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col">
                {/* Email Address */}
                <div className="mb-4">
                  <label
                    htmlFor="signup-email"
                    className="mb-2 block text-left text-[14px] font-normal text-[#EFF6F8]"
                  >
                    Email address
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder=""
                    className="h-[48px] w-full rounded-[4px] border border-transparent bg-[#eff6f81c] px-5 text-[15px] text-white transition-colors placeholder:text-white/40 focus:border-[#ffb606] focus:outline-none sm:h-[50px] sm:px-7"
                  />
                </div>

                {/* Name */}
                <div className="mb-4">
                  <label
                    htmlFor="signup-name"
                    className="mb-2 block text-left text-[14px] font-normal text-[#EFF6F8]"
                  >
                    Name
                  </label>
                  <input
                    id="signup-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder=""
                    className="h-[48px] w-full rounded-[4px] border border-transparent bg-[#eff6f81c] px-5 text-[15px] text-white transition-colors placeholder:text-white/40 focus:border-[#ffb606] focus:outline-none sm:h-[50px] sm:px-7"
                  />
                </div>

                {/* Password */}
                <div className="mb-5">
                  <label
                    htmlFor="signup-password"
                    className="mb-2 block text-left text-[14px] font-normal text-[#EFF6F8]"
                  >
                    Password
                  </label>
                  <input
                    id="signup-password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder=""
                    className="h-[48px] w-full rounded-[4px] border border-transparent bg-[#eff6f81c] px-5 text-[15px] text-white transition-colors placeholder:text-white/40 focus:border-[#ffb606] focus:outline-none sm:h-[50px] sm:px-7"
                  />
                </div>

                {/* Checkbox 1: Terms */}
                <label className="mb-3 flex cursor-pointer items-start gap-2.5 select-none text-left">
                  <input
                    type="checkbox"
                    required
                    checked={formData.acceptPrivacy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        acceptPrivacy: e.target.checked,
                      })
                    }
                    className="mt-1 h-4 w-4 shrink-0 rounded accent-[#ffb606]"
                  />
                  <span className="text-[13px] leading-snug text-white/70 sm:text-[14px]">
                    By creating an account, I agree to this website's{" "}
                    <Link
                      to="/contact"
                      className="text-white underline transition-colors hover:text-[#ffb606]"
                    >
                      privacy policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/contact"
                      className="text-white underline transition-colors hover:text-[#ffb606]"
                    >
                      terms of service
                    </Link>
                  </span>
                </label>

                {/* Checkbox 2: Marketing */}
                <label className="mb-6 flex cursor-pointer items-start gap-2.5 select-none text-left">
                  <input
                    type="checkbox"
                    checked={formData.acceptCommunications}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        acceptCommunications: e.target.checked,
                      })
                    }
                    className="mt-1 h-4 w-4 shrink-0 rounded accent-[#ffb606]"
                  />
                  <span className="text-[13px] leading-snug text-white/70 sm:text-[14px]">
                    I consent to receive marketing emails.
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[4px] bg-[#ffb606] font-heading text-[16px] font-semibold text-[#0F252A] shadow-sm transition-colors duration-300 hover:bg-[#e0a005] disabled:opacity-60"
                >
                  {loading ? "Please wait..." : "Sign Up"}
                </button>

                {/* Footer Switch Link */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-[14px] sm:text-[15px]">
                  <span className="text-[#eff6f8b3]">
                    Already have an account?
                  </span>
                  <Link
                    to="/log-in"
                    className="text-white underline transition-colors hover:text-[#ffb606]"
                  >
                    Log In
                  </Link>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </main>

      {/* Bottom Minimal Footer */}
      <footer className="mx-auto w-full max-w-[1084px] border-t border-white/10 pt-5 pb-2">
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[13px] text-white/70">
            <Link to="/about" className="transition-colors hover:text-white">
              Style guide
            </Link>
            <Link to="/courses" className="transition-colors hover:text-white">
              Password protected
            </Link>
            <Link to="/" className="transition-colors hover:text-white">
              404
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              License
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[13px] text-white/70">
            <span>
              Design by{" "}
              <a
                href="https://www.radianttemplates.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#ffb606]"
              >
                Radiant Templates
              </a>
            </span>
            <span>
              Powered by{" "}
              <a
                href="https://webflow.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#ffb606]"
              >
                webflow
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
