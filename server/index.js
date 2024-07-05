const express = require('express')
// const cors = require('cors');
const {ConnectToDb} = require('./connect')
const {urlRouter,redirectRoute} = require('./routes/url')

const app = express();
const port = process.env.PORT||8001;
//connection
try {
  ConnectToDb('short-url');
} catch (error) {
  console.log(error)
}
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
//route
app.use("/api/url",urlRouter);
app.use("/",redirectRoute);

app.listen(port,()=>console.log(`Server started at port ${port}`))