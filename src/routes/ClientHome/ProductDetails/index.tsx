import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDeatilsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";


export default function ProductDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))
    .then(response => {
      setProduct(response.data);
    })
    .catch(() => {
      navigate("/");
    });
  }, []);
  

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDeatilsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to={"/"}>
            <ButtonInverse text="Inicio" />
          </Link>
        </div>
      </section>
    </main>
  );
}