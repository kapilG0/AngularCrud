const express=require('express');

const bodyParser=require('body-parser');
const cors=require('cors');
var mongoose=require('mongoose');
const app=express();
const userdata1=require('./user')
var ObjectId=require('mongoose').Types.ObjectId;
const url='mongodb://localhost:27017/userData1';
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log('database connected'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({origin:'http://localhost:4200'}));
app.get('/',(req,res)=>{
    res.send('hey');
});
app.post('/userdatafromdb',(req,res)=>{
    console.log(req.body.FirstName);
    var data=new userdata1({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        PhoneNumber:req.body.PhoneNumber,
        Email:req.body.Email,
        Password:req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword,

    })
    data.save((err,doc)=>{
        if(!err) {res.send(doc)}
        else{
            console.log('Error in saving user'+err);
        }
    })
    
})
// app.post('/login',(req,res)=>{
//     console.log(req.body,'login detail')
//     userdata.findOne({'Email':req.body.Email},(err,result)=>{
//         if(err){
//             console.log(err,'error occured')
//         }else{
//             console.log(result,'res in db');
//             var Email=result.Email;
//             var Password=result.Password;
//             console.log('email',Email);
//             console.log('password',Password)
//             // res.(res);
//             // res.json(res);
//         }
//   })
    
// })

app.get('/userdatafromdb',(req,res)=>{
    userdata1.find((err,databasedata)=>{
        if(!err) res.send(databasedata);
        else{
            console.log('error in reteriving data  from database'+JSON.stringify(err))
        }
    })
})

app.get('/userdatafromdb/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with this id:${req.params.id} `)
    userdata1.findById(req.params.id,(err,doc)=>{
        if(!err) res.send(doc)
        else{
            console.log('error in finding user with id')
        }
    })
})

app.put('/userdatafromdb/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with this id:${req.params.id} `)
    var data={
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        PhoneNumber:req.body.PhoneNumber,
        Email:req.body.Email,
        Password:req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword
    
    };
    userdata1.findByIdAndUpdate(req.params.id,{$set:data},{new:true},(err,doc)=>{
        if(!err) res.send(doc);
        else{
            console.log('error in updating user with id')
        }
})
});
app.delete('/userdatafromdb/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with this id:${req.params.id} `)
    userdata1.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err) res.send(doc);
        else{
            console.log('error in deleting user with id')
        };
    })
});
// app.get('/data',(req,res)=>{
//     console.log(req.Email,'data of email');
//     console.log(req.Password,'data of password')
// })
app.listen(8000,()=>console.log('server started'))