import { Drawer, Box, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'

const drawerWidth = 240;

const links = [
    {label: 'Dashboard'},
    {label: 'Users'},
    {label: 'Roles'},
    {label: 'Products'},
    {label: 'Orders'},

]

export default function SideBar() {
    return <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
    >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {links.map((link) => (
                    <ListItem key={link.label} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={link.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
}