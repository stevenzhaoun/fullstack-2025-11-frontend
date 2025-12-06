import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { useUser } from '../hooks/useUser'
import { useState } from 'react'

export default function TopNav() {
    const { userData, logout } = useUser()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const handleLogout = () => {
        logout()
    }

    return <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap component="div">
                Business Management System
            </Typography>
            
            <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                <Typography id="profile-button" onClick={handleClick} >{userData?.name}</Typography>
                <Typography onClick={handleLogout} sx={{cursor: 'pointer', border: '1px solid white', padding: '5px 10px', borderRadius: '5px'}} noWrap component="div">Logout</Typography>
            </Box>
        </Toolbar>
    </AppBar>
}