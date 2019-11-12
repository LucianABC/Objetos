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
listaProductos = [];

let producto = {
    id: 1, 
    nombre: "nombre",
    descripcion: "descripcion",
    precio: "precio"
} 

const cargarProducto= (id, nombreProducto, desc, precio) =>{
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
    cargarProducto(9, "nombreProducto", "descripcion", 35)
    expect(listaProductos[0]).toStrictEqual({
        id: 9,
        nombre: "nombreProducto",
        descripcion: "descripcion",
        precio: 35
    });
});

/****************** ***********************

const searchID = (ID) => {

    for (let item of listaProductos) {
        if (item.id == ID){
            
        }
    };
    indice = listaProductos.indexOf(ID);
    
    if (indice == -1) {
        throw "El producto no esta en la lista"    
    } else {
        return listaProductos[indice]
    };
};

test ('buscar por id', () => {
    cargarProducto(9, "remera", "roja", 350);
    expect(searchID(9)).toBe({id: 9,nombre:"remera", descripcion:"roja", precio:350})
});


****************** M O D I F I C A R*********************/

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
    cargarProducto(9,"remera", "roja", 350,50)
    expect(modificarProducto(9, 2, "pantalon","negro", 3.5)).toStrictEqual({id: 2, nombre: "pantalon", descripcion:"negro",precio: 3.5});
});


/*********************B O R R A R************************/


const borrarProducto = () => {
    
};

test('borrar producto de la lista', () => {
    cargarProducto(10, "falta", "negra", 499,99)
    expect(borrarProducto()).toStrictEqual();

});









