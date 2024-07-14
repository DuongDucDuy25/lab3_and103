//xây dựng server
const express = require('express');
const mongoose = require('mongoose');
const sinhVienRouter = require('./routes/sinhvienRoute');

const app = express();
mongoose.connect('mongodb://localhost:27017/AND103')
.then(() => {
    console.log("Kết nối thành công");
}).catch((error) => {
    console.log("Kết nối thất bại " + error);
});
app.use(express.json());
//su dung router
app.use('/sinhvien',sinhVienRouter);
// su dung viewEn
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server đang chạy trên cổng 3000');
});
