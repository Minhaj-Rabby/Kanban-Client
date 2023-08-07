import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authUtils from '../../utils/authUtils'
import Loading from '../common/Loading'
import Sidebar from '../common/Sidebar'
import { setUser } from '../../redux/features/userSlice'

const AppLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated()
      if (!user) {

        navigate('/Login')
      }
      else {
        //save User
        dispatch(setUser(user))
        setLoading(false)

      }

    }
    checkAuth()
  }, [navigate])
  return (
    loading ? (
      <Loading fullheight></Loading>
    ) : (

      <Box sx={{

        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Sidebar>
          <Box sx={{
            flexGrow:1,
            p:1,
            width:'max-content'
          }}>
            <Outlet></Outlet>

          </Box>
        </Sidebar>

      </Box>

    )
  )
}

export default AppLayout