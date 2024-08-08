import { Button } from '../../components/card/Button';
import { Card } from '../../components/card/Card';
import { CardContent } from '../../components/card/CardContent';
import { CardDescription } from '../../components/card/CardDescription';
import { CardFooter } from '../../components/card/CardFooter';
import { CardHeader } from '../../components/card/CardHeader';
import { CardTitle } from '../../components/card/CardTitle';
import { Input } from '../../components/card/Input';
import { Label } from '../../components/card/Label';

export default function LoginView() {
	return (
		<Card className='w-full max-w-md mx-auto'>
			<CardHeader>
				<CardTitle className='font-bold text-2xl'>Iniciar Sesión</CardTitle>
				<CardDescription>
					{' '}
					Ingresa tu correo electrónico y contraseña para acceder a tu cuenta.
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='space-y-2'>
					<Label htmlFor='email'> Correo electrónico </Label>
					<Input
						id='username'
						placeholder='Ingresa tu nombre de usuario'
						required
						type='email'
					/>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='password'>Contraseña</Label>
					<Input id='password' required type='password' />
				</div>
			</CardContent>
			<CardFooter className='flex items-center justify-between'>
				<Button type='submit'>Iniciar Sesión</Button>
			</CardFooter>
		</Card>
	);
}
