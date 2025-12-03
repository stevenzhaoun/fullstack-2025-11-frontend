import { Box } from "@mui/material";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import TopNav from "./TopNav";

export default function Layout() {
    return (
        <>
            <TopNav />
            <Box sx={{ display: 'flex' }}>
                <SideBar />
                <MainContent />
            </Box>
        </>
    )
}