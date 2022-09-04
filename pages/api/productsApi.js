import { getData } from '../../lib/queries'

export default async function handler(req, res) {
	// Check for secret to confirm this is a valid request
	if (req.method === 'GET') {
		const data = await getData()
		return res.status(200).json(data.data.allProducts)
	  } 

	try {
		// this should be the actual path not a rewritten path
		// e.g. for "/blog/[slug]" this should be "/blog/post-1"
		await res.revalidate('/ASDA')
		return res.json({ revalidated: true })
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return res.status(500).send('Error revalidating')
	}
}