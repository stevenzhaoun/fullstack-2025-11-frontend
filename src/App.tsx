import Layout from './components/Layout'
import {Routes, Route} from 'react-router'
import ListUsers from './modules/users/ListUsers'
import CreateOrUpdateUser from './modules/users/CreateOrUpdateUser'
import Login from './components/Login'
import { RootContainer } from './components/RootContainer'
import { Dashboard } from './modules/dashboard/Dashboard'
function Home() {
  return <div>Home</div>
}

function Roles() {
  return <div>Roles</div>
}

function Products() {
  return <div>Products</div>
}

function Orders() {
  return <div>Orders</div>
}

function App() {
  return (
    <RootContainer>
      {/* <Layout /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='users' element={<ListUsers />}/>
          <Route path='users/:id' element={<CreateOrUpdateUser />}/>
          <Route path='roles' element={<Roles />}/>
          <Route path='products' element={<Products />}/>
          <Route path='orders' element={<Orders />}/>
        </Route>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </RootContainer>
  )
}

export default App
