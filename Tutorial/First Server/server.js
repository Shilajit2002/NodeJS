const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Animated Website</title>
  
      <style>
          * {
              margin: 0;
              padding: 0;
          }
  
          body{
            background-color: black;
          }

          header {
              height: 50px;
              background-color: #2b2a33;
          }
  
          .bar {
              width: 0;
              height: 2px;
              background-color: red;
              animation: Bar 1s linear 1ms 1 alternate;
          }
  
          @keyframes Bar {
              0% {
                  width: 0;
              }
  
              50% {
                  width: 80vw;
              }
  
              100% {
                  width: 100vw;
              }
          }
  
          .slider{
              height: 350px;
              display: flex;
              overflow: hidden;
              margin: auto;
              justify-content: center;
              background-color:white;
          }
          .img1{
              transform: translate(-8vw);
              animation: slide1 1s forwards 2s;
          }
  
          .img2{
              transform: translate(0vw);
              animation: slide2 1s forwards 2s;
          }
  
          .img3{
              transform: translate(8vw);
          }
  
          @keyframes slide1 {
             0%{
              transform: translate(-8vw);
             }
             100%{
              transform: translate(85vw);
             }
          }
  
          @keyframes slide2 {
              0%{
              transform: translate(0vw);
             }
             100%{
              transform: translate(92vw);
             }
          }
  
          .img4{
              width: 200px;
              height: 200px;
              border-radius: 50%;
              animation: rotate 1s infinite alternate;
          }
  
          @keyframes rotate {
              0%{
              transform: rotate(30deg);
             }
             50%{
              transform: rotate(180deg);
             }
             100%{
              transform: rotate(360deg);
             }
          }
  
          footer{
              padding-top: 40px;
              padding-left: 40px;
              height: 250px;
              background-color: black;
          }
      </style>
  </head>
  
  <body>
      <header>
          <div class="bar"></div>
      </header>
      <main>
          <div class="slider"> <div class="img1"><img src="https://source.unsplash.com/collection/190727/1600x372" alt=""></div>
          <div class="img2"><img src="https://source.unsplash.com/collection/190727/1600x373" alt=""></div>
          <div class="img3"><img src="https://source.unsplash.com/collection/190727/1600x374" alt=""></div></div>
      </main>
      <footer>
          <img class="img4" src="https://ringtoneswallpapers.mobi/wp-content/uploads/2020/09/blue-dragon.jpg" alt="">
          <img class="img4" src="https://ringtoneswallpapers.mobi/wp-content/uploads/2020/09/blue-dragon.jpg" alt="">
          <img class="img4" src="https://ringtoneswallpapers.mobi/wp-content/uploads/2020/09/blue-dragon.jpg" alt="">
          <img class="img4" src="https://ringtoneswallpapers.mobi/wp-content/uploads/2020/09/blue-dragon.jpg" alt="">
          <img class="img4" src="https://ringtoneswallpapers.mobi/wp-content/uploads/2020/09/blue-dragon.jpg" alt="">
          <img class="img4" src="https://ringtoneswallpapers.mobi/wp-content/uploads/2020/09/blue-dragon.jpg" alt="">
      </footer>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});