import http from "node:http";
import { serverConfig } from "./config.js";
import { sendFile } from "./middlewares/sendFile.js";
import { globalError } from "./utils/error.js";
const { PORT } = serverConfig;

const server = http.createServer((req, res)=>{
    const reqUrl = req.url.trim().toLowerCase();
    const reqMethod = req.method.trim().toUpperCase();

    try {
        if(reqUrl.includes('.') && reqMethod == 'GET') sendFile(reqUrl, res, true);
        if(!(reqUrl.startsWith('/api'))){
            if(reqUrl == '/' && reqMethod == "GET") return sendFile('index', res);
            if(reqUrl == '/about' && reqMethod == "GET") return sendFile('about', res);
            if(reqUrl == '/gallery' && reqMethod == "GET") return sendFile('gallery', res);
        }        
    } catch (error) {
        return globalError(res, error);
    }
    
});





server.listen(PORT, 'localhost', (err)=>{
    if(err) return console.log('Something went wrong!');

    console.log(`Server is runnig on port ${PORT}`);
});
