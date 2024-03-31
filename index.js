import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

let app = express()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'static/upload/'); // Destination folder
    },
    filename: (req, file, cb) => {
        // Generating a unique name for the file
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        let fileName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
        req.fileName = fileName
        cb(null, fileName); // File name
    }
});

const upload = multer({ storage: storage });

app.use(express.static('static'))

app.get('/', async function (req, res) {
    res.render('index.ejs')
})

app.post('/file', upload.single('photo'), async function (req, res) {
    // res.send({fileName: 'http://localhost:3000/upload/'+req.fileName})
    res.redirect(`/file/${req.fileName}`)
})


app.get('/file/:filename', async function (req, res) {
    let fileName = req.params.filename
    // res.redirect(`http://localhost:3000/upload/${fileName}`)
    res.render('file.ejs', {
        img: `http://localhost:3000/upload/${fileName}`
    })
})






app.get('/files', async function (req, res) {
    const folderPath = './static/upload'; // Change this to your folder path

// Read the contents of the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  // Log the file names
  console.log('Files in the folder:');
  
  res.render('files.ejs', {images: files})
});
})
app.listen(3000, () => {
    console.log('http://localhost:3000')
})
