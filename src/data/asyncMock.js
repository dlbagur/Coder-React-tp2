export const productos = [
  {
    id : 1,
    variedad: "Tintos",
    marca : "Catena Zapata",
    nombre : "Estiba Reservada",
    precio : 314000,
    img : "../../assets/imagenes/EstibaReservada.jpeg",
    descripcion: "Elegido el momento de la cosecha se seleccionan lotes en cada viñedo, luego se seleccionan plantas en cada lote elegido, luego los racimos que, una vez descobajados, terminan fermentando en pequeños barriles de roble francés, donde permanecen estacionados por aproximadamente 24 meses. Finalmente se seleccionan aquellos barriles que serán embotellados.",
    stock : 100
  },
  { 
    id : 2,
    variedad: "Tintos",
    marca : "Felipe Rutini",
    nombre : "Felipe Rutini",
    precio : 280000,
    img : "../../assets/imagenes/FelipeRutini.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 3,
    variedad: "Tintos",
    marca : "Susana Balbo",
    nombre : "Nosotros",
    precio : 200000,
    img : "../../assets/imagenes/Nosotros.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 4,
    variedad: "Tintos",
    marca : "Walter Bressia",
    nombre : "del Alma",
    precio : 180000,
    img : "../../assets/imagenes/delAlma.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 5,
    variedad: "Blancos",
    marca : "Catena Zapata",
    nombre : "Angélica Zapata",
    precio : 22000,
    img : "../../assets/imagenes/AngelicaZapata-Chardonnay.png",
    descripcion: "",
    stock : 100
  },
  {
    id : 6,
    variedad: "Blancos",
    marca : "Walter Bressia",
    nombre : "Lagrima Canela",
    precio : 20000,
    img : "../../assets/imagenes/LagrimaCanela.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 7,
    variedad: "Blancos",
    marca : "Casa Boher",
    nombre : "Gran Chardonnay",
    precio : 18000,
    img : "../../assets/imagenes/CasaBoher-GranChardonnay.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 8,
    variedad: "Blancos",
    marca : "Luigi Bosca",
    nombre : "Chardonnay",
    precio : 14000,
    img : "../../assets/imagenes/LuigiBoscaChardonnay.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 9,
    variedad: "Rosados",
    marca : "Susana Balbo",
    nombre : "Signature Rosé",
    precio : 32000,
    img : "../../assets/imagenes/Signature-Rose.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 10,
    variedad: "Rosados",
    marca : "Casa Boher",
    nombre : "Casa Boher Rosé",
    precio : 22000,
    img : "../../assets/imagenes/CasaBoherRose.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 11,
    variedad: "Rosados",
    marca : "Luigi Bosca",
    nombre : "Rose",
    precio : 15000,
    img : "../../assets/imagenes/LuigiBoscaRose.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 12,
    variedad: "Rosados",
    marca : "Domain Bousquet",
    nombre : "Gaia Rose",
    precio : 10000,
    img : "../../assets/imagenes/DomaineBousquetGaiaRose.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 13,
    variedad: "Espumantes",
    marca : "Rosell Boher",
    nombre : "Brut",
    precio : 25000,
    img : "../../assets/imagenes/RosellBoher.jpg",
    descripcion: "",
    stock : 100
  },
  {
    id : 14,
    variedad: "Espumantes",
    marca : "Luigi Bosca",
    nombre : "Boheme",
    precio : 20000,
    img : "../../assets/imagenes/LuigiBoscaBoheme.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 15,
    variedad: "Espumantes",
    marca : "Chandon",
    nombre : "Baron B Nature",
    precio : 18000,
    img : "../../assets/imagenes/BaronBNature.jpeg",
    descripcion: "",
    stock : 100
  },
  {
    id : 16,
    variedad: "Espumantes",
    marca : "Cruzat",
    nombre : "Cuvée Nature",
    precio : 14000,
    img : "../../assets/imagenes/CruzatCuveeNature.jpeg",
    descripcion: "",
    stock : 100
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (categoria) => {
  return new Promise((res) => {
    const vinosFiltrados = productos.filter((prod) => prod.variedad === categoria);
    setTimeout(() => {
      res(vinosFiltrados);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((res) => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
    setTimeout(() => {
      res(productoFiltrado);
    }, 2000);
  });
};
