import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
	return (
		<div
			className={clsx("bg-gray-200 rounded-md animate-pulse", className)}
			{...props}
		/>
	);
};
