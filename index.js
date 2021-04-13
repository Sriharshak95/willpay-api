let express = require('express')
require('./db/mongoose')
let app = express()
let userRouter = require('./router/user')
let postRouter = require('./router/post')
const cors = require("cors")

const port = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())
app.use('/api',userRouter)
app.use('/api',postRouter)

app.listen(port,()=>{
    console.log('Running resthub on port '+port)
})

const bcrypt = require('bcryptjs')

const myFunction = async () =>{
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red12345!',hashedPassword)
    console.log(isMatch)
}

myFunction()