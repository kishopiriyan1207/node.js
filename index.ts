import { createServer } from "http";

const server = createServer((req, res) => {
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
