"use client";

import { useAtomValue } from "jotai/react";
import { Input } from "@nextui-org/react";

import { usernameAtom } from "./store/username";

import { Center } from "@/components/center";

export default function Home() {
	const username = useAtomValue(usernameAtom);

	return username === "" ? (
		<>
			<div className="size-8" />
			<text className="flex justify-center">We never saw you before. Tell us your name.</text>
			<div className="size-3" />
			<Center>
				<Input className="flex max-w-80 max-h-20 justify-center" label="username" type="username">
					hello
				</Input>
			</Center>
		</>
	) : (
		<></>
	);
}
