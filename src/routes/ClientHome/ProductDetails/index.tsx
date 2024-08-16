import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDeatilsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";
import './styles.css';

const product: ProductDTO = {
  id: 1,
  name: "TV",
  description: "Esta Tv é muito bonita",
  imgURL: "https://imgs.casasbahia.com.br/55060824/1g.jpg",
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
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDeatilsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <ButtonInverse text="Inicio"/>
          </div>
        </section>
      </main>
  );
}
