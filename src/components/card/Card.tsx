import { ReactNode } from 'react';

interface CardProps {
	children: ReactNode;
	className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
	return (
		<>
			<div className='flex items-center justify-center bg-background'>
				<div
					className={`rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md ${className}`}>
					{children}
				</div>
			</div>
		</>
	);
};
