const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Route 1 : Fetch all the notes using get - /api/notes/fetchallnotes , login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log(error);
      return res.status(500).send("Internal Server  error occured");
    }
 
});

// Route 2 : Add the notes  using post - /api/notes/addnote, login required
router.post(
  "/addnote",
  fetchUser,
  [
    body("title")
      .isLength({ min: 4, max: 15 })
      .withMessage("title must not be more then 15 characters"),
    body("description")
      .isLength({ min: 10 })
      .withMessage("Description must atleast 10 charcters "),
  ],
  async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const note = new Notes({
          title,
          description,
          tag,
          user: req.user.id,
        });
    
        const savedNotes = await note.save()
        res.json(savedNotes)
    } catch (error) {
        console.log(error);
      return res.status(500).send("Internal Server  error occured");
    }
   
  }
);


// Route 3 : update the note using Put (put is use for updation) - /api/notes/updatenote:id , login required
router.put("/updatenote/:id",fetchUser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // create ne note objec
        const newNote = {}
            if(title){newNote.title=title};
            if(description){newNote.description=description};
            if(tag){newNote.tag=tag};
         

        //   find the note to be updated and update it
        let note = await Notes.findById(req.params.id)

        if(!note){
            res.status(404).send("Not found");
        }

        if(note.user.toString() !==req.user.id){
            return res.status(401).send("not allowed")
        }

        note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.json({note});

    } catch (error) {
        console.log(error);
      return res.status(500).send("Internal Server  error occured");
    }
 
});


// Route 1 : delete the note using Put (put is use for updation) - /api/notes/updatenote:id , login required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
    try {
        

        //   find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id)

        if(!note){
            res.status(404).send("Not found");
        }

        // verify the user who is deleting the note
        // ALLOW DELETION only if user owns this note

        if(note.user.toString() !==req.user.id){
            return res.status(401).send("not allowed")
        }


        
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"sucess":" note have been deleted",note:note});

    } catch (error) {
        console.log(error);
      return res.status(500).send("Internal Server  error occured");
    }
 
});

module.exports = router;
