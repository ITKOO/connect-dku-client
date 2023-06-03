import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StandBy from "./pages/StandBy";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Intro from "./pages/Intro";
import Result from "./pages/Result";
import Members from "./pages/Members";
import Write from "./pages/Write";
import MissionPosts from "./pages/MissionPosts";
import ChatterPosts from "./pages/ChatterPosts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}></Route>
			<Route path="signin" element={<SignIn />}></Route>
			<Route path="signup" element={<SignUp />}></Route>
			<Route path="intro" element={<Intro />}></Route>
			<Route path="standby" element={<StandBy />}></Route>
			<Route path="result" element={<Result />}></Route>
			<Route path="mission-posts" element={<MissionPosts />}></Route>
			<Route path="chatter-posts" element={<ChatterPosts />}></Route>
			<Route path="members" element={<Members />}></Route>
			<Route path="write" element={<Write />}></Route>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
