/**********************************************
 * Hacer un programa que nos permita 
 * cargar/modificar/borrar
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 4.; título, descripción
 * de producto y precio (float)).
 * 
 * Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/modificar/borrar productos de 
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito. 
 *  
 ***********************************************
let listaProductos = [];
let shoppingCart = [];

let producto = {
    id: 1, 
    nombre: "nombre",
    descripcion: "descripcion",
    precio: "precio"
} 

beforeEach (() => {
    listaProductos = [];
    shoppingCart = [];
});

const addToList= (id, nombreProducto, desc, precio) =>{
    let producto= {
        id: id,
        nombre: nombreProducto,
        descripcion: desc,
        precio: parseFloat(precio)
    }
    listaProductos.push(producto);
    
    return listaProductos
};


test('cargar productos en la lista',() => {
    addToList(9, "nombreProducto", "descripcion", 35)
    expect(listaProductos[0]).toStrictEqual({
        id: 9,
        nombre: "nombreProducto",
        descripcion: "descripcion",
        precio: 35
    });
});
/****************** B U S C A R *********************

const searchID = (ID) => {

    for (let item of listaProductos) {
        if (item.id == ID){
            return item
        }
    }
};

test ('buscar por id', () => {
    addToList(9, "remera", "roja", 350);
    expect(searchID(9)).toStrictEqual({id: 9,nombre:"remera", descripcion:"roja", precio:350})
});


/****************** M O D I F I C A R*********************

const modificarProducto = (ID, newID, newName, newDesc, newPrice) => {
    
    for (let item of listaProductos) {
        if (item.id == ID){
            item.id = newID
            item.nombre = newName;
            item.descripcion = newDesc;
            item.precio = newPrice;
        }

        return item
    }
};


test('modificar productos de la lista', () => {
    addToList(9,"remera", "roja", 350,50)
    expect(modificarProducto(9, 2, "pantalon","negro", 3.5)).toStrictEqual({id: 2, nombre: "pantalon", descripcion:"negro",precio: 3.5});
});


*********************B O R R A R************************


const borrarProducto = (ID) => {
    for (let item of listaProductos) {
        if (item.id == ID){
            listaProductos= listaProductos.splice(item, 1)
        }

        return listaProductos
    }
};

test('borrar producto de la lista', () => {
    addToList(10, "falda", "negra", 499,99);
    addToList(11, "remera", "negra", 399,99);
    let previousLength= listaProductos.length;
    borrarProducto(10);
    expect(previousLength).toBeGreaterThan(listaProductos.length);
});


************************A G R E G A R  AL  C A R R I T O***************************

const addToCart = (ID) => {
    for (let item of listaProductos) {
        if (item.id == ID){
            shoppingCart.push(item);
        }
    }

        return shoppingCart
};



test('agregar prod al carrito', () => {
    addToList(10, "falda", "negra", 499.99);
    addToList(11, "remera", "negra", 399.99);
    addToCart(10);
    expect(shoppingCart[0]).toStrictEqual({
        id: 10,
        nombre: "falda",
        descripcion: "negra",
        precio: 499.99
    });
});

************************B O R R A R  DEL  C A R R I  T O ***************************

const deleteFromCart = (ID) => {
    for (let item of shoppingCart) {
        if (item.id == ID) {
            shoppingCart.splice(item, 1);
        }
    }
};

test('borrar del carrito', ()=> {
    addToList(10, "falda", "negra", 499,99);
    addToList(11, "remera", "negra", 399,99);
    addToCart(10);
    addToCart(11);
    let previousLength = shoppingCart.length
    deleteFromCart(10);
    expect(shoppingCart.length).toBeLessThan(previousLength)
});

************************S U M A R P R E C I O ***************************

const totalPrice = () => {
     let total = 0;
     for (let item of shoppingCart) {
        total += item.precio;
     }

     return total


};


test ('precio total de compra', () => {
    addToList(10, "falda", "negra", 400);
    addToList(11, "remera", "negra", 300);
    addToCart(10);
    addToCart(11);


    expect(totalPrice()).toBe(700);
}
);


******/







/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 */



const libro = {
    titulo: "titulo",
    autor: "Nombre Autor",
    añoPublicacion: 1994,
    ISBN: 1234567,
    reviews: [],
    
    get info () {
        return `${this.titulo}, por ${this.autor} - ${this.ISBN}`
    },

    agregarReview: function(nombre, comentario, _valoracion){
        let valoracion;
        if(_valoracion < 1 || _valoracion > 5 || typeof _valoracion !== "number") {
            throw "La valoracion debe ser un numero entre 1 y 5"
        } else { 
            valoracion = _valoracion;
        };
        this.reviews.push({
            nombre,
            comentario,
            valoracion 
        });
    },
    
    get promedio(){
        let prom = 0;
        for (let review of this.reviews) {
            prom += review.valoracion;
        }
        prom = prom / this.reviews.length;

        return prom
    }    
}


beforeEach(()=>{
    libro.reviews = [];
});

test('agregar review a la lista de reviews', () => {
    libro.agregarReview("Lou", "buenisimo che", 5);
    expect(libro.reviews[0]).toStrictEqual({
        nombre: "Lou",
        comentario: "buenisimo che",
        valoracion: 5
    })
});

test('ver informacion del libro', () => {
    expect(libro.info).toBe(`titulo, por Nombre Autor - 1234567`)
});

test('sacar promedio de valoraciones',()=>{
    libro.agregarReview("Lou", "buenisimo che", 5);
    libro.agregarReview("Not Lou", "mameno", 3);
    libro.agregarReview("Cosme Fulanito", "una basofia", 1);
    expect(libro.promedio).toBe(3);
});

/***********************************************
 * Crear un objeto "receta" que tenga una lista 
 * de ingredientes con su cantidad, y un 
 * metodo que muestre un texto de 
 * las cantidades. Por ejemplo:
 * - La receta <nombre> lleva 2 tazas de harina,
 * 5 gramos de levadura, etc...
 */

 const receta = {
    nombre: "nombre receta",
    _ingredientes: [],
     
    agregarIngredientes: function(ingrediente, cantidad) {
        this._ingredientes.push({
            ingrediente,
            cantidad
        });
    },

    get ingredientes () {
        let texto = `La receta de ${this.nombre} lleva `;

        for (let ingrediente of this._ingredientes) {
            if (this._ingredientes.indexOf(ingrediente) == this._ingredientes.length -2) {
                texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente} `;    
            
            }else if (this._ingredientes.indexOf(ingrediente) == this._ingredientes.length -1) {
                
              texto += `y ${ingrediente.cantidad} de ${ingrediente.ingrediente}.`;    

            } else {
                texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}, `;    
            }
        }
    
        return texto
    }
}



beforeEach(()=>{
    receta._ingredientes = [];
});


test('agregar ingredientes a la lista de ingredientes',()=> {
    receta.agregarIngredientes("harina","250gr");
    expect(receta._ingredientes[0]).toStrictEqual({
       ingrediente: "harina",
        cantidad: "250gr"
    })
});

test('mostrar instrucciones', () => {
    receta.nombre = "panqueques";
    receta.agregarIngredientes("harina","250gr");
    receta.agregarIngredientes("leche","200ml");
    receta.agregarIngredientes("huevos","2");

    expect(receta.ingredientes).toBe("La receta de panqueques lleva 250gr de harina, 200ml de leche y 2 de huevos.");
});

