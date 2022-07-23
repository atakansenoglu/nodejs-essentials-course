const path = require("path");
const util = require("util");
const v8 = require("v8");

// this will join filename and directory name together - need a www, files, uploads folder for this.
const dirUploads = path.join(__dirname, "www", "files", "uploads");

// DEPRECATED - USE 3RD PARTY MODULE
util.log(path.basename(__filename));
util.log(" ^ The name of the current file");
util.log(v8.getHeapStatistics());
