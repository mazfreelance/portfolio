const fs = require('fs')
const globby = require('globby')
const prettier = require("prettier");

const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = process.env.WEBSITE_URL;

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    // include
    "pages/**/*{.tsx,.js}",
    "pages/*.tsx",
    "pages/projects/*.tsx",
    // exclude
    "!pages/api",
    "!pages/users",
    "!pages/_app.tsx"
  ])

  const pagesSitemap = `
    ${ pages
      .map(page => {
        const path = page
          .replace("pages", "")
          .replace(".tsx", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${ YOUR_AWESOME_DOMAIN }${ routePath }</loc>
            <lastmod>${ getDate }</lastmod>
          </url>
        `;
      })
      .join("") }
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <url
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${ pagesSitemap }
    </url>
  `;

  const formattedSitemap = formatted(generatedSitemap);

  fs.writeFileSync("public/sitemap.xml", formattedSitemap, "utf8");
})()