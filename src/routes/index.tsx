import { AllRoutes } from "./AllRoutes";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter(AllRoutes);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
