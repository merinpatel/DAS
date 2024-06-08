import express from 'express'
import env from 'dotenv'
import connect from './Config/Connect.js'
import router from './Routes/UserRoutes.js'
import routeradmin  from './Routes/adminRoutes.js'
import doctorrouter from './Routes/doctorRoutes.js'
env.config()
const app=express()
app.use(express.json())
app.use("/api/v1/user",router );
app.use("/api/v1/admin",routeradmin)
app.use("/api/v1/doctor",doctorrouter)

connect()
app.get("/",(req,res)=>{
    res.status(200).send({msg:"server ruuniing"})
})
const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log("server is listen")
})