import Link from "next/link";
import { ComponentProps } from "react";

function NavigationLink(props: ComponentProps<typeof Link>) {
  return (
    <Link {...props} className="group">
      <span>{props.children}</span>
      <div className="h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export function NavigationPanel() {
  return (
    <div className="fixed top-1/2 left-0 hidden -translate-y-1/2 items-center justify-center gap-4 p-4 sm:flex">
      <div className="flex flex-col items-start gap-4">
        <NavigationLink href="#about">About</NavigationLink>
        <NavigationLink href="#music">Music</NavigationLink>
        <NavigationLink href="#experience">Experience</NavigationLink>
        <NavigationLink href="#contact">Contact</NavigationLink>
      </div>
    </div>
  );
}
