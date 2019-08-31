# isPDF
Check if is a PDF file valid.

## Why
I have a file with the extension "PDF" but the file is damaged because the download was interrupted, so I need to know if it is a real PDF file.

## Install
```shell
npm install is-pdf-valid --save
```

## Example
```javascript
const fs = require("fs");
const isPDF = require("is-pdf-valid");

const file = fs.readFileSync("./test.pdf")
console.log(isPDF(file));
```
