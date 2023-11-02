const fs = require("fs");
// const pdf2html = require("pdf2html");

const pdftohtml = require("pdftohtmljs");

// See presets (ipad, default)
// Feel free to create custom presets
// see https://github.com/fagbokforlaget/pdftohtmljs/blob/master/lib/presets/ipad.js
const convert = async (file, output, preset) => {
  const converter = new pdftohtml(file, output);

  // If you would like to tap into progress then create
  // progress handler
  converter.progress((ret) => {
    const progress = (ret.current * 100.0) / ret.total;

    console.log(`${progress} %`);
  });

  try {
    // convert() returns promise
    await converter.convert(preset || "ipad");
  } catch (err) {
    console.error(`Psst! something went wrong: ${err.msg}`);
  }
};

// call method
convert("./Olivia-Resume.pdf", "sample.html");
