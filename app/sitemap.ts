import type { MetadataRoute } from "next";

const baseUrl = "https://chinaprime.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/destinations",
    "/private-tours",
    "/sample-itineraries",
    "/reviews",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
