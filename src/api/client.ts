import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJyb2xlX2lkIjoxLCJpYXQiOjE3NjQ3MjcyNDgsImV4cCI6MTc2NDgxMzY0OH0.glxWCB78ZvJUpuVNqB9VCcjDwiP-ZkTe2ANsrhZ8KFg'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: { 'Authorization': `Bearer ${token}` }
});

export default instance