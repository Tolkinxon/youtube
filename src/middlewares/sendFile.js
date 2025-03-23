import { serverConfig } from "../config.js";
import path from "node:path";
const { publicPath, viewsPath, mimeTypes } = serverConfig;
import fs from 'node:fs';


export const sendFile = (file, res, isStatic = false) => {
    const pullPath = isStatic ? publicPath(file) : viewsPath(file);
    
    if(fs.existsSync(pullPath)) {
        const contentType = mimeTypes[path.extname(pullPath)];
        res.writeHead(200, {"content-type": `${contentType}`})
    }
}