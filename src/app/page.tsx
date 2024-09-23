"use client";

import { useAtomValue } from "jotai/react";
import { Input } from "@nextui-org/react";

import { usernameAtom } from "./store/username";

export default function Home() {
	const username = useAtomValue(usernameAtom);

	return username === "" ? (
		<>
			<div className="size-8" />
			<text className="flex justify-center">We never saw you before. Tell us your name.</text>
			<div className="size-3" />
			<Input className="justify-self-center flex max-w-64" label="username" type="username">
				hello
			</Input>
		</>
	) : (
		<></>
	);
}
