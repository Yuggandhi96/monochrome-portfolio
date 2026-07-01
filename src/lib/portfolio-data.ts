import data from "@/data/portfolio.json";
import tex1 from "@/assets/texture-01.jpg";
import tex2 from "@/assets/texture-02.jpg";
import tex3 from "@/assets/texture-03.jpg";
import tex4 from "@/assets/texture-04.jpg";
import portrait from "@/assets/portrait.jpg";

// Image registry — add new images here and reference them by key in portfolio.json
export const images: Record<string, string> = {
  "texture-01": tex1,
  "texture-02": tex2,
  "texture-03": tex3,
  "texture-04": tex4,
  portrait,
};

const resolve = <T extends { image: string }>(item: T) => ({
  ...item,
  image: images[item.image] ?? tex1,
});

export const profile = data.profile;
export const home = data.home;
export const contactInfo = data.contactInfo;
export const clients = data.clients;
export const process = data.process;
export const stats = data.stats;
export const projects = data.projects.map(resolve);
export const services = data.services.map(resolve);
export const portraitImage = portrait;
