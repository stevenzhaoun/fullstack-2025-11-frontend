import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useUser } from "../hooks/useUser";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email, password)
        setIsLoading(true)
        setError('')
        try {
            await login(email, password)
        } catch (error: any) {
            setError(error.response.data.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" >
            <Box component="form" width={400} display="flex" flexDirection="column" gap={4} onSubmit={handleSubmit}>
                <Typography variant="h3" textAlign="center">Welcome</Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField label="Email" type="email" fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" fullWidth required value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button loading={isLoading} variant="contained" color="primary" type="submit">Login</Button>
            </Box>
        </Box>
    )
}