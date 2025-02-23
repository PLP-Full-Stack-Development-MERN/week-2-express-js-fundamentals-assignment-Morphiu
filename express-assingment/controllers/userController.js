let users = [
    { id: 1, name: 'Mike', email: 'mikemghneyi5@gmail.com' },
    { id: 2, name: 'Sera', email: 'Seradove5@gmail.com' },
    { id: 3, name: 'Cory', email: 'corykratos34@gmail.com' }
];

//Retrieve all users
exports.getUsers = (req, res) => {
    res.json(users);
};

//Retrieve a single user by ID
exports.getUserByID = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) { return res.status(404).send('User not found') };
    res.json(user);
};

//Create a new user
exports.createUser = (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name, email: req.body.email };
    users.push(newUser);
    res.status(201).json(newUser);
};

//Updating a new user
exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {return res.status(404).send('User not found')};
    Object.assign(user, req.body);
    res.json(user);
};

// Removing a user
exports.deleteUser = (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.param.id));
    res.status(204).send();
};
