var fs = require("fs");
var path = require("path");

export class Utils {

	//Delete a folder, sub folders and files recursively
    static rmdir = (dir) =>  {
        if (fs.existsSync(dir)) {
            var list = fs.readdirSync(dir);
            for(var i = 0; i < list.length; i++) {
                var filename = path.join(dir, list[i]);
                var stat = fs.statSync(filename);

                if(filename == "." || filename == "..") {
                    // pass these files
                } else if(stat.isDirectory()) {
                    // rmdir recursively
                    Utils.rmdir(filename);
                } else {
                    // rm fiilename
                    fs.unlinkSync(filename);
                }
            }
            fs.rmdirSync(dir);
        }
    };
};