const fs = require('fs');
const csv = require('fast-csv');

/**
 * Call this like so: `node test-csv.js test.csv`
 * `test-csv.js` is the path to your CSV file.
 *
 * @param {String} fileName
 * @param {Function} callback
 */
function newTable(fileName, callback) {
    const stream = fs.createReadStream(fileName);
    const table =[];

    csv
     .fromStream(stream, {headers : true}, {objectMode : true})
     .on("data", function(row){
         table.push(row);
     })
     .on("end", function() {
		 callback(table);
     });
}

if (process.argv[2]) {
    newTable(process.argv[2], function(data) {
        console.log(data);
    });
}

module.exports = {
    newTable
};
