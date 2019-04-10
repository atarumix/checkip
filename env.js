var url = require('url');

module.exports = async (req, res) => {
  res.end(JSON.stringify(req.headers) + "\n" + 
    JSON.stringify((url.parse(req.url,true)["query"])) + "\n")
}
