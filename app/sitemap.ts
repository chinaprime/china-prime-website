import type { MetadataRoute } from "next";
import { articles } from "./articles/data";
import { joinTours } from "./join-tours/data";
import { siteConfig } from "./site-config";

const baseUrl = siteConfig.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/destinations",
    "/private-tours",
    "/join-tours",
    "/articles",
    "/sample-itineraries",
    "/reviews",
    "/about",
    "/contact",
    "/privacy-policy",
    "/booking-payment",
    "/cancellation-refund",
    ...articles.map((article) => `/articles/${article.slug}`),
    ...joinTours.map((tour) => `/join-tours/${tour.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
