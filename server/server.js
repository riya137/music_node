const express = require("express");
const cors = require('cors');
const multer=require('multer');
const session = require('express-session');
const mongo = require("mongoose");
//var alert=require('alert-node');
var formidable = require('formidable')

mongo.connect("mongodb://localhost:27017/sound_users", { useNewUrlParser: true }, function (err, res) {
  if (err)
    console.log(err)
  else {
    console.log("Mongoose Connected..!!");
  }
});

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(session({
  secret: "Shh, its a secret!",
  resave: false,
  saveUninitialized: true,
}));

const storage=multer.diskStorage({
  destination:'assets/images/',
  filename:function(req,file,ch){
    ch(null,file.fieldname +'-' + Date.now()+ '.jpg')
    return this.filename;
  }
});

var upload = multer({ storage: storage });

var Schema = mongo.Schema;

var UsersSchema = new Schema({
  email: { type: String },
  password: { type: String },
});


var songSchema = new Schema({
  id: { type: String },
  film_name: { type: String },
  song_list: [
    {
      songId: { type: String },
      song_name: { type: String }
    },
    {
      songId: { type: String },
      song_name: { type: String }
    },
    {
      songId: { type: String },
      song_name: { type: String }
    }
  ],
  film_image: { type: String }

}, {
    collection: 'song_list'
  }
);
 
var FavoriteSchema = new Schema({
  email: { type: String },
  song_list: {
    type: Array
  },

},{
  collection: 'fav'
}
);


var users = mongo.model('users', UsersSchema);

var sl = mongo.model('song_list', songSchema);

var fl=mongo.model("fav",FavoriteSchema);

app.get("/", function   (req, res) {
  console.log("hello express..!!")
});

app.post("/signup", function (req, res) {
 //sess = req.session;
  const newUser = new users(req.body);
  newUser.save(function (err, data) {
    if (err)
      res.send(err);
    else {
      console.log(req.body);
      res.send({ data: "Data Inserted..!!", email: req.body.email });
    }
  });
});

app.post("/login", function (req, res) {

  var emailGet = req.body.email;
  var passwordGet = req.body.password;
  //if (emailGet === "admin@gmail.com" && passwordGet === "admin123") {
    //console.log("admin panel");
    //res.json({panel:"admin",email:req.body.email});
  //}
  //else {
    users.find({ email: emailGet }, function (err, doc) {
      if(err){
        console.log(err);
      }
      if (doc.length === 0) {
        res.end("Email Does not exists");
      } else if (doc[0].email === emailGet && doc[0].password === passwordGet)
         res.json({ email: doc[0].email });
        //console.log("success");
      else {
         console.log("invalid");
         //alert.alert("hello");
         
      }
    })
  
  //console.log("user panel");
  //res.write({panel:"user_panel"});
})

app.get("/film", function (err, res) {
  sl.find(function (err, doc) {
    if (err) throw err;
    res.json({
      data: doc
    })
  })
});

app.post("/viewPlaylist", function (req, res) {
  var _emailId=req.body.email;
  //console.log(_emailId);  
  fl.find({email:_emailId},function (err, doc) {
    if (err) throw err;
    res.json({
      //status: 'success',
      data: doc
    })
  })
});


app.post("/add",function(req,res){
  
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    if(err){
      console.log(err);     
    }  
    const newImages =new sl(fields,files);
    newImages.save(function(err,res){
      if(err){
        console.log(err);
      }else{
        //res.send({message:"success"});
        console.log(res);
      }
    })
  }).on("fileBegin",(name,file)=>{
    console.log(file.path);
    file.path = "/home/aspl/Desktop/uploads/"+file.name;
    console.log(file.path);
    res.send({"ok":true});
   })
  
})

app.post("/update",function(req,res){
  //console.log("update");
  //  const fav=new fl(req.body.email);

  var _email = req.body.email;
  var songID = req.body.songID;
  var _songName = req.body.songName;
  console.log(_songName);
  console.log(_email);
  var newData = {
    email:req.body.email,
    song_list : [
      {
        songID:songID,
        song_name:_songName
        
      } 
    ]
  };
  var newSong={
    song_list:[
      {
        songID:songID,
        song_name:_songName
      }
    ]
  }
  
  
  var fav = new fl(newData);
  //fl.find({email:_email},function(err,doc){
    //if(err){
      //console.log(err);
    //}
    //else if(doc.length==0){
      //console.log("save methos comes here");
      fav.save(function(err,data){
      if(err){
        console.log(err);
      }
        console.log("Record Inserted");
        res.send(data);
      })
    //}
    //else{
     // console.log("update method comes here");  
     //fl.find({email:_email},function(err,data){
       //if(err){
         // console.log(err);
        //}
        //else{
          
          //console.log(data);
          //console.log(newSong);
          //console.log(data.song_list);
          //updated=data.push(newSong);
          //console.log(updated);
          //res.send(data);
        //}
     //})
    
   // }
  })
 // {

   //fav.save(function(err,data){
     //if(err){
       //console.log(err);
     //}
     //console.log("Record Inserted");
     //res.send(data);
   //})
  //}
//})




app.listen(3000, "127.0.0.1", function () {
  console.log("Server Started At http://127.0.0.1:3000/");
});







