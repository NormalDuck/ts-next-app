import { CircleArrowDown } from "lucide-react";

export default function Page() {
	return (
		<>
			<div className="size-10" />
			<h1 className="justify-center flex text-4xl animate-bounce gap-5">
				<CircleArrowDown className="size-16" />
				<text className="animate-pulse leading">Random stuff I want to do</text>
			</h1>
			<div className="size-52" />
			<h1 className="justify-center flex text-4xl animate-bounce gap-5">
				<text className="animate-spin justify-center">spinning text!!</text>
			</h1>
			<div className="size-40" />
			<h1 className="justify-center flex text-4xl gap-5">
				<text className="animate-ping">growing text!</text>
			</h1>
			<div className="size-40" />
			<h1 className="justify-center flex">
				<text>nothing</text>
			</h1>
		</>
	);
}
