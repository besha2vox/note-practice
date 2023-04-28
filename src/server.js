const app = require('./app');
const { connectionDB } = require('./db');

const { PORT = 3001 } = process.env;

const startServer = async () => {
    try {
        await connectionDB();
        app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`);
        });
    } catch (error) {
        console.log(error.message);
    }
};

startServer();
