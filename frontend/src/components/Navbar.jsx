import { useState, useRef, useEffect } from "react";
import { FaOpencart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { logout } from "../redux/loginSlice";
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Pricing", to: "#pricing" },
  { label: "Docs", to: "#docs" },
  { label: "About", to: "/Aboutus" },
];

const PRODUCTS = [
  { name: "Analytics", desc: "Track how people use your site", href: "#analytics" },
  { name: "Forms", desc: "Collect and route responses", href: "#forms" },
  { name: "Scheduler", desc: "Let visitors book time with you", href: "#scheduler" },
];

function Chevron({ open }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the desktop dropdown on outside click or Escape
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setProductsOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkClass = (label) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
      active === label
        ? "bg-teal-50 text-teal-800"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;
    
    const Dispatch=useDispatch()
    const nevigate=useNavigate()
  const cart=useSelector((state)=>state.cart.items)
  const { token, role } = useSelector((state) => state.login);
  const handellogout = () => {
    Dispatch(logout());
    nevigate("/login", { replace: true });
  };


  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main"
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setActive("Home")}
          className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-sm font-bold text-white">
            L
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Loomly
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.slice(0, 1).map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setActive(l.label)}
              aria-current={active === l.label ? "page" : undefined}
              className={linkClass(l.label)}
            >
              {l.label}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProductsOpen((o) => !o)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Products
              <Chevron open={productsOpen} />
            </button>

            {productsOpen && (
              <div className="absolute left-0 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                {PRODUCTS.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    onClick={() => setProductsOpen(false)}
                    className="block rounded-lg px-3 py-2 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                  >
                    <span className="block text-sm font-medium text-slate-900">
                      {p.name}
                    </span>
                    <span className="block text-sm text-slate-500">{p.desc}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.slice(1).map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setActive(l.label)}
              aria-current={active === l.label ? "page" : undefined}
              className={linkClass(l.label)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          {role === "admin" && (
            <Link
              to="/Admin"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              Admin
            </Link>
          )}
          {/* ///login button */}
          {token ? (
              <>
                <Link
                  to="/cart"
                  className="flex rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  <FaOpencart className="text-3xl" />
                  <p className="flex h-5 w-5 items-center justify-center rounded-4xl bg-red-600">{cart.length}</p>
                </Link>
                <Link
                  to="/profile"
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  Profile
                </Link>
                <button
                  onClick={handellogout}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  Logout
                </button>
              </>
          ) : (
              <><Link
            to='/login'
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            Log in
          </Link>
            <Link
            to='/signup'
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            Signup
          </Link>
            </>
          )}
          

       
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => {
                  setActive(l.label);
                  setMenuOpen(false);
                }}
                aria-current={active === l.label ? "page" : undefined}
                className={`block ${linkClass(l.label)}`}
              >
                {l.label}
              </Link>
            ))}

            <p className="px-3 pt-3 text-xs font-medium text-slate-500">Products</p>
            {PRODUCTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                {p.name}
              </a>
            ))}
          </div>

          <div className="flex gap-2 border-t border-slate-200 px-4 py-3">
            {role === "admin" && (
              <Link
                to="/Admin"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-md border border-slate-300 px-4 py-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Admin
              </Link>
            )}
            {token ? (
              <>
                <Link
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-md bg-teal-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-teal-800"
                >
                  Cart ({cart.length})
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-md border border-slate-300 px-4 py-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Profile
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    handellogout();
                    setMenuOpen(false);
                      window.location.reload();
localStorage.clear();
  window.location.href = "/";
                  }}
                  className="flex-1 rounded-md border border-slate-300 px-4 py-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-md border border-slate-300 px-4 py-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-md bg-teal-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-teal-800"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}