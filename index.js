const express = require('express')
const app = express()

session = 0;
app.get('/', (req, res) => {
  session++;
  res.send(`The number of request for this page: ${session}`)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

