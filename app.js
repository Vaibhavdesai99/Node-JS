
let http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type' ,'text/html')

    // parse the url
    const url = req.url
 

    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
    } else if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
    } else if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node.js Project</title></head>');
        res.write('<body><h1>Welcome to my Node.js project</h1></body>');
        res.write('</html>');

}})

server.listen(3000)