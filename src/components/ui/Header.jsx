import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
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
	const sx = {
		tab: {
			...theme.typography.tab,
			minWidth: 10,
			marginLeft: "25px",
		},
	};

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<img
							style={{ height: "100%" }}
							src="/assets/logo.svg"
							alt="company logo"
						/>
						<Tabs
							indicatorColor="secondary"
							textColor="inherit"
							sx={{ marginLeft: "auto" }}
						>
							<Tab sx={sx.tab} label="Home" />
							<Tab sx={sx.tab} label="Services" />
							<Tab sx={sx.tab} label="The Revolution" />
							<Tab sx={sx.tab} label="About Us" />
							<Tab sx={sx.tab} label="Contact Us" />
						</Tabs>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Box sx={{ ...theme.mixins.toolbar }} />
		</React.Fragment>
	);
}

export default Header;
