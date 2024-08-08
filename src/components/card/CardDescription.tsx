import { ReactNode } from 'react';

interface CardDescriptionProps {
	children: ReactNode;
	className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
	children,
	className = ''
}) => {
	return (
		<>
			<div className={`text-sm text-muted-foreground ${className}`}>
				{children}
			</div>
		</>
	);
};
