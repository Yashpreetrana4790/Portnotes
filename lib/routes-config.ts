// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },

      {
        title: "Project Structure",
        href: "/project-structure",
        items: [
          { title: "Layouts", href: "/layouts" },
          { title: "Integrations", href: "/integrations" },
          {
            title: "Manual",
            href: "/manual",
            items: [
              { title: "JavaScript", href: "/javascript" },
              { title: "Typescript", href: "/typescript" },
              { title: "Golang", href: "/golang" },
            ],
          },
        ],
      },
      {
        title: "FAQ",
        href: "/faq",
      },
    ],
  },

  {
    title: "React",
    href: "/react-hooks",
    noLink: true,
    items: [
      { title: "useSession", href: "/use-session" },

    ],
  },
  {
    title: "Nextjs",
    href: "/nextjs",
    noLink: true,
    items: [
      { title: "What is Next ? ", href: "/intro" },
    ],
  },
  {
    title: "Javascript",
    href: "/javascript",
    noLink: true,
    items: [
      { title: "What is Javscript ?", href: "/introduction" },
    ],
  },
  {
    title: "Docker",
    href: "/docker",
    noLink: true,
    items: [
      { title: "What is Docker ? ", href: "/introduction" },
    ],
  }

];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();

console.log(page_routes);
