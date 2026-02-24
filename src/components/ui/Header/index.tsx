import { NAV_LINKS } from "@/constants/links";

export default function Header() {
  return (
    <header className="fixed w-4/5 flex items-center justify-self-center justify-between px-20 py-4 my-6 border border-main rounded-sm shadow-normal">
      <nav className="flex items-center gap-5">
        {NAV_LINKS.map((anchor) => (
          <a
            href={anchor.link}
            className="text-base font-bold font-body uppercase leading-body text-text px-3 py-2 rounded-sm transition-shadow ease-in-out duration-300 hover:shadow-anchor">
            {anchor.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
