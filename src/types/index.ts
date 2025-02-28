import { ReactNode } from 'react'
import { JSX } from 'react/jsx-runtime'
export interface ButtonProps {
	children: string | ReactNode
	link?: string
	className?: string
}

export interface BannerProps {
	children: ReactNode
}

export interface Product {
	map(arg0: (product: Product) => JSX.Element): ReactNode
	id: string
	title: string
	image: string
	type: string
	price: string
	oldPrice?: string
	discount?: string
	star?: string
	descr?: string
	details?: string
}

export interface CategoryListProps {
	title: string
}

export interface CartItem extends Product {
	quantity: number
}

export interface InputProps {
	width: string
	icon?: string
	title: string
}
