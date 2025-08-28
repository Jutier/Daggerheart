import "./i18n";
import useHtmli18n from "./hooks/useHtmlI18n"
import BoardRender from "./components/ui/render/BoardRender";
import { BoardProvider } from "./contexts/BoardProvider";
import PrintFooter from "./components/ui/PrintFooter";
import SideBar from "./components/ui/menuBar/SideBar";
import BottomBar from "./components/ui/menuBar/BottomBar";

function App() {
	useHtmli18n()

	const savedTheme = localStorage.getItem("theme");
	if (savedTheme) {
		document.documentElement.setAttribute("data-theme", savedTheme)
	}

	return (
		<>
			<BoardProvider>
				<SideBar/>
				<BottomBar/>
				<BoardRender/>
			</BoardProvider>
			<PrintFooter/>
		</>
	);
}

export default App;
