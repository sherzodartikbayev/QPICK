import { useEffect, useState } from 'react'
import { Product } from '../types'

const useFetch = (url: string) => {
	const [data, setData] = useState<Product | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				const req = await fetch(url)

				if (!req.ok) {
					throw new Error(req.statusText)
				}

				const result = await req.json()
				setData(result)
			} catch (err) {
				setError(
					err instanceof Error ? err.message : 'An unknown error occurred'
				)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [url])

	return { data, isLoading, error }
}

export default useFetch
