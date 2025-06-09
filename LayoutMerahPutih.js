import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function LayoutMerahPutih({ title, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title ? `${title} - Sahabat Kopdes Merah Putih` : "Sahabat Kopdes Merah Putih"}</title>
      </Head>

      <nav className="bg-red-600 text-white shadow-md relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Image src="/logo.png" alt="Logo" width={36} height={36} />
            <span>Sahabat Kopdes</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">Beranda</NavLink>
            <NavLink href="/tentang">Tentang</NavLink>
            <NavLink href="/kontak">Kontak</NavLink>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden px-4 pb-4 space-y-2 bg-red-500"
            >
              <NavLink href="/" onClick={() => setMenuOpen(false)}>Beranda</NavLink>
              <NavLink href="/tentang" onClick={() => setMenuOpen(false)}>Tentang</NavLink>
              <NavLink href="/kontak" onClick={() => setMenuOpen(false)}>Kontak</NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="min-h-screen bg-white text-gray-900 p-6">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-6">{title}</h2>
        <div className="max-w-4xl mx-auto bg-red-50 p-6 rounded-xl shadow-md">
          {children}
        </div>
      </main>

      <footer className="bg-red-700 text-white mt-10 py-4 text-center text-sm">
        © {new Date().getFullYear()} Sahabat Kopdes Merah Putih. Semua Hak Dilindungi.
      </footer>
    </>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="block text-white hover:underline font-medium">
      {children}
    </Link>
  );
}
