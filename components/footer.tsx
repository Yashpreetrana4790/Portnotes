import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon, HexagonIcon, TriangleIcon } from "lucide-react";
import { NavMenu } from "./navbar";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
        <NavMenu />
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://in.linkedin.com/in/yashpreetrana"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Linkdin
      </Link>
      <Link
        href="https://github.com/Yashpreetrana4790"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Twitter
      </Link>
    </>
  );
}
