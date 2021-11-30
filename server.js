import express from 'express'
import mongoose from 'mongoose'
const app = express()


//Define the schema for the Book model
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedDate: Date,
    description: String,
});

const Book = mongoose.model("Book", BookSchema);

// Define the API routes    
app.get("/books", function (req, res) {
    Book.find(function (err, books) {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
});

app.post("/books", function (req, res) {
    Book.create(req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
    console.log(req.body)
});

app.get("/books/:id", function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) {
            res.send(err)
        }
        res.json(book);
    });
});

app.put("/books/:id", function (req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
});

app.delete("/books/:id", function (req, res){
    Book.findByIdAndRemove(req.params.id, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
});

//start server
app.listen(3000, function () {
    console.log("server listening on port 3000")
});

