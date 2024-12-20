import {createBrowserRouter} from "react-router-dom";
import App from '../App.jsx';
import Home from '../pages/home/Home.jsx';
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/Books/CartPage.jsx";
import Checkout from "../pages/Books/Checkout.jsx";
import SingleBook from "../pages/Books/SingleBook.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import OrderPage from "../pages/Books/OrderPage.jsx";
import AdminRoute from "./AdminRoutes.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import AddBook from "../pages/dashboard/addBook/AddBook.jsx";
import UpdateBook from "../pages/dashboard/editBook/UpdateBook.jsx";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
        path: "/",
        element: <Home/>
        },
        {
            path: "/orders",
            element: <PrivateRoute><OrderPage/></PrivateRoute>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
          path: "/login",
          element: <Login/>

        },

        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/cart",
          element: <CartPage/>

        },
        {
          path: "/checkout",
          element: <PrivateRoute><Checkout/></PrivateRoute>
        },
        {
          path: "/books/:id",
          element: <SingleBook/>
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element: <AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path: "add-new-book",
          element: <AdminRoute>
            <AddBook/>
          </AdminRoute>
        },
        {
          path: "edit-book/:id",
          element: <AdminRoute>
            <UpdateBook/>
          </AdminRoute>
        },
        {
          path: "manage-books",
          element: <AdminRoute>
            <ManageBooks/>
          </AdminRoute>
        }
      ]
    }
  ]);

  export default router;