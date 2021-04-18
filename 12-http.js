const http = require('http');
const server = http.createServer((req,res)=> {
    if(req.url == '/'){
        // Use res.write and then res.end or just use res.end with the response text. Need to learn more on this
        // res.write('hello')
        // res.end()
        res.end(`
            <h1>Welcome!<h1>
            <p>Welcome to our home page</p>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
        `)
    }
    else if (req.url == '/about'){
        res.end(`
            <h1>About Us<h1>
            <p>About our website</p>
            <a href="/">Back Home</a>
            <a href="/about">About Us</a>
        `)
    }
    else {
        res.end(`
            <h1>Oops!<h1>
            <p>Page not found</p>
            <a href="/">Back home</a>
        `)
    }
})

server.listen(5000)