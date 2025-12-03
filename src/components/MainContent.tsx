import { Box, Toolbar } from "@mui/material"
import { Outlet } from "react-router"
export default function MainContent() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Box>
                <Outlet/>
            </Box>

        </Box>
    )
}