import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar isBordered={true} maxWidth="xl" position="sticky">
					<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
						<NavbarBrand className="gap-3 max-w-fit">
							<Image alt="xbot" height={38} src="/xbot.png" width={38} />
							<Link href="/"> xbot robotics</Link>
						</NavbarBrand>
					</NavbarContent>

					<NavbarContent justify="center">
						<NavbarItem className="">
							<Link className="text-2xl resize" color="foreground" href="/skills">
								skills
							</Link>
						</NavbarItem>
						<NavbarItem className="text-2xl resize">
							<Link href="/scouting">Scouting</Link>
						</NavbarItem>
					</NavbarContent>
					<NavbarContent justify="end" />
				</Navbar>
				{children}
			</body>
		</html>
	);
}
