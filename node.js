// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });

//   if (req.url === "/" || req.url === "/abes") {
//     res.end(`
//       <h1>ABES Engineering College</h1>
//       <img 
//         src="https://www.google.com/imgres?q=abes%20engineering%20college%20pin%20code&imgurl=https%3A%2F%2Fwww.abes.ac.in%2Fassets%2FHomePage%2F2%2520About%2520ABES.jpg&imgrefurl=https%3A%2F%2Fwww.abes.ac.in%2F&docid=SJde-AFTQKNWnM&tbnid=CTV9WiOQYow0cM&vet=12ahUKEwiu9LvA0tOSAxX_UGwGHcA5F3YQnPAOegQIHBAB..i&w=2000&h=1598&hcb=2&ved=2ahUKEwiu9LvA0tOSAxX_UGwGHcA5F3YQnPAOegQIHBAB" 
//         width="450"
//       />
//       <br><br>
//       <a href="/contact">Contact</a><br>
//       <a href="/address">Address</a>
//     `);
//   }

//   else if (req.url === "/contact") {
//     res.end(`
//       <h1>Contact Page</h1>
//       <p>Email: info@abes.ac.in</p>
//       <p>Phone: 0120-7135112</p>
//       <a href="/abes">Go Back</a>
//     `);
//   }

  //else if (req.url === "/address") {
   // res.end(`
      //<h1>Address Page</h1>
     //// <p>ABES Engineering College</p>
      //<p>Ghaziabad, Uttar Pradesh</p>
 

// const fs =require('fs');
// fs.writerFileSync("./cse-c.txt", "hi we are coder in node ");


//const fs=require('fs');
//fs.writefile("./a.txt","abes is a college" ,()=>{ });

// unlink
  


//operating system

const os=require('os');
//console.log("platform",os.platform());

//console.log("platform",os.platform());
//console.log("userinfo",os.userinfo());
console.log("CPU",os.arch());
console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());
console.log("uptime",os.uptime());
console.log("home dir",os.homedir()); 


