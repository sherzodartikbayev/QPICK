import { ReactNode } from 'react'

export interface ButtonProps {
	children: string,
	link?: string,
	className?: string
}

export interface BannerProps {
	children: ReactNode
}