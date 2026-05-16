import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"


const router = createBrowserRouter([
  {path: "/", element : <Home/>},
  {path: "/login", element : <Login/>},
  {path: "/signup", element : <Signup/>},
  {path: "/product/:id", element : <ProductDetails/>},
])

export default function App(){
  return <RouterProvider router={router}/>;
}
