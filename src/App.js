// import logo from './logo.svg';
// import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Menu from './pages/Menu';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/menu",
    Component: Menu,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
