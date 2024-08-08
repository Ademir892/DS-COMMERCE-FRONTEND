import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDeatilsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";
import './styles.css';

const product: ProductDTO = {
  id: 1,
  name: "TV",
  description: "Esta Tv é muito bonita",
  imgURL: "https://www.bing.com/images/search?view=detailV2&ccid=sU4o7%2fzP&id=2CED90137FBE94D5360508A56D6401EABB083761&thid=OIP.sU4o7_zPqzefgZ33S5ly5AHaE8&mediaurl=https%3a%2f%2fm.media-amazon.com%2fimages%2fI%2f91%2btRvBTNkL.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b14e28effccfab379f819df74b9972e4%3frik%3dYTcIu%252boBZG2lCA%26pid%3dImgRaw%26r%3d0&exph=1707&expw=2560&q=tv+image&simid=608027796439512234&FORM=IRPRST&ck=F36066D013AAD22B056C5E785A18FE7C&selectedIndex=1&itb=0",
  price: 1000.0,
  categories: [
    {
      id: 1,
      name: "Electronics",
    },
    {
      id: 3,
      name: "Computadores",
    },
  ]
}

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDeatilsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
