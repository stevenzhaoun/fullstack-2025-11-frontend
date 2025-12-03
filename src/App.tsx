import Layout from './components/Layout'
import {Routes, Route} from 'react-router'
import ListUsers from './modules/users/ListUsers'
import CreateOrUpdateUser from './modules/users/CreateOrUpdateUser'
function Home() {
  return <div>Home</div>
}

function Dashboard() {
  return <div>Dashboard</div>
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
    <>
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
      </Routes>
    </>
  )
}

export default App
