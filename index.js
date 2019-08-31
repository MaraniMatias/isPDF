module.exports = function isPDF(buf) {
  // console.log(buf.lastIndexOf("%PDF-")); // %PDF-1.7
  // console.log(buf.lastIndexOf("%%EOF")); // %%EOF
  return (
    Buffer.isBuffer(buf) && buf.lastIndexOf("%PDF-") === 0 && buf.lastIndexOf("%%EOF") > -1
  );
}
