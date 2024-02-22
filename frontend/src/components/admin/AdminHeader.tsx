import Link from "next/link";
import ActiveLink from "./ActiveLink";

export default function AdminHeader() {
  const navLinks = [
    { label: "Add New Product", href: "/admin/newProduct" },
    
  ];

  return (
    <header className="h-full b p-20 bg-[#161B21]">
      <Link href={"/admin"}>
        <h1 className="text-5xl text-purple-700 mb-10">BackOffice</h1>
      </Link>

      <div className="flex flex-col">
        {navLinks.map((l) => (
          <ActiveLink
            key={l.href}
            href={l.href}
            className="p-2 rounded-lg bg-black text-purple-700"
            activeClassName="bg-slate-400"
          >
            {l.label}
          </ActiveLink>
        ))}
      </div>
    </header>
  );
}