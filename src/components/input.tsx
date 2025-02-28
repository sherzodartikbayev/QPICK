import { InputProps } from '../types'

const Input = ({ title, width, icon }: InputProps) => {
	return (
		<div className={`relative ${width} max-w-40 mb-3`}>
			<div className='relative'>
				<input
					type='text'
					placeholder={title}
					className='w-full px-4 py-4 bg-lightGray rounded-2xl outline-none'
				/>
				<img
					src={icon}
					className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10 bg-lightGray'
					width={20}
				/>
			</div>
		</div>
	)
}

export default Input
