const babel = require('babel-core');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

fs.readdir(SRC_DIR, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    fs.readFile(`${SRC_DIR}/${file}`, (err, input) => {
      if (err) throw err;

      const output = babel.transform(input, {
        presets: [
          ['env', { "targets": { "browsers": "last 2 versions" } }],
          'react'
        ],
        plugins: ['transform-object-rest-spread']
      }).code;
      fs.writeFile(`${OUT_DIR}/${file}`, output, (err) => {
        if (err) throw err;
      });
    });
  });
});