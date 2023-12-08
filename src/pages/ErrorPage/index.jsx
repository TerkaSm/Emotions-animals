import './style.css'
import { ButtonPrimary } from '../../components/Button'

export const ErrorPage = () => {
	return (
		<main>
			<section className='error'>
				<div className='error__content'>
					<h1 className='error__title'>404: Tady nic není</h1>
					<p className='error__text u-padding-bottom'>Asi jste se spletli</p>
					<ButtonPrimary src={'/'}>Zpět domů</ButtonPrimary>
				</div>
			</section>
		</main>
	)
}
