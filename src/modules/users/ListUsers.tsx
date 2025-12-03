import { Box, Typography, Button } from '@mui/material'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { listUsers } from '../../api/users.api'
import { useEffect, useState } from 'react';
import type { Role, User } from '../../types';
import { useNavigate } from 'react-router';
import { useDataLoad } from '../../hooks/useDataLoad';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'User ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1
    },
    {
        field: 'email',
        headerName: 'Email',
        flex: 1
    },
    {
        field: 'role',
        headerName: 'Role',
        flex: 1,
        valueGetter: (value: Role) => value.name
    },
];


export default function ListUsers() {
    // const [users, setUsers] = useState<User[]>([])
    // const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { data: users, isLoading: isLoadingUsers, refetch } = useDataLoad(listUsers)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true)
    //         const data = await listUsers()
    //         setUsers(data)
    //         setLoading(false)
    //     }
    //     fetchData()
    // }, [])
    // dependency array / deps array
    // The callback function is called when the items in the deps array change
    // The callback function will be called once when the component is mounted
    // Empty array is for initial loading

    const handleAddUser = () => {
        navigate('/users/add')
    }

    return (
        <Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={2}>
                <Typography variant='h4'>Users</Typography>
                <Box display={'flex'} gap={2}>

                    <Button variant='contained' color='primary' onClick={handleAddUser}>Add User</Button>
                    <Button variant='outlined' color='primary' onClick={refetch}>Refresh</Button>
                </Box>
            </Box>
            <DataGrid
                loading={isLoadingUsers}
                rows={users || []}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                onRowClick={(rowData) => {
                    navigate(`/users/${rowData.row.id}`)
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
        </Box>
    )
}