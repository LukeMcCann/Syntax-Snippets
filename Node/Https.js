var https      = require("https");
var fs         = require("fs");
var key_file   = "/path/to/file.pem";
var cert_file  = "/path/to/file.crt";
var passphrase = "this is optional";
var config     = {
  key: fs.readFileSync(key_file),
 cert: fs.readFileSync(cert_file)
};
if(passphrase) {
  config.passphrase = passphrase;
}

https.createServer(config,app).listen(443);
