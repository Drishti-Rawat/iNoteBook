import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:5000/api/notes';

// export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
//     const response = await fetch(`${API_URL}/fetchallnotes`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'auth-token': AUTH_TOKEN
//         }
//     });
//     if (!response.ok) {
//         throw new Error('Failed to fetch notes');
//     }
//     return response.json();
// });

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async (_, { rejectWithValue }) => {
    const AUTH_TOKEN = localStorage.getItem('token')
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            return rejectWithValue(errorData.error || 'Failed to fetch notes');
        }
        return response.json();
    } catch (err) {
        return rejectWithValue(err.message || 'An error occurred');
    }
});

export const addNote = createAsyncThunk('notes/addNote', async (note) => {
    const AUTH_TOKEN = localStorage.getItem('token')
    const response = await fetch(`${API_URL}/addnote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': AUTH_TOKEN
        },
        body: JSON.stringify(note)
    });
    if (!response.ok) {
        throw new Error('Failed to add note');
    }
    return response.json();
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (id) => {
    const AUTH_TOKEN = localStorage.getItem('token')
    const response = await fetch(`${API_URL}/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': AUTH_TOKEN
        }
    });
    if (!response.ok) {
        throw new Error('Failed to delete note');
    }
    return id;
});

export const updateNote = createAsyncThunk('notes/updateNote', async ({ id, note }) => {
    const AUTH_TOKEN = localStorage.getItem('token')
    const response = await fetch(`${API_URL}/updatenote/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': AUTH_TOKEN
        },
        body: JSON.stringify(note)
    });
    if (!response.ok) {
        throw new Error('Failed to update note');
    }
    return response.json();
});

const initialState = {
    notes : [],
    loading : false,
    error : null

}

const NoteSlice = createSlice({
    name:"note",
    initialState,
   extraReducers: (builder)=>{
    builder
    .addCase(fetchNotes.pending,(state)=>{
        state.loading= true;
        state.error=null
    })
    .addCase(fetchNotes.fulfilled,(state,action)=>{
        state.notes= action.payload;
        state.loading= false
    })
    .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
    .addCase(addNote.fulfilled, (state, action) => {
        state.notes.push(action.payload);
    })
    .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter(note => note._id !== action.payload);
    })
    .addCase(updateNote.fulfilled, (state, action) => {
        const index = state.notes.findIndex(note => note._id === action.payload._id);
        if (index !== -1) {
            state.notes[index] = action.payload;
        }
    });
   }
})


export default NoteSlice.reducer;