const server = require('./app');


//server port configuration
const port = process.env.PORT || 5000;


const startServer = () => {
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

startServer();