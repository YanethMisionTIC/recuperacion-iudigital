let txtIdProducto = document.getElementById();
let txtImagenProducto = document.getElementById();
let txtNombre = document.getElementById();
let txtMarca = document.getElementById();
let txtdescripcion = document.getElementById();

let btnNuevoProducto = document.getElementById();
let listProductos = document.getElementById();

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



const NuevoProducto = () =>{
  productos.push({
    idProducto: txtIdProducto.value,
    imagen: txtImagenProducto.value,
    nombreProducto: txtNombre.value,
    marca: txtMarca.value,
    descripcion: txtdescripcion.value
  })
  for (let index = 0; index < productos.length; index++) {
    listProductos.innerHTML = 
    `
      <div class="col s12 l4 m4">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${productos[index].imagen}" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
            ${productos[index].nombreProducto}
            <i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">This is a link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Producto 1
              <i class="material-icons right">close</i>
            </span>
            <p>'+iterador_productos.descripcion+'</p>
          </div>
        </div>
      </div>
    `
  }
}