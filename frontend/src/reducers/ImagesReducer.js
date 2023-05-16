import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [],
}

const imagesSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        addArrayofImages(state, action){
            console.log(action.payload)
            state.images = action.payload
        },
        addImage(state, action){
            console.log(action.payload+' reducer add single');
            state.images = [...state.images, action.payload]
        },
    }
})

export const {addArrayofImages, addImage} = imagesSlice.actions

export const selectImages = (state) => {
    return state.image.images
}

export default imagesSlice.reducer;