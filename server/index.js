import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(express.json())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/tpfpLoginRegister', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    console.log('DB connected')
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model('User', userSchema)

const port=9005
//Routes

app.post('/login', (req, res)=> {
    const {email, password} = req.body
    User.findOne({email: email}, (error, user) => {
        if(user){
            if(password===user.password) {
                res.send({message: 'Login Successful', user: user})
            }
            else {
                res.send({message: 'Password did not match'})
            }
        }
        else {
            res.send({message:'User not registered'})
        }
    })
})

app.post('/signup', (req, res)=> {
    const {name, email, password} = req.body
    User.findOne({email: email}, (error, user) => {
        if(user){
            res.send({message: 'User already registered'})
        }
        else {
            const user=new User({
                name,
                email,
                password
            })
            user.save(error => {
                if(error) {
                    res.send(error)
                }
                else {
                    res.send( { message: 'Signed up successfully'})
                }
            })
        }
    })
    
})

app.listen(port, () => {
    console.log('Server started at', port)
})