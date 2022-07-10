import { AppBar, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

function Header() {
	return (
		<ElevationScroll>
			<AppBar position="fixed">
				<Toolbar>Arc Development</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
}

export default Header;
