import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as productService from "../../../services/product-service";
import { ProductDTO } from "../../../models/product";
import * as cartService from "../../../services/cart-service";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDeatilsCard from "../../../components/ProductDetailsCard";
import { Link } from "react-router-dom";
import { ContextCartCount } from "../../../utils/contextCart";

export default function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const {setContextCartCount} = useContext(ContextCartCount);

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    const productId = Number(params.productId);
    
    if (!isNaN(productId)) {
      productService
        .findById(productId)
        .then((response) => {
          setProduct(response.data);
        })
        .catch(() => {
          navigate("/"); // Redireciona se não encontrar o produto
        });
    } else {
      navigate("/"); // Redireciona se o productId for inválido
    }
  }, [params.productId, navigate]);

  function handleBuyClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDeatilsCard product={product} />}
        <div className="dsc-btn-page-container">
          <div onClick={handleBuyClick}>
            <ButtonPrimary text="Comprar" />
          </div>
          <Link to={"/"}>
            <ButtonInverse text="Inicio" />
          </Link>
        </div>
      </section>
    </main>
  );
}
