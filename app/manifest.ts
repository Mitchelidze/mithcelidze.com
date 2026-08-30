import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Miranda Tchelidze | Senior Product Designer",
    short_name: "Miranda Tchelidze",
    description: "Miranda Tchelidze Portfolio Website",
    start_url: "/",
    display: "standalone",
    background_color: "#f0f0f0",
    theme_color: "#f0f0f0",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
