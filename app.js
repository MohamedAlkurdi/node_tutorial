const http = require('http');
const port = 5000;

const server =  http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("suck on home page");
    }
    if(req.url === '/about'){
        res.write("suck on about");
        res.end();
    }
    res.end(`
    <h1>suck on not found</h1>
    <p>the page was not found loserrrrr.</p>
    <a href="/">go back</a>
    `)
    console.log(res);
})

server.listen(port);