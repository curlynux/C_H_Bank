import express from "express";
import next from "next";

const port      =   parseInt(process.env.PORT, 10) || 1337
const dev       =   process.env.NODE_ENV !== "production";
const app       =   next({ dev });
const handle    =   app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port,"0.0.0.0", err => {
        if (err) throw err
            console.log(`server running on localhost:${port} :D !`);
            
    });
});