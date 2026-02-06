const http = require('http');
const fs= require('fs').promises;

async function readfileExample(){
    try{
        const data=await fs.readFile('myfile.txt','utf8');
        console.log("File content:",data);
    }catch(err){
        console.error("Error reading file:",err);
    }
  }
readfileExample();

// const{promisify}=require('util');
// const readFileAsync=promisify(fs.readFile);

// async function readWithPromisify(){
//     try{
//         const data=await readFileAsync('myfile.txt','utf8');
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// readWithPromisify();

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        try {
            const html = await fs.readFile('index.html', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        } catch (err) {
            res.writeHead(500);
            res.end("Internal Server Error");
        }
    } else {
        res.writeHead(404);
        res.end("Page Not Found");
    }
});

const PORT=3000;  
server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:3000`);
});