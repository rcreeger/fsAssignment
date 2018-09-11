var fs = require('fs');
var path = require('path');

//challenge 1
// fs.readFile('./challenge1/info.txt', 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// })

//challenge 2
// let names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
//   names = names + 'Richard, Jon, Michael, Chris, Frank'
//   fs.writeFileSync('./challenge2/info.txt', names)

//challenge 3
// fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', function(err) {
//   if (err) {
//     console.log(err)
//   }
// })

//challenge 4
// fs.mkdirSync('./challenge4/copyfolder')
// fs.copyFile('./challenge4/info.txt', './challenge4/copyfolder/info.txt', function(err) {
//   if (err) {
//     throw err;
//   }
// })

//challenge5
// function updateFile() {
//   let oldFile = fs.readFileSync('./challenge5/info.txt', 'utf-8')
//   let newFile = " ";
//   for (let i = 0; i < oldFile.length; i++) {
//     if (oldFile[i] === '-') {
//       newFile += " "
//     } else {
//       newFile += oldFile[i]
//     }
//   }
//   fs.writeFileSync('./challenge5/info.txt', newFile)
// }
// updateFile()

//challenge6
  fs.readdir("./challenge6", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      files.forEach(element => {
        if (path.extname(element) === ".txt") {
          console.log(element);
        }
      });
    }
  });
