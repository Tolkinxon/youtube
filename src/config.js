import path from 'node:path';


export const serverConfig = {
    dbPath: (fileName) => path.join(process.cwd(), 'db', fileName + '.json'),
    publicPath: (url) => path.join(process.cwd(), 'public', url),
    viewsPath: (fileName) => path.join(process.cwd(), 'src', 'views', fileName + '.html'),
    PORT: process.env.PORT || 5000,
    mimeTypes: {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/favascript",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".ico": "image/x-icon",
    }
 }