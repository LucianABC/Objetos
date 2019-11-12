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
 ***********************************************/
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
/****************** B U S C A R *********************/

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


/****************** M O D I F I C A R*********************/

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


/*********************B O R R A R************************/


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


/************************A G R E G A R  AL  C A R R I T O***************************/

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

/************************B O R R A R  DEL  C A R R I  T O ***************************/

const deleteFromChart = (ID) => {
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
    deleteFromChart(10);
    expect(shoppingCart.length).toBeLessThan(previousLength)
});

/************************S U M A R P R E C I O ***************************/

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








