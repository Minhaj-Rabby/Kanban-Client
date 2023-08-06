import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../utils/authUtils'
import { Box} from '@mui/material'
import Loading from '../common/Loading'
import Sidebar from '../common/Sidebar'

const AppLayout = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated()
      if (!user) {

        navigate('/Login')
      }
      else {
        //save User
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