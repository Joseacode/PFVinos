// const { Router } = require("express");
// const { carritoPost, carritoGet, deleteCarrito, deleteFromCarrito, addToCarrito } = require("../controllers/controllerCarrito");
// //const authentication = require("../middlewares/authentication");
// const carritoRouter = Router();

// //prueba

// carritoRouter.post('/:email/cart', async (req, res) => {
//    const {products, total, date} = req.body, {email} = req.params
//    console.log(req.body)
   
//    try {
//        const data= await Pedido.findOne({where: {email: email}})

//        // Si no, obtenemos la imágen de gravatar para su perfil
//       //  const avatar = gravatar.url(email, {
//       //    s: "200", //size
//       //    r: "pg", //rate
//       //    d: "mm",
//       //  });
 
//        // Creamos el usuario
//        pedido = {
//          products,
//          total,
//          status:PENDIENTE,
//          date
//        };
//          pedido = await Pedido.create(pedido);

//       } catch (err) {
//          console.log(err);
//          next({});
//       }})

// carritoRouter.get("/:usuarioId",  carritoGet);


// //! Elimina un producto del carrito, independientemente de la cantidad de unidades que tenga
// carritoRouter.put("/delete", async (req, res, next) => {
//    const { carritoId, productoId } = req.body;

//    const destroy = await deleteFromCarrito(carritoId, productoId);
//    if (destroy.error) return next(destroy.error);

//    res.json(destroy);
// });


// //! Permite agregar un nuevo producto a un carrito o actualizar la cantidad de uno existente
// carritoRouter.put("/add", async (req, res, next) => {
//    const { carritoId, productoId, cantidad } = req.body;

//    const updated = await addToCarrito(carritoId, productoId, cantidad);
//    if (updated.error) return next(updated.error);

//    res.json(updated);
// });


// //! Elimina el carrito por completo junto con TODOS los productos que tenga
// carritoRouter.delete("/:usuarioId", async (req, res, next) => {
//    const destroy = await deleteCarrito(req.params.usuarioId);
//    if (destroy.error) return next(destroy.error);

//    res.json(destroy);
// });


// module.exports = carritoRouter;

const { Router } = require("express");
const { carritoPost, carritoGet, deleteCarrito, deleteFromCarrito, addToCarrito } = require("../controllers/controllerCarrito");
//const authentication = require("../middlewares/authentication");
const carritoRouter = Router();

//prueba


carritoRouter.post("/", carritoPost);


carritoRouter.get("/:usuarioId",  carritoGet);


//! Elimina un producto del carrito, independientemente de la cantidad de unidades que tenga
carritoRouter.put("/delete", async (req, res, next) => {
   const { carritoId, productoId } = req.body;

   const destroy = await deleteFromCarrito(carritoId, productoId);
   if (destroy.error) return next(destroy.error);

   res.json(destroy);
});


//! Permite agregar un nuevo producto a un carrito o actualizar la cantidad de uno existente
carritoRouter.put("/add", async (req, res, next) => {
   const { carritoId, productoId, cantidad } = req.body;

   const updated = await addToCarrito(carritoId, productoId, cantidad);
   if (updated.error) return next(updated.error);

   res.json(updated);
});


//! Elimina el carrito por completo junto con TODOS los productos que tenga
carritoRouter.delete("/:usuarioId", async (req, res, next) => {
   const destroy = await deleteCarrito(req.params.usuarioId);
   if (destroy.error) return next(destroy.error);

   res.json(destroy);
});


module.exports = carritoRouter;