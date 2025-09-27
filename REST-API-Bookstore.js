const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());


mongoose.connect("<DB_STRING>",{
    useNewUrlParser : true,
      useUnifiedTopology: true,
}).then(()=> console.log("Mongo Connected Successfully ✅")).catch(()=> console.error("Error Connecting Mongo", err))


const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
});

const Book = mongoose.model("Book", bookSchema);

app.post("/add-book", (req, res)=>{
    const book = new Book(req.body)
    book.save()
    res.json({ message: "Book Saved Successfully", book });

})
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (deletedBook) {
      res.json({ message: "Book Deleted Successfully", deletedBook });
    } else {
      res.status(404).json({ message: "Book Not Found" });
    }
});


app.listen(3000,()=>{
    console.log("Server Running on Port : 3000");
    
})
