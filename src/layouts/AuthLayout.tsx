import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
	return (
		<>
			<div className='antialiased font-body'>
				<div className='py-10 lg:py-20 mx-auto w-[450px]'>
					<div className='mt-10'>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}
