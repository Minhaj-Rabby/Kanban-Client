import { Box } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton'
import { useDispatch } from "react-redux"
//import { setBoards } from "../redux/features/boardSlice"
import { useNavigate } from "react-router-dom"
//import boardApi from "../api/boardApi"
import { useState } from "react"

const Home = () => {
  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <LoadingButton
        variant='outlined'
        color='success'
        onClick={createBoard}
        //loading={loading}
      >
        Click here to create your first board
      </LoadingButton>
    </Box>
  )
}

export default Home