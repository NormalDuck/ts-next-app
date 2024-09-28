import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";
import React from "react";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";

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
	// const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{/* <Navbar isBordered={true} maxWidth="xl" position="sticky">
					<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
						<NavbarBrand className="gap-3 max-w-fit">
							<Image alt="xbot" height={38} src="/xbot.png" width={38} />
							<Link href="/">xbot robotics</Link>
						</NavbarBrand>
					</NavbarContent>
					<NavbarContent className="hidden sm:flex gap-4" justify="center">
						<NavbarItem>
							<Link className="text-2xl" color="foreground" href="/skills">
								Skills
							</Link>
						</NavbarItem>
						<NavbarItem>
							<Link className="text-2xl" href="/scouting">
								Scouting
							</Link>
						</NavbarItem>
					</NavbarContent>
					<NavbarContent justify="end" />
				</Navbar>
				{children} */}
				<Navbar />
			</body>
		</html>
	);
}
