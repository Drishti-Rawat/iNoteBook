const express = require('express')
const router = express.Router()

router.get('/' ,(req,res)=>{
    obj={
        a:'hjtgjt',
        number:233
    }
    res.json(obj)
})

module.exports = router