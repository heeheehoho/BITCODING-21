var express = require('express');
var multer = require('multer')

var _storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/')
  },
  filename: function(req, file, cb){
    
    cb(null, file.originalname)
  }
})
var upload = multer({storage: _storage})

var app = express();


// 업로드 파일 접근
app.use('/user', express.static('uploads'));

app.set('view engine', 'jade');
app.set('views', './views');



app.get('/upload', function(req, res){
  res.render('upload');
});

app.post('/upload', upload.single('userfile'), function(req, res){
  res.send('Uploaded!! ' + req.file.originalname);
})

app.listen(3001, function(){
  console.log('connected 3001 port!');
});
