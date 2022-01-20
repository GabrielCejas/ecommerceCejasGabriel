import { createContext, useContext, useState, useEffect } from "react";

const contexto = createContext();

export const { Provider } = contexto;

export const useContexto = () => {
  return useContext(contexto);
};

const CartContext = ({ children }) => {
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [productsInCart, setProductsInCart] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  const isInCart = (id) => {
    return carrito.some((item) => item.id === id);
  };

  const addItem = (producto) => {
    setCarrito(() => {
      if (isInCart(producto.id)) {
        return setCarrito(
          carrito.map((item) =>
            item.id === producto.id
              ? {
                  ...item,
                  cantidad: item.cantidad + producto.cantidad,
                  precio: item.precio + producto.precio,
                }
              : item
          )
        );
      } else {
        return setCarrito([...carrito, producto]);
      }
    });
  };

  useEffect(() => {
    let precioTotalCart = carrito
      ?.map((item) => item.precio)
      .reduce((prev, curr) => prev + curr, 0);
    setPrecioTotal(precioTotalCart);
  }, [carrito]);

  const cantidadItems = (num) => {
    setCantidadTotal(num);
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCarrito([]);
    setCantidadTotal(0);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    const inCarrito = carrito.reduce((acc, item) => {
      return acc + item.cantidad;
    }, 0);
    setProductsInCart(inCarrito);
  }, [carrito]);

  const appContexto = {
    cantidadTotal,
    carrito,
    addItem,
    isInCart,
    removeItem,
    clear,
    cantidadItems,
    productsInCart,
    precioTotal,
  };

  return <Provider value={appContexto}>{children}</Provider>;
};

export default CartContext;
