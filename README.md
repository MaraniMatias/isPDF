# isPDF
Check if is a PDF file valid

## Install
```shell
npm install ispdf --save
```

## Example
```javascript
const fs = require("fs");
const isPDF = require("isPDF");

const file = fs.readFileSync("./test.pdf")
console.log(isPDF(file));
```
