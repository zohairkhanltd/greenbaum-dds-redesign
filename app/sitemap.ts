import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.greenbaumdds.com";

  const routes = [
    "",
    "/about",
    "/about/dr-greenbaum",
    "/about/dr-luong",
    "/about/team",
    "/about/technology",
    "/services",
    "/services/preventive-dentistry",
    "/services/cosmetic-dentistry",
    "/services/restorative-dentistry",
    "/services/dental-implants",
    "/services/laser-periodontal-dentistry",
    "/services/sleep-apnea-snoring",
    "/services/tmj-therapy",
    "/services/emergency-dentistry",
    "/new-patients",
    "/new-patients/registration",
    "/new-patients/insurance-financing",
    "/new-patients/reviews",
    "/new-patients/gallery",
    "/resources/home-care",
    "/resources/blog",
    "/resources/faq",
    "/contact",
    "/book",
    "/privacy-policy",
    "/accessibility",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
