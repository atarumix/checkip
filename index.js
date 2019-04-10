module.exports = async (req, res) => {
  res.end(req.headers['x-real-ip'] + "\n")
}
