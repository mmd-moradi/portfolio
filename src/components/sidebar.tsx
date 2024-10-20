"use client";
import { cn, isMobile } from "@/lib/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "./ui/button";
import { ChevronRightIcon, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Heading } from "./ui/heading";
import { Book, Bot, Code2, Mail, TerminalSquare } from "lucide-react";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaSquareXTwitter } from "react-icons/fa6";
import flagMap from "@/utils/flag-maps";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarType } from "@/types/sidebar";
import { Locale } from "@/i18n-config";

type SidebarProps = {
  geoData?: RequestCookie;
  sidebarData: SidebarType;
  locale: Locale;
}


const iconMap = {
  TerminalSquare: TerminalSquare,
  Bot: Bot,
  Code2: Code2,
  Book: Book,
  Mail: Mail,
  InstagramLogoIcon: InstagramLogoIcon,
  LinkedInLogoIcon: LinkedInLogoIcon,
  FaSquareXTwitter: FaSquareXTwitter,
};

export const Sidebar = ({geoData, sidebarData, locale}: SidebarProps) => {
  const [open, setOpen] = useState(isMobile() ? false : true);
  const router = useRouter();
  const resumeBtnOnclick = () => {
    router.push(`${locale}/resume`)

    if (isMobile()) {
      setOpen(false)
    } 
  }
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
            className="left-0 px-6 py-12 md:py-10 z-[100] h-screen max-w-[16rem] bg-secondary fixed dark:bg-zinc-900 lg:w-fit flex flex-col justify-between lg:relative"
          >
            <ScrollArea className="flex-1 pr-4">
              <SidebarHeader sidebarData={sidebarData} geoData={geoData} />
              <Navigation sidebarData={sidebarData} setOpen={setOpen} />
            </ScrollArea>
            <Button 
              onClick={resumeBtnOnclick}
              className="rounded-full shadow-md w-[180px] z[110] mb-16 md:mb-4"
            >
              <span className="text-sm font-semibold text-primary-foreground">{sidebarData.resumeButton.label}</span>
              <ChevronRightIcon className="ml-auto w-4 h-4 text-primary-foreground" />
            </Button>
          </motion.aside>
        )}
      </AnimatePresence>
      <Button onClick={() => setOpen(!open)}
        variant={"secondary"}
        className="fixed bottom-40 right-4 w-12 h-12 backdrop-blur-sm shadow-sm z-50 lg:hidden rounded-full"
        >
          {open ? (<PanelLeftClose className="h-5 w-5" />):(<PanelLeftOpen className="h-5 w-5" />)}
      </Button>
    </>
  )
}


const SidebarHeader = ({geoData, sidebarData}: Omit<SidebarProps, "locale">) => {
  const parsedGeo = JSON.parse(geoData?.value || "{}")
  const flag = flagMap.get(parsedGeo.country)
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Image
          src={sidebarData.heading.avatarSrc}
          alt="avatar"
          width="48"
          height="48"
          quality={100}
          className="object-contain object-top rounded-full border-2 border-sky-500 dark:border-emerald-500"
        />
        <div className="flex flex-col text-sm">
          <p className="font-bold">
            {sidebarData.heading.name}
          </p>
          <p className="font-light">
            {sidebarData.heading.role}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-primary">
          {sidebarData.heading.latestVisit}
        </span>
        <div className="rounded-full w-fit bg-white/80 border border-gray-200 dark:border-zinc-800 dark:bg-zinc-800 shadow-md backdrop-blur-sm px-4 py-1 flex items-center gap-2">
        {flag &&(
            <Image 
              src={flag}
              alt="flag"
              width={16}
              height={16}
              className="w-4 h-4 object-contain rounded-sm"
            />
        )}
         {parsedGeo && <span className="text-xs font-medium text-foreground">{parsedGeo.country}, {parsedGeo.city}</span>}
        </div>
      </div>
    </div>
  )
}

export const Navigation = ({
  setOpen,
  sidebarData
}: {
  sidebarData: SidebarType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {sidebarData.navlinks.map((link) => {
         const IconComponent = iconMap[link.icon as keyof typeof iconMap];
        return (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={cn(
            "text-zinc-500 hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm w-[120px]",
            isActive(link.href) && "bg-white/70 shadow-lg text-primary dark:bg-zinc-800"
          )}
        >
          {IconComponent && 
            <IconComponent
            className={cn(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500 dark:text-emerald-500"
            )}
          />}
          <span>{link.label}</span>
        </Link>
      )})}

      <Heading className="text-sm md:text-sm font-semibold lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {sidebarData.socials.map((link) => {
        const IconComponent = iconMap[link.icon as keyof typeof iconMap];
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank" rel="noopener noreferrer"
            className={cn(
              "text-zinc-500 hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
            )}
          >
            {IconComponent &&
            <IconComponent
              className={cn(
                "h-4 w-4 flex-shrink-0",
                isActive(link.href) && "text-sky-500"
              )}
            />
            }
            <span>{link.label}</span>
          </Link>
        )
      })}
    </div>
  );
};

