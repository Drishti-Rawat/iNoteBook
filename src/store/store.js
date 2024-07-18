import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./NotesSlice";


const store = configureStore({
    reducer: {
        notes:NotesSlice
       
    }
})

export default store