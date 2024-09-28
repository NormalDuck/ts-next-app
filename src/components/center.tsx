import { PropsWithChildren } from "react";

/**
 * Small <div /> component that makes the childerns in the middle
 */
export function Center({ children }: PropsWithChildren) {
	return <div className="flex justify-center">{children}</div>;
}
