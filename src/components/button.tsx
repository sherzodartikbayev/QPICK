import { Link } from 'react-router-dom'
import { ButtonProps } from '../types'

const Button = ({ children, link, className }: ButtonProps) => {
	return link ? (
		<Link
			to={link}
			className={`py-5 w-full bg-black rounded-[20px] font-semibold text-lg text-white leading-5 text-center max-md:font-semibold max-md:text-[17px] max-md:leading-5 ${className}`}
		>
			{children}
		</Link>
	) : (
		<button className='py-5 w-full bg-black rounded-[20px] font-semibold text-lg text-white leading-5 text-center max-md:font-semibold max-md:text-[17px] max-md:leading-5'>
			{children}
		</button>
	)
}

export default Button
