"use client";
import { Button } from "@nextui-org/react";
import { useAtom } from "jotai";
import Link from "next/link";

import { Providers } from "./provider";
import { testAtom } from "./store/test";
export default function Home() {
	const [test, setTest] = useAtom(testAtom);
	return (
		<>
			<Providers>
				<h1>
					Welcome to <Link href={"/page"}>click me</Link>
				</h1>
				<div />
				<Button onClick={() => setTest((get) => get + 1)}>{test.toString()}</Button>
			</Providers>
		</>
	);
}
