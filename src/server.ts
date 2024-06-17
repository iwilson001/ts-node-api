// Import the 'express' module
import express, { Request, Response } from 'express';
import {jsPDF} from 'jspdf';


// Create an Express application
const app = express();

// Set the port number for the server
const port = 3000;

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  const fileContent = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>PDF Example</title><style>body{font-family:Arial, sans-serif;line-height:1.6;margin:30px;}h1{text-align:center;color:#333;}.content{margin-top:20px;}.section{margin-bottom:30px;}.section h2{border-bottom:1px solid #ccc;padding-bottom:5px;}.section p{text-align:justify;}.footer{text-align:center;margin-top:50px;font-style:italic;color:#666;}</style></head><body><h1>Sample PDF Document</h1><div class="content"><div class="section"><h2>Introduction</h2><p>This is a sample PDF document generated from HTML. It demonstrates the structure and styling that can be used for converting content into PDF format.</p></div><div class="section"><h2>Main Content</h2><p>This section contains the main content of the document. You can add more paragraphs, images, or any other elements here.</p></div><div class="section"><h2>Conclusion</h2><p>Conclude your document with a summary or final thoughts. You can also include references or acknowledgments if needed.</p></div></div><div class="footer"><p>&copy; 2024 Sample PDF Document. All rights reserved.</p></div></body></html>';


  var doc = new jsPDF();
  doc.html(fileContent)
  
  doc.save('sample-document1.pdf');  

//   const doc = new jsPDF();
//   doc.html(fileContent, {
//     callback: function(doc) {
//         doc.save('sample-document.pdf');
//     },
//     x: 15,
//     y: 15
// });



  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});