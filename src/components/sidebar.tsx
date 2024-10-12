"use client";

import { cn, isMobile } from "@/lib/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "./ui/button";
import { ChevronRightIcon, PanelLeftOpen } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { Heading } from "./ui/heading";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);
  const router = useRouter();
  return (
    <>
      <AnimatePresence>
      {
        open && (
          <motion.aside
            initial= {{ x: -300}}
            animate={{ x: 0}}
            transition={{ duration: 0.2, ease: "linear"}}
            exit={{ x: -300}}
            className="left-0 px-6 py-10 z-[100] h-screen max-w-[16rem] bg-neutral-100 lg:w-fit flex flex-col justify-between lg:relative"
          >
            <div className="flex-1 overflow-y-scroll custom-scrollbar">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <Button onClick={() => router.push("/resume")} className="rounded-full shadow-md w-[148px]">
              <span className="text-sm font-semibold text-white">Read resume</span>
              <ChevronRightIcon className="ml-auto w-4 h-4 text-white" />
            </Button>
          </motion.aside>
        )}
      </AnimatePresence>
      <Button onClick={() => setOpen(!open)}
        variant={"outline"}
        size={"sm"}
        className="fixed bottom-4 right-4 backdrop-blur-sm z-50 lg:hidden"
        >
          <PanelLeftOpen className="h-4 w-4 text-zinc-500" />
      </Button>
    </>
  )
}


const SidebarHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex space-x-2">
        <Image
          src="/mmd-avatar.png"
          alt="avatar"
          width="40"
          height="41"
          className="object-cover object-top rounded-full max-h-[41px]"
        />
        <div className="flex flex-col text-sm">
          <p className="font-bold text-primary">
            Mohammad Moradi
          </p>
          <p className="font-light text-slate-800">
            Fullstack Dev
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-primary">
          Latest Visit:
        </span>
        <div className="rounded-full w-fit bg-primary border border-gray-800 shadow-md backdrop-blur-sm px-4 py-1 flex items-center gap-2">
         <span>🇫🇷</span>
         <span className="text-xs font-medium text-white">France, Paris</span>
        </div>
      </div>
    </div>
  )
}

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100] pr-8">
      {navlinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={cn(
            "text-zinc-500 hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={cn(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading className="text-sm md:text-sm font-semibold lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank" rel="noopener noreferrer"
          className={cn(
            "text-zinc-500 hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={cn(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

