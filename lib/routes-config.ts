// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "JavaScript",
    href: "/javascript",
    noLink: true,
    items: [

      { title: "Javascript Basics ", href: "/basics" },

    ],
  },
  {
    title: "Next Js",
    href: "/nextjs",
    noLink: true,
    items: [
      { title: "What is Next.js ?", href: "/introduction" },

      {
        title: "Why need Next.js ?",
        href: "/whynextjs",
      },
    ],
  },


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
