import { request } from "./datocms";

export function PRODUCTSPAGE_QUERY({ data }) {
  return { data }
}


export async function teste() {
  const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
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
    query: HOMEPAGE_QUERY,
    variables: { limit: 100 }
  });
  console.log('data ' + data)

  return {
    props: { data: data.allProducts }
  };
}