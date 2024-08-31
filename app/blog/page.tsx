import { Button } from "@/components/ui/button";
import { BlogMdxFrontmatter, getAllBlogs } from "@/lib/markdown";
import { formatDate2, stringToDate } from "@/lib/utils";
import { ChevronRightIcon, CircleIcon } from "lucide-react";
import Link from "next/link";

export default async function BlogIndexPage() {
  const blogs = (await getAllBlogs()).sort(
    (a, b) =>
      stringToDate(b.frontmatter.date).getTime() -
      stringToDate(a.frontmatter.date).getTime()
  );



  return (
    <div className="w-full flex  flex-col gap-5 sm:min-h-[91vh] min-h-[88vh] md:pt-6 pt-2">
      <div className="md:mb-14 mb-8 flex flex-col gap-2 ">
        <h1 className="text-3xl font-extrabold">
          The latest blogs of this product
        </h1>
        <p className="text-muted-foreground">
          All the latest blogs and news, straight from the team.
        </p>
      </div>
      <div>
        {blogs.map((blog) => (
          <BlogCard {...blog.frontmatter} slug={blog.slug} key={blog.slug} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({
  date,
  title,
  description,
  slug,
}: BlogMdxFrontmatter & { slug: string }) {
  return (
    <div className="flex flex-col md:flex-row items-start">

      <div className="md:border-l md:pl-14 pb-12 relative">
        <CircleIcon className="w-3.5 h-3.5 absolute -left-[0.481rem] fill-background text-muted-foreground md:flex hidden" />
        <Link className="flex flex-col gap-3" href={`/blog/${slug}`}>
          <h3 className="sm:text-xl text-lg font-bold -mt-1 text-primary dark:text-white">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="text-sm text-muted-foreground text-nowrap md:pr-12 mb-2">
            <p className="md:w-24">Posted on : {formatDate2(date)}</p>
          </div>
          <Button
            variant="link"
            size="sm"
            className="w-fit px-0 underlin text-primary-light e -mt-2"
          >
            Read more <ChevronRightIcon className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
