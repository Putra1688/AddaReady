import { MetadataRoute } from "next";
import { client } from "@/lib/sanity/client";
import { templatesQuery } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://addaready.vercel.app";

  // Static routes
  const staticRoutes = ["", "/templates", "/cara-pesan", "/faq"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic routes (templates from Sanity)
  let templateRoutes: any[] = [];
  try {
    const templates = await client.fetch(templatesQuery);
    templateRoutes = templates.map((template: any) => ({
      url: `${baseUrl}/templates/${template.slug}`,
      lastModified: new Date(template._updatedAt || new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching templates for sitemap:", error);
  }

  return [...staticRoutes, ...templateRoutes];
}
