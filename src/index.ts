import express from "express";
const app = express();

import indexRoutes from './routes/index'

app.use(indexRoutes);

app.listen(3000,() => {
    console.log("Server on port",3000)
})