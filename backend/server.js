const express = require('express')
const cors = require("cors");

const app = express()
app.use(cors({ origin: true }));

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})