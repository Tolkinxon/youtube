import http from "node:http";
import { serverConfig } from "./config.js";
import { sendFile } from "./middlewares/sendFile.js";
const { PORT } = serverConfig;

const server = http.createServer((req, res)=>{
    const reqUrl = req.url.tirm().toLowerCase();
    const reqMethod = req.method.trim().toUpperCase();

    if(!(reqUrl.startWidth('/api'))){
        if(reqUrl == '/' && reqMethod == "GET") return sendFile('index', res);
    }


});

server.listen(PORT, 'localhost', (err)=>{
    if(err) return console.log('Something went wrong!');

    console.log(`Server is runnig on port ${PORT}`);
});

