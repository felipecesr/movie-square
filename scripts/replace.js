const fs = require('fs');

const fileName = 'dist/index.html';

fs.readFile(fileName, 'utf8', (err,data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/="\//g, '="/movie-square/');

  fs.writeFile(fileName, result, 'utf8', err => {
     if (err) return console.log(err);
  });
});
