import { Box, MenuItem, FormControl, InputLabel, Select, TextField, Typography, type SelectChangeEvent, CircularProgress, Button } from "@mui/material";
import type { Role, User } from "../../types";
import { useState, useEffect } from "react";
import { listRoles } from "../../api/roles.api";
import { createUser, getUser, updateUser } from "../../api/users.api";
import { useNavigate, useParams } from "react-router";
import { useDataLoad } from "../../hooks/useDataLoad";

export default function CreateOrUpdateUser() {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        role_id: 0,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const isCreateView = params.id === 'add'
    const userId = params.id;

    const { data: roles, isLoading: isLoadingRoles } = useDataLoad(listRoles)
    const { data: userData, isLoading: isLoadingUser } = useDataLoad(async () => {
        return !isCreateView && await getUser(userId as string)
    })

    useEffect(() => {
        if (userData) {
            setUser({
                name: userData.name,
                email: userData.email,
                role_id: userData.role_id,
                password: userData.password
            })
        }
    }, [userData])

    useEffect(() => {
        if (roles && isCreateView) {
            setUser({
                ...user,
                role_id: roles[0]?.id,
            })
        }
    }, [roles])

    const handleInputChange = (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [field]: e.target.value,
        })
    }

    const handleRoleChange = (e: SelectChangeEvent<number>) => {
        setUser({
            ...user,
            role_id: Number(e.target.value),
        })
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(user)
        setIsSubmitting(true)
        if (!user.role_id) {
            return
        }
        if (isCreateView) {
            await createUser(
                user.name,
                user.email,
                user.password!,
                user.role_id,
            )
        } else {
            await updateUser(
                userId!,
                user.name,
                user.email,
                user.role_id,
            )
        }
        setIsSubmitting(false)
        navigate('/users')
    }

    if (isLoadingRoles || isLoadingUser) {
        return <CircularProgress />
    }

    return <div>
        <Typography variant="h4">{isCreateView ? 'Create User' : 'Update User'}</Typography>
        <Box
            component="form"
            display={'flex'}
            flexDirection={'column'}
            gap={3}
            mt={2}
            width={500}
            onSubmit={handleSubmit}
        >
            <TextField disabled={isSubmitting} type="text" label="Name" name="name" required variant="outlined" value={user.name} onChange={handleInputChange('name')} />
            <TextField disabled={isSubmitting} type="email" label="Email" name="email" required variant="outlined" value={user.email} onChange={handleInputChange('email')} />
            {isCreateView && <TextField disabled={isSubmitting} type="password" label="Password" name="password" required variant="outlined" value={user.password} onChange={handleInputChange('password')} />}

            <FormControl fullWidth>
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={user.role_id}
                    label="Role"
                    onChange={handleRoleChange}
                >

                    {roles?.map(role => {
                        return <MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <Button loading={isSubmitting} type="submit" variant="contained" color="primary">{isCreateView ? 'Create' : 'Update'}</Button>
        </Box>
    </div>
}