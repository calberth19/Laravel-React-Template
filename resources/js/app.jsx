import './bootstrap';

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider} from 'primereact/api';
//Prime components
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import Main from './Main';

const container = document.getElementById("app");
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    }
]);

root.render(
    <PrimeReactProvider>
        <RouterProvider router={router} />
    </PrimeReactProvider>
);
