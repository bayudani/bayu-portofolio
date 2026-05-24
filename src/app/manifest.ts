import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bayu Dani Kurniawan",
    short_name: "Bayu Dani",
    description:
      "Fullstack Developer & Mobile Engineer specializing in web applications, mobile apps, AI-integrated systems, and augmented reality experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/images/profile.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
