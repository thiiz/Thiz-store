import { useEffect, useState } from "react";
import { getOtherCategories, getProductsCategoryRelated } from "../../lib/getProducts";
import Carousel from "../carousel/Carousel";

export default function ProductsRecommended({ CarouselProducts }) {
	return <Carousel products={CarouselProducts} title={"VOCÊ TAMBÉM PODE GOSTAR"} />
}