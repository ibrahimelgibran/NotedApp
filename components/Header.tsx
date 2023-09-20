"use client";

import { Theme, BackButton } from "@components";
import { User } from "@utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ user }: { user: User }) => {
  const pathname = usePathname();

  const initialName = user.name
    .split(" ")
    .slice(0, 2)
    .map((word: string) => word.charAt(0));

  const hideProfile = () => pathname === "/profile" || pathname === "/auth";

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {pathname !== "/" ? <BackButton /> : null}
        <a href="/">
          <h1>Noted App</h1>
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Theme user={user} />
        {!hideProfile() ? (
          <Link href="/profile">
            <div className="w-8 aspect-square p-1 grid place-items-center bg-profile rounded-full text-xs text-gray-950 font-bold tracking-wider select-none cursor-pointer">
              <span>{initialName}</span>
            </div>
          </Link>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
