import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import LoginView from './views/auth/LoginView';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path='/' element={<LoginView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
