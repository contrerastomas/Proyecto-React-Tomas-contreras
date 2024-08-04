import { createContext, useState } from "react";

const CartContext = createContext()


const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);


    const agregarProducto = (productoNuevo) => {

        setCarrito([...carrito, productoNuevo])

    }

    const cantidadTotal = () => {
        const totalProductos = carrito.reduce((total, productoCarrito) => total + productoCarrito.cantidad, 0)
        return totalProductos
    }

    const precioTotal = () => {
        const precio = carrito.reduce((total, productoCarrito) => total + (productoCarrito.cantidad * productoCarrito.precio), 0);
        return precio;
    };


    const borrarProducto = (idProducto) => {
        const porductosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idProducto)

        setCarrito(porductosFiltrados)

    }

    const vaciarCarrito = () => {
        setCarrito([])
    }


    return (
        <CartContext.Provider value={{ carrito, agregarProducto, cantidadTotal, precioTotal, borrarProducto, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }