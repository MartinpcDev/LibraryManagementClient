import { ReactNode } from 'react';

interface CardTitleProps {
	children: ReactNode;
	className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
	children,
	className = ''
}) => {
	return (
		<>
			<h3 className={`whitespace-nowrap tracking-tight ${className}`}>
				{children}
			</h3>
		</>
	);
};
