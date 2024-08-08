import { ReactNode } from 'react';

interface CardFooterProps {
	children: ReactNode;
	className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
	children,
	className
}) => {
	return (
		<>
			<div className={`p-6 flex-col gap-2 ${className}`}>{children}</div>
		</>
	);
};
