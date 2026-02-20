const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 3000;

// Function to Read Data
function readData() {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);
}

// Function to Write Data
function writeData(data) {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const method = req.method;

    // Root Route
    if (method === 'GET' && parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end("Server Running Successfully 🚀");
    }

    // READ - Get All Users
    if (method === 'GET' && parsedUrl.pathname === '/users') {
        const users = readData();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(users));
    }

    // CREATE - Add User
    if (method === 'POST' && parsedUrl.pathname === '/users') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const newUser = JSON.parse(body);
            const users = readData();

            newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

            users.push(newUser);
            writeData(users);

            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newUser));
        });

        return;
    }

    // UPDATE - Update User by ID
    if (method === 'PUT' && parsedUrl.pathname === '/users') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const updatedUser = JSON.parse(body);
            let users = readData();

            users = users.map(user =>
                user.id === updatedUser.id ? updatedUser : user
            );

            writeData(users);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedUser));
        });

        return;
    }

    // DELETE - Delete User by ID
    if (method === 'DELETE' && parsedUrl.pathname === '/users') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const { id } = JSON.parse(body);
            let users = readData();

            users = users.filter(user => user.id !== id);

            writeData(users);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "User Deleted Successfully" }));
        });

        return;
    }

    // Route Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("Route Not Found");

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});