var fs = require('fs')
  , path = require("path")
  ;

describe("Read File", function() {
  var allReaded = true
    , data = {}
    ;

  //
  function readFiles(dirname, onFileContent, onError) {
    var files = fs.readdirSync(dirname);

    files.forEach(function(filename) {
      var content = fs.readFileSync(dirname + filename, 'utf-8');
      onFileContent(filename, content);
    });
  }

  it("checando", function() {

    readFiles(path.join(__dirname, '../', 'class-02/'), function(filename, content) {
        data[filename] = content.match(/```js[\s\S]+```/gi);
      }, function(error) {
        throw err;
    });

    console.log('data: ', JSON.stringify(data));
    expect(allReaded).toBe(true);
  });
});
