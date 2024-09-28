import { NavbarContent, NavbarBrand, NavbarItem, Link, Navbar as NextUINavbar } from "@nextui-org/react";
import Image from "next/image";

import { navbarItems } from "@/config/site";

export type NavbarItems = Array<{ title: string; href: string }>;

export function Navbar() {
	return (
		<>
			<NextUINavbar isBordered={true} maxWidth="xl" position="sticky">
				<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
					<NavbarBrand className="gap-3 max-w-fit">
						<Image alt="xbot" height={38} src="/xbot.png" width={38} />
						<Link href="/">xbot robotics</Link>
					</NavbarBrand>
				</NavbarContent>
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					{navbarItems.map((value) => (
						<NavbarItem key={value.href}>
							<Link className="text-2xl" color="foreground" href={value.href}>
								{value.title}
							</Link>
						</NavbarItem>
					))}
				</NavbarContent>
				<NavbarContent justify="end" />
			</NextUINavbar>
			;
		</>
	);
}
