import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { router } from "./routes/router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
		<ToastContainer />
	</AuthProvider>,
);
