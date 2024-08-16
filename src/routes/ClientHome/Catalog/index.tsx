import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 1,
  name: "TV",
  description: "Esta Tv é muito bonita",
  imgURL: "https://imgs.casasbahia.com.br/55060824/1g.jpg0",
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

export default function Catalog() {
  return (
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
                <CatalogCard product={product}/>
          </div>

          <ButtonNextPage />
        </section>
      </main>
  );
}
