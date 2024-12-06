import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  phone: false,
  tab : false,
  lap:false,
  desktop:false,
  extraLage:false
}

export const counterSlice = createSlice({
  name: 'currentwidth',
  initialState,
  reducers: {
   setPhone: (state) => {
    
      state.phone = true;
    },
    setTab: (state) => {
    
      state.tab = true;
    },
    setLap: (state) => {
    
      state.lap = true;
    },
    setDesktop: (state) => {
    
      state.desktop = true;
    },
    setExtraLage: (state) => {
    
      state.extraLage = true;
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
  
  },
})

export const { setPhone,setTab,setLap,setDesktop,setExtraLage } = counterSlice.actions

export default counterSlice.reducer