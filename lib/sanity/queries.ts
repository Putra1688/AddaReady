import { groq } from "next-sanity";

export const templatesQuery = groq`*[_type == "template"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  tech_stack,
  thumbnail,
  demo_url,
  category
}`;

export const templateBySlugQuery = groq`*[_type == "template" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  tech_stack,
  thumbnail,
  demo_url,
  category
}`;
