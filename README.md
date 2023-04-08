
## Documentation

Navbar = Componente que contiene los links para la navegación dentro de la app, el logo y el ícono del carrito.

CartWidget = Componente del ícono del carrito de compras.
Footer= Componente con el diseño del footer.

CartContext = Componente con toda la programación para mostrar el estado del contenido del carrito de compras.

Item = Componente que se encarga de generar el diseño de los ítems que se muestran en la lista del catálogo.

ItemList = Componente que se encarga de pasarle los parámetros a Item para generar cada unidad en la lista del catálogo

ItemListContainer = Componente con toda la lógica y programación para leer la base de datos y obtener los items.

ItemDetailContainer = Componente con la funcionalidad necesaria para crear el ItemDetail, los detalles del producto.

ItemDetail = Componente con los estilos necesarios para tomar la información que envía ItemDetailContainer.

ItemCount = Componente para agregar o quitar n productos al carrito desde la sección de detalles del producto.

LoaDingSpinner = Componente con estilos que muestra el clásico spinner cuando está cargando el contenido.

CartView = Componente para generar el carrito de compras recibiendo la información que genera CartContext.

CheckOut = Componente para generar el paso final del proceso de compras, donde el cliente ingresa sus datos y realiza el pago.
