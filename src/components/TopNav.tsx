import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export default function TopNav() {
    return <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap component="div">
                Business Management System
            </Typography>
            <Box>
                <Typography noWrap >My User</Typography>
            </Box>
        </Toolbar>
    </AppBar>
}