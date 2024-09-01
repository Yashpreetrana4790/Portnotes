import { Markdown } from "@/components/markdown";
import { buttonVariants } from "@/components/ui/button";
import { Author, getAllBlogStaticPaths, getBlogForSlug } from "@/lib/markdown";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: PageProps) {
  const res = await getBlogForSlug(slug);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export async function generateStaticParams() {
  const val = await getAllBlogStaticPaths();
  if (!val) return [];
  return val.map((it) => ({ slug: it }));
}

export default async function BlogPage({ params: { slug } }: PageProps) {
  const res = await getBlogForSlug(slug);
  if (!res) notFound();
  return (
    <div className="lg:w-[80%] md:[95%] mx-auto">
      <Link
        className={buttonVariants({
          variant: "link",
          className: "!mx-0 !px-0 mb-7 !-ml-1 ",
        })}
        href="/blog"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-1.5" /> Back to blog
      </Link>
      <div className="flex flex-col gap-3 pb-7 w-full border-b mb-4">
        <p className="text-muted-foreground text-sm">
          {formatDate(res.frontmatter.date)}
        </p>
        <h1 className="sm:text-4xl text-3xl font-extrabold">{res.frontmatter.title}</h1>

      </div>
      <div className="!w-full">
        <Markdown>{res.content}</Markdown>
      </div>
    </div>
  );
}

