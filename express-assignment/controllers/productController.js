let products = [
    { prod_id: 1, name: 'Mouse', price: 500 },
    { prod_id: 2, name: 'Laptop', price: 50000 },
    { prod_id: 3, name: 'keyboard', price: 1000 },
    { prod_id: 4, name: 'MousePad', price: 300 }
];

// Retrieve all products
exports.getAllProducts = (req, res) => {
    res.json(products);
};

// Retrieve product based on ID
exports.getProductByID = (req, res) => {
    const product = products.find(u => u.prod_id === parseInt(req.params.prod_id));
    if (!product) { return res.status(404).send('Product not found') };
    res.json(product)
};

// Create a new product
exports.createNewProduct = (req, res) => {
    const newProduct = { prod_id: products.length + 1, name: req.body.name, price: req.body.price };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

// Update a new product
exports.updateProduct = (req, res) => {
    const Product = products.find(u => u.prod_id === parseInt(req.params.prod_id));
    if (!Product) { return res.status(404).send('Product not found') };
    Object.assign(Product, req.body);
    res.json(Product);
};

// Removing a product
exports.deleteProduct = (req, res) => {
    products = products.filter(u => u.prod_id !== parseInt(req.params.prod_id));
    res.status(204).send();
};