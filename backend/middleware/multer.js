import multer from "multer";
const storage=multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})
const upload=multer({storage})
export default upload
// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // ✅ Local folder where multer temporarily stores files
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // ✅ Ensures unique names
//   }
// });

// const upload = multer({ storage });
// export default upload;

