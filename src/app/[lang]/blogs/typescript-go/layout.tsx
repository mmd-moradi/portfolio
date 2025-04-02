import { BlogPageLayout } from "@/components/blog-page-layout";
import { enBlogsData, ptBlogsData } from "@/constants/blogs";
import { Metadata } from "next";
import { redirect } from "next/navigation";



export const metadata: Metadata = {
  title: "TypeScript's Move to Go: Why It Happened and What It Means",
  description: "TypeScript's new compiler is 10x faster thanks to Go. But why did they choose Go? This article explores the reasoning behind the switch and what it means for developers.",
  keywords: ["typescript", "Go", "Golang", "compiler", "performance"],
  authors: {
    name: "Mohammad Moradi"
  },
  openGraph: {
    type: "article",
    authors: ["Mohammad Moradi"],
    publishedTime: "2025-04-01T08:00:00.000Z",
  }

}

export default function BlogLayout({ 
  children,
  params,
 }: { 
  children: React.ReactNode
  params: { lang: string}
 }) {

  const blogsData = params.lang === "pt" ? ptBlogsData : enBlogsData;
  const blog = blogsData.find((blog) => blog.slug === "typescript-go");
  if (!blog) {
    return redirect("/blogs");
  }
  return (
    <BlogPageLayout meta={blog} >
      {children}
    </BlogPageLayout>
  )
}



