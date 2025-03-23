import http from "node:http";
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res)=>{
    const reqUrl = req.url.tirm().toLowerCase();
    const reqMethod = req.method.trim().toUpperCase();


});

server.listen(PORT, 'localhost', (err)=>{
    if(err) return console.log('Something went wrong!');

    console.log(`Server is runnig on port ${PORT}`);
});

