import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { Providers } from "./providers/providers.tsx";
import { Create, Home, Update } from "./routes";
import { ChecklistLayout } from "./routes/layouts/ChecklistLayout.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/" element={<ChecklistLayout />}>
						<Route path="/create" element={<Create />} />
						<Route path="/update/:id" element={<Update />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Providers>
	</StrictMode>
);
