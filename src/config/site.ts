import { NavbarItems } from "@/components/navbar";

export type siteConfig = typeof siteConfig;

export const siteConfig = {
	name: "XBot Mock Webapp",
	description: "Mocking XBot Webapp with NextJS and NexUI",
};

export const navbarItems: NavbarItems = [
	{ href: "/scouting", title: "Scouting" },
	{ href: "/skills", title: "Skills" },
];
