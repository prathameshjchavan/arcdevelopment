import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import theme from "./theme";
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
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar>
						<Typography variant="h3">Arc Development</Typography>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Box sx={{ ...theme.mixins.toolbar }} />
		</React.Fragment>
	);
}

export default Header;
