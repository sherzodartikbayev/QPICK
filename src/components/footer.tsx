import { Link } from 'react-router-dom'
import { ContactSocialMedias } from '../constants'

const Footer = () => {
	return (
		<footer className='max-w-7xl mx-auto paddingX flex-center max-md:hidden'>
			<div className='container w-[1110px] px-7 py-7 flex justify-between items-start flex-wrap bg-white rounded-t-[20px] max-md:gap-10 '>
				{/* Logo */}
				<Link to='/' className='w-24'>
					<img
						src='/icons/logo.png'
						alt='QPICK logo'
						className='size-full object-contain'
					/>
				</Link>

				{/* Links */}
				<ul>
					<li>
						<Link
							to='/favorites'
							className='hover:text-orange transition-all duration-300 text-[17px] leading-5'
						>
							Избранное
						</Link>
					</li>
					<li>
						<Link
							to='/cart'
							className='hover:text-orange transition-all duration-300 text-[17px] leading-5'
						>
							Корзина
						</Link>
					</li>
					<li>
						<Link
							to='/contact'
							className='hover:text-orange transition-all duration-300 text-[17px] leading-5'
						>
							Контакты
						</Link>
					</li>
				</ul>

				{/* Service-Terms and Language */}
				<div>
					<Link
						to='/service-terms'
						className='hover:text-orange transition-all duration-300 text-[17px] leading-5'
					>
						Условия сервиса
					</Link>

					<div className='flex gap-[10px] mt-8'>
						<img src='/icons/language.svg' alt='language icon' width={15} />
						<Link to='#' className='navbar__mobile__text'>
							Каз
						</Link>
						<Link to='#' className='navbar__mobile__text'>
							Рус
						</Link>
						<Link to='#' className='navbar__mobile__text'>
							Eng
						</Link>
					</div>
				</div>

				{/* Social Media */}
				<div className='flex-between gap-4'>
					{ContactSocialMedias.map(({ id, src, alt, href }) => (
						<Link
							rel='noopener noreferrer'
							to={href}
							className='cursor-pointer w-8'
							key={id}
						>
							<img src={src} alt={alt} />
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
