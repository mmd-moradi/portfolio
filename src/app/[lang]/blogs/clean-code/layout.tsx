import { BlogPageLayout } from "@/components/blog-page-layout";
import { enBlogsData, ptBlogsData } from "@/constants/blogs";
import { redirect } from "next/navigation";


export default function BlogLayout({ 
  children,
  params,
 }: { 
  children: React.ReactNode
  params: { lang: string}
 }) {

  const blogsData = params.lang === "pt" ? ptBlogsData : enBlogsData;
  const blog = blogsData.find((blog) => blog.slug === "clean-code");
  if (!blog) {
    return redirect("/blogs");
  }
  return (
    <BlogPageLayout meta={blog} >
      {children}
    </BlogPageLayout>
  )
}



