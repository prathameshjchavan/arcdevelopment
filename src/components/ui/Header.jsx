// Module Imports
import { AppBar, Box, Button, Tab, Tabs, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-router-dom";
import React, { useState } from "react";

// Local Imports
import theme from "./theme";

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
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const sx = {
		tab: {
			...theme.typography.tab,
			minWidth: 10,
			marginLeft: "25px",
		},
		button: {
			...theme.typography.estimate,
			borderRadius: 50,
			marginLeft: "50px",
			marginRight: "25px",
			height: "45px",
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
							value={value}
							onChange={handleChange}
							indicatorColor="primary"
							textColor="inherit"
							sx={{ marginLeft: "auto" }}
						>
							<Tab sx={sx.tab} label="Home" component={Link} to="/" />
							<Tab
								sx={sx.tab}
								label="Services"
								component={Link}
								to="/services"
							/>
							<Tab
								sx={sx.tab}
								label="The Revolution"
								component={Link}
								to="/revolution"
							/>
							<Tab sx={sx.tab} label="About Us" component={Link} to="/about" />
							<Tab
								sx={sx.tab}
								label="Contact Us"
								component={Link}
								to="/contact"
							/>
						</Tabs>
						<Button sx={sx.button} variant="contained" color="secondary">
							Free Estimate
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Box sx={{ ...theme.mixins.toolbar }} />
		</React.Fragment>
	);
}

export default Header;
