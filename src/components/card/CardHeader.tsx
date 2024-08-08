import { ReactNode } from 'react';

interface CardHeaderProps {
	children: ReactNode;
	className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
	children,
	className = ''
}) => {
	return (
		<>
			<div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
				{children}
			</div>
		</>
	);
};
