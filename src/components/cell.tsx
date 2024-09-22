import { Button } from "@nextui-org/react";

import { NamedColor } from "@/app/types";
interface CellProps {
	name: string | number;
	color?: NamedColor | (string & {});
}
export function Cell({ name, color }: CellProps) {
	return <Button style={{ backgroundColor: color, width: 110, height: 110 }}>{name}</Button>;
}
