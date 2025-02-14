import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ImageGallery from "./components/ImageGallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },    
      { path: "/gallery", element: <ImageGallery /> },  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
