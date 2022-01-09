import { useContexto } from "../CartContext";
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  const { productsInCart } = useContexto();
  return (
    <h3 className="mx-4">
      <BsFillCartFill />
      <h5>{productsInCart}</h5>
    </h3>
  );
};

export default CartWidget;
