import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/teste",
    element: <div>Hello testes!</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}
