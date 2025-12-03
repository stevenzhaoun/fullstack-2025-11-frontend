import { Box, Toolbar, Typography } from "@mui/material"
export default function MainContent() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Box>
                <Typography sx={{ marginBottom: 2 }}>
                    Main content
                </Typography>
            </Box>

        </Box>
    )
}