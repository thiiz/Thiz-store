export default function handler(req, res) {
	const { method } = req
	switch (method) {
		case 'GET':
			res.status(200).json([
				{ id: 1, title: 'Primeira roupa de crochê', price: '99,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp', inStock: 1 },
				{ id: 2, title: 'Tênis branco com azul', price: '89,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg', inStock: 1 },
				{ id: 4, title: 'Quarta roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 5, title: 'Tênis branco com azul', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg', inStock: 1 },
				{ id: 6, title: 'Sexta roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 7, title: 'Tênis branco com azul', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg', inStock: 1 },
				{ id: 8, title: 'Oitava roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 9, title: 'Tênis branco com azul', price: '69,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg', inStock: 1 },
				{ id: 10, title: 'Décima roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 11, title: 'Tênis branco com azul', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg', inStock: 11 },
				{ id: 12, title: 'Décima segunda de roupa crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 13, title: 'Décima terceira de roupa crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 14, title: 'Tênis branco com azul', price: '69,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg', inStock: 1 },
				{ id: 15, title: 'Décima quinta de roupa crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 16, title: 'Décima sexta de roupa crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 17, title: 'Tênis branco com azul', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg', inStock: 1 },
				{ id: 18, title: 'Décima oitava roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 19, title: 'Tênis branco com azul', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg', inStock: 1 }
			])
			break
		default:
			res.setHeader('Allow', ['GET', 'PUT'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}