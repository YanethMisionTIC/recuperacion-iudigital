/* Definimos un objeto {clave: valor} */
var productoEjemplo = {
  idProducto: 1,
  nombreProducto: "Laptop",
  marca: "Apple",
  color: "Gris",
  descripcion: "lorem input ...",
};

console.log(productoEjemplo);
console.log(Object.keys(productoEjemplo));
console.log(Object.values(productoEjemplo));
console.log(Object.entries(productoEjemplo));

/* Cuando tenemos que mostrar más de un objeto 
Los objetos estaran anidados en un array []*/
var productos = [
  {
    idProducto: 1,
    imagen: "./assest/jpg/img1.jpg",
    nombreProducto: "Laptop",
    marca: "Apple",
    descripcion: "lorem input ..."
  },
  {
    idProducto: 2,
    imagen: "./assest/jpg/img2.jpg",
    nombreProducto: "Laptop",
    marca: "Acer",
    descripcion: "lorem input ..."
  },
  {
    idProducto: 1,
    imagen: "./assest/jpg/img1.jpg",
    nombreProducto: "Laptop",
    marca: "Apple",
    descripcion: "lorem input ..."
  },
  {
    idProducto: 1,
    imagen: "./assest/jpg/img1.jpg",
    nombreProducto: "Laptop",
    marca: "Apple",
    descripcion: "lorem input ..."
  },
  {
    idProducto: 1,
    imagen: "./assest/jpg/img1.jpg",
    nombreProducto: "Laptop",
    marca: "Apple",
    descripcion: "lorem input ..."
  },
  {
    idProducto: 1,
    imagen: "./assest/jpg/img1.jpg",
    nombreProducto: "Laptop",
    marca: "Apple",
    descripcion: "lorem input ..."
  },
  {
    idProducto: 2,
    imagen: "./assest/jpg/img2.jpg",
    nombreProducto: "Laptop",
    marca: "Acer",
    descripcion: "lorem input ..."
  },
  {
    idProducto: 1,
    imagen: "./assest/jpg/img1.jpg",
    nombreProducto: "Laptop",
    marca: "Apple",
    descripcion: "lorem input ..."
  },
  {
    idProducto: 1,
    imagen: "./assest/jpg/img1.jpg",
    nombreProducto: "Laptop",
    marca: "Apple",
    descripcion: "lorem input ..."
  },
  {
    idProducto: 1,
    imagen: "./assest/jpg/img1.jpg",
    nombreProducto: "Laptop",
    marca: "Apple",
    descripcion: "lorem input ..."
  },
];

/* Con map podemos iterar sobre nuestra lista */
productos2 = [...productos]
console.log(...productos2);

const listaProductos = productos2.map(function (iterador_productos) {
  return '<html lang="en"><head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" /></head><body><div class="col s12 l4 m4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+iterador_productos.imagen+'" /></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+iterador_productos.nombreProducto+'<i class="material-icons right">more_vert</i></span><p><a href="#">This is a link</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">Producto 1<i class="material-icons right">close</i></span><p>'+iterador_productos.descripcion+'</p></div></div></div></body></html>'
});

document.getElementById("listaP").innerHTML = listaProductos;
