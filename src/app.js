import express from "express";
import morgan from "morgan";
import cors from "cors"; //servira para que sea posible comunicarse a varios servidores
import TaskRoutes from "./routes/task.routes";
import AdminRoutes from "./routes/admin.routes";
import MotRoutes from "./routes/motorista.routes";
import ClientesRoutes from "./routes/clientes.routes";



const app = express();

// settigs
app.set("port", 3001);

//middlewares

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()); //entender  json que envian el cliente
app.use(express.urlencoded({extended : false}));
app.use("/api/task", TaskRoutes); //utilizando la ruta, la url ruta sera "/api/rutasolucitada"
app.use("/api/admin", AdminRoutes); //utilizando la ruta, la url ruta sera "/api/rutasolucitada"
app.use("/api/motorista", MotRoutes); 
app.use("/api/cliente", ClientesRoutes); 
app.use(express.static('public'));


//routes
app.get("/si", (req, res) => {
    console.log("Welcome to my aplications");
    res.send('si')
});



export default app;
