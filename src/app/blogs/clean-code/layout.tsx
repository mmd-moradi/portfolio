import { BlogPageLayout } from "@/components/blog-page-layout";
import { blogsData } from "@/constants/blogs";
import { redirect } from "next/navigation";




export default function BlogLayout({ children }: { children: React.ReactNode }) {
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



