"use client";
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
import { themesData } from "@/constants/thems";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react";
import { Earth } from "lucide-react";
const Footer = () => {
  const {setTheme} = useTheme()
  const [theme, setThemeState] = useState<string>("")
  const updateTheme = (theme: string) => {
    setThemeState(theme)
    setTheme(theme)
  }

  useEffect(() => {
    setThemeState(localStorage.getItem("theme") || "system")
  }, [])
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-t md:px-0 border-neutral-200 dark:border-secondary flex items-center justify-between">
      <div>
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-200">
          Made with ❤️ - {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex flex-col-reverse items-start md:flex-row md:items-center gap-4">
        <div className="rounded-full flex items-center space-x-2 border border-zinc-200 dark:border-zinc-700 p-1">
          {themesData.map((th) => (
            <Button onClick={() => updateTheme(th.name)}
              size={"icon"}
              key={th.name}
              variant={"ghost"}
              className={cn("text-zinc-500 rounded-full bg-transparent hover:bg-transparent px-0 py-0 p-1", theme && th.name === theme && "bg-zinc-100 hover:bg-zinc-100 text-primary dark:bg-zinc-700 dark:hover:bg-zinc-700")}
            >
              <th.icon className="w-4 h-4" />
            </Button>
          ))}
        </div>
        <Select defaultValue="EN">
          <SelectTrigger className="group text-zinc-500 w-[134px] h-10 hover:text-zinc-700">
            <div className="flex items-center">
              <Earth className="w-4 h-4 mr-2 text-zinc-500 group-hover:text-zinc-700" />
              <SelectValue placeholder="Select a language" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Languages</SelectLabel>
              <SelectItem value="EN">English</SelectItem>
              <SelectItem disabled value="PT">Portugues(soon)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}


export default Footer;


