"use client";
import "react";

import { Button } from "@nextui-org/react";
import React from "react";

import { Cell } from "@/components/cell";

export default function Page() {
	return (
		<>
			<div style={{ height: 10 }} />

			<div className="flex items-center justify-center gap-3 flex-wrap">
				<Cell color="red" name={123} />
				<Cell color="red" name={123} />
				<Cell color="red" name={123} />
			</div>

			<div style={{ height: 10 }} />

			<div className="flex items-center justify-center gap-3 flex-wrap">
				<Cell color="blue" name={123} />
				<Cell color="blue" name={123} />
				<Cell color="blue" name={123} />
			</div>

			<div style={{ height: 10 }} />

			<div className="flex items-center justify-center gap-3">
				<Button radius="sm">Scout</Button>
				<Button radius="sm">Robot Report</Button>
			</div>
		</>
	);
}
