import Link from "next/link";
import ActiveLink from "./ActiveLink";

export default function AdminHeader() {
  const navLinks = [
    { label: "Add New Product", href: "/admin/newProduct" },
    
  ];

  return (
    <header className="h-full b p-20 bg-slate-200">
      <Link href={"/admin"}>
        <h1 className="text-4xl mb-10">BackOffice</h1>
      </Link>

      <div className="flex flex-col">
        {navLinks.map((l) => (
          <ActiveLink
            key={l.href}
            href={l.href}
            className="p-2 rounded-md"
            activeClassName="bg-slate-400"
          >
            {l.label}
          </ActiveLink>
        ))}
      </div>
    </header>
  );
}