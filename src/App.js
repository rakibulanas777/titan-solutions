import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import PP from "./pages/PP/PP";
import TOS from "./pages/TOS/TOS";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<MobileNavbar />
			<Routes>
				<Route path="/tos" element={<TOS />} />
				<Route path="/privacy" element={<PP />} />
				<Route path="/" element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
