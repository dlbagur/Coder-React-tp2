import React from 'react';
import Producto from './Items';

const ListaProductos = ({ productos }) => {
  return (
    <div className="lista-productos">
      {productos.map((producto, index) => (
        <Producto
          key={index}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
        />
      ))}
    </div>
  );
};

export default ListaProductos;
