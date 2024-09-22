"use client";
import "react";

import { Button, Navbar, NavbarBrand, NavbarItem, NextUIProvider, Tooltip } from "@nextui-org/react";
import { useAtomValue } from "jotai";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Cell } from "@/components/cell";

import { testAtom } from "../store/test";

export default function Page() {
	const test = useAtomValue(testAtom);

	return (
		<NextUIProvider>
			<Navbar shouldHideOnScroll className="dark text-foreground bg-background">
				<NavbarBrand>{test.toString()}</NavbarBrand>
				<NavbarItem>
					<Tooltip content="going back to the main page" closeDelay={0} delay={0}>
						<Link href="/">
							<Button
								color="primary"
								variant="shadow"
								style={{
									display: "flex",
								}}
							>
								<CircleArrowLeft />
								go back
							</Button>
						</Link>
					</Tooltip>
				</NavbarItem>
				<NavbarItem>Hello world!</NavbarItem>
			</Navbar>
			<div style={{ display: "flex", flexDirection: "column", backgroundColor: "black", fill: "black", gap: 12 }}>
				<Button variant="shadow">hi</Button>
				<Button style={{ width: 110, height: 110 }}>hi</Button>
			</div>
			<div style={{ margin: "auto" }}>
				<div style={{ display: "flex", gap: 10 }}>
					<Cell name={123} color="red" />
					<Cell name={123} color="red" />
					<Cell name={123} color="red" />
				</div>
			</div>
			<div style={{ height: 10 }} />
			<div style={{ margin: "auto" }}>
				<div style={{ display: "flex", gap: 10 }}>
					<Cell name={123} color="blue" />
					<Cell name={123} color="blue" />
					<Cell name={123} color="blue" />
				</div>
			</div>
			<div style={{ height: 10 }} />
			<div style={{ gap: 10, display: "flex" }}>
				<Button radius="sm">Scout</Button>
				<Button radius="sm">Robot Report</Button>
			</div>
		</NextUIProvider>
	);
}
