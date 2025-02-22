import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../constants'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	return (
		<header className='max-w-7xl paddingX mx-auto'>
			<div className='container w-full h-[60px] flex-between relative'>
				{/* Logo */}
				<Link to='/'>
					<img src='/icons/logo.png' width={105} alt='logo' />
				</Link>

				{/* Drop Down Menu */}
				<div className='relative -left-20 drop-down max-md:hidden'>
					<button className='flex items-center gap-4'>
						<span>
							<img src='/icons/phone.svg' alt='phone' width={15} />
						</span>
						<p className='text-[15px] font-medium leading-5'>
							Выбрать модель телефона
						</p>
						<span>
							<img
								src='/icons/down-back.svg'
								alt='back'
								width={8}
								className='rotate-180'
							/>
						</span>
					</button>
					<ul className='absolute pointer-events-none opacity-0 bg-white w-[255px] py-5 px-7 rounded-xl mt-2'>
						<div className='flex-between w-full cursor-pointer mb-3'>
							<p className='text-[17px] font-medium leading-5'>Apple</p>
							<span>
								<img src='/icons/down-back.svg' alt='icon' className='' />
							</span>
						</div>
						{navbarLinks.map(({ id, title }) => (
							<li key={id} className='px-5'>
								<a
									href='#'
									className='transition-all duration-300 hover:text-orange active:text-orange cursor-pointer text-[15px] leading-4 font-medium'
									onClick={() => setIsOpen(false)}
								>
									{title}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className='flex gap-10 items-center'>
					{/* Favorite */}
					<Link to='/favorites' className='max-md:hidden'>
						<img src='/icons/favorite.svg' alt='favorite icon' width={22} />
					</Link>

					{/* Cart */}
					<Link to='/cart'>
						<img src='/icons/cart.svg' alt='cart icon' width={23} />
					</Link>

					{/* Mobile Navbar */}
					<div className='md:hidden'>
						<img
							src='/icons/menu.svg'
							alt='menu icon'
							width={20}
							className='md:hidden cursor-pointer'
							onClick={() => setIsOpen(!isOpen)}
						/>
					</div>
				</div>
			</div>

			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} w-3/4 h-full absolute top-0 right-0 bg-white drop-shadow-2xl shadow-black rounded-tl-2xl rounded-bl-2xl overflow-hidden`}
			>
				<div
					className='w-7 h-7 rounded-lg absolute top-5 right-5 cursor-pointer'
					onClick={() => setIsOpen(false)}
				>
					<img src='/icons/close.svg' alt='close' />
				</div>

				<div className='pt-16 px-9'>
					<div className='flex gap-5 mb-4'>
						<span>
							<img src='/icons/phone.svg' alt='phone' width={15} />
						</span>
						<p className='text-[15px] font-medium leading-5 cursor-pointer'>
							Выбрать модель телефона
						</p>
					</div>
					<div
						className='flex items-center w-full cursor-pointer mb-3 select-none'
						onClick={() => setIsOpenMenu(!isOpenMenu)}
					>
						<span>
							<img
								src='/icons/down-back.svg'
								alt='icon'
								className='rotate-180'
								width={12}
							/>
						</span>
						<p className='text-xl font-medium leading-5 ml-2'>Apple</p>
					</div>

					<ul
						className={`px-5 overflow-scroll overflow-x-hidden h-72 ${
							isOpenMenu ? 'block' : 'hidden'
						}`}
					>
						{navbarLinks.map(({ id, title }) => (
							<li key={id} className='py-1'>
								<a
									href='#'
									className='text-lg font-medium leading-5  transition-all duration-300 hover:text-orange active:text-orange'
									onClick={() => setIsOpen(false)}
								>
									{title}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className='absolute bottom-10 left-0 flex gap-4 flex-col px-9'>
					<div className='flex gap-[10px]'>
						<img src='/icons/favorite.svg' alt='favorite icon' width={20} />
						<Link
							to='/favorites'
							className='navbar__mobile__text'
							onClick={() => setIsOpen(false)}
						>
							Избранное
						</Link>
					</div>
					<div className='flex gap-[10px]'>
						<img
							src='/icons/service-terms.svg'
							alt='favorite icon'
							width={15}
						/>
						<Link
							to='/service-terms'
							className='navbar__mobile__text'
							onClick={() => setIsOpen(false)}
						>
							Условия сервиса
						</Link>
					</div>
					<div className='flex gap-[10px]'>
						<img src='/icons/contact.svg' alt='favorite icon' width={15} />
						<Link
							to='/contact'
							className='navbar__mobile__text'
							onClick={() => setIsOpen(false)}
						>
							Контакты
						</Link>
					</div>
					<div className='flex gap-[10px]'>
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
			</div>
		</header>
	)
}

export default Navbar
