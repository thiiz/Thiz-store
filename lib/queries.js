import { request } from "./datocms";

export async function getData() {
  const QUERY = `query Products($limit: IntType) {
    allProducts(first: $limit) {
      id
		  title
		  price
		  image {
			url
      responsiveImage(imgixParams: {fit: crop}){      
          src         
          base64
        }
		}
      color
		  slug
		}
  }`;
  const data = await request({
    query: QUERY,
    variables: { limit: 100 }
  });
  return { data }
}