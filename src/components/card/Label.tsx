import { ReactNode } from 'react';

interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
	children: ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
	return (
		<>
			<label
				className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
				{...props}>
				{children}
			</label>
		</>
	);
};
