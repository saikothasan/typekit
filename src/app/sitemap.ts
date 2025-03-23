import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://typekit.pages.dev"

  // Main pages
  const routes = [
    "",
    "/languages",
    "/math",
    "/symbols",
    "/currencies",
    "/emoji",
    "/ipa",
    "/ipa/english",
    "/ipa/full",
    "/about",
    "/help",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Language pages
  const languages = [
    "czech",
    "danish",
    "dutch",
    "esperanto",
    "finnish",
    "french",
    "german",
    "greek",
    "hungarian",
    "icelandic",
    "italian",
    "maori",
    "norwegian",
    "pinyin",
    "polish",
    "portuguese",
    "romanian",
    "russian",
    "spanish",
    "swedish",
    "turkish",
    "ukrainian",
    "vietnamese",
    "welsh",
  ].map((lang) => ({
    url: `${baseUrl}/languages/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...routes, ...languages]
}

