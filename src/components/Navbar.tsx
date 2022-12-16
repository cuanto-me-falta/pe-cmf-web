import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden md:block">
      <nav>
        <ul>
          <li className="text-4xl">
            <Link href={"#"}>Más</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
