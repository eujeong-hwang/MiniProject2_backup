// express 모듈
const express = require('express')
const app = express()

// const port = 3000
const port = process.env.port || 3000;

// dotenv 모듈
const dotenv = require("dotenv")
dotenv.config()

//dotenv 추가해야 함! (userId, password, schemas/index의 db저장 되는 장소, secret-key)

app.use(express.json())

const cors = require('cors')
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// schemas와 연결
const connect = require('./schemas')
connect()

//api 설정
const postRouters = require('./routers/postRouter')
const userRouters = require('./routers/userRouter')
const commentRouters = require('./routers/commentRouter')

app.use('/user', [userRouters])
app.use('/post', [postRouters])
app.use('/comment', [commentRouters])


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
