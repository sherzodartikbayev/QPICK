import { ReactNode } from 'react'
export interface ButtonProps {
	children: string | ReactNode
	link?: string
	className?: string
}

export interface BannerProps {
	children: ReactNode
}

export interface Product {
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
