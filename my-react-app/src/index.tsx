import React from 'react';
import ReactDOM from 'react-dom/client';
import FetchPage from './fetchPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import InputPage from './inputPage';
import TodoPage from './todoPage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([{
  path: "/",
  element: <FetchPage />
},
{
  path: "/inputPage",
  element: <InputPage />
},
{
  path: "/todoPage",
  element: <TodoPage />
}])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
