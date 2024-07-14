const express = require('express');
const router = express.Router(); // Định nghĩa router
const SinhVien = require('../models/sinhvienModel'); // Định nghĩa model

// Định nghĩa API GET:
router.get('/', async (req, res) => {
    try {
        const sinhviens = await SinhVien.find();
        res.render('sinhvien', { sinhviens: sinhviens });
        console.log(sinhviens);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Định nghĩa API POST:
router.post('/', async (req, res) => {
    console.log(req.body); // Kiểm tra dữ liệu nhận được
    const sinhvien = new SinhVien(req.body);
    try {
        await sinhvien.save();
        res.status(201).send(sinhvien);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Định nghĩa API PUT:
router.put('/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedSinhVien = await SinhVien.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!updatedSinhVien) {
            return res.status(404).send();
        }
        res.send(updatedSinhVien);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
});

// Định nghĩa API DELETE:
router.delete('/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const deletedSinhVien = await SinhVien.findByIdAndDelete(id);
        if (!deletedSinhVien) {
            return res.status(404).send();
        }
        res.send(deletedSinhVien);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});

module.exports = router;