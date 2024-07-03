const express = require('express')
const {ConnectToDb} = require('./connect')
const {urlRouter,redirectRoute} = require('./routes/url')

const app = express();
PORT = 8001;
//connection
try {
  ConnectToDb('short-url');
} catch (error) {
  console.log(error)
}

app.use(express.json());
//route
app.use("/url",urlRouter);
app.use("/",redirectRoute);

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))