import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Contact />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='terms' element={<Terms />} />
      </Route>
    ));
  
    return(
      <RouterProvider router={router}/>
    )
}

export default App