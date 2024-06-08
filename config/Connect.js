import express from 'express'
import mongoose from 'mongoose'

const app=express()

const connect=()=>{
     mongoose.connect("mongodb://127.0.0.1:27017/doctorappoinment")
     .then(()=>{
        console.log("databse coonected")
     })
     .catch((err)=>{
        console.log(err)
     })

}
export default connect