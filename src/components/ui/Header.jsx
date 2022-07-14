// Module Imports
import {
	AppBar,
	Box,
	Button,
	Menu,
	MenuItem,
	Tab,
	Tabs,
	Toolbar,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Local Imports
import theme from "./theme";

// Elevation Scroll Effect
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
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);

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
		logoContainer: {
			padding: 0,
			height: "100%",
		},
		servicesMenu: {
			marginTop: "-50px",
			"& .MuiPaper-root": {
				backgroundColor: theme.palette.common.blue,
				color: "#fff",
				borderRadius: 0,
			},
			"& .MuiMenuItem-root": {
				...theme.typography.tab,
				opacity: 0.7,
				"&:hover": {
					opacity: 1,
				},
			},
		},
	};

	// Event Listeners
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};

	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) setValue(0);
		else if (window.location.pathname === "/services" && value !== 1)
			setValue(1);
		else if (window.location.pathname === "/revolution" && value !== 2)
			setValue(2);
		else if (window.location.pathname === "/about" && value !== 3) setValue(3);
		else if (window.location.pathname === "/contact" && value !== 4)
			setValue(4);
	}, [value, setValue]);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<Button
							sx={sx.logoContainer}
							component={Link}
							to="/"
							disableRipple
							onClick={() => setValue(0)}
						>
							<img
								style={{ height: "100%" }}
								src="/assets/logo.svg"
								alt="company logo"
							/>
						</Button>
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="primary"
							textColor="inherit"
							sx={{ marginLeft: "auto" }}
						>
							<Tab sx={sx.tab} label="Home" component={Link} to="/" />
							<Tab
								aria-owns={anchorEl ? "basic-menu" : undefined}
								aria-haspopup={anchorEl ? true : undefined}
								onMouseOver={(e) => handleClick(e)}
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
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{ onMouseLeave: handleClose }}
							sx={sx.servicesMenu}
						>
							<MenuItem
								component={Link}
								to="/services"
								onClick={() => {
									handleClose();
									setValue(1);
								}}
								// sx={{ ...theme.typography.tab }}
							>
								Services
							</MenuItem>
							<MenuItem
								component={Link}
								to="/customsoftware"
								onClick={() => {
									handleClose();
									setValue(1);
								}}
							>
								Custom Software Development
							</MenuItem>
							<MenuItem
								component={Link}
								to="/mobileapps"
								onClick={() => {
									handleClose();
									setValue(1);
								}}
							>
								Mobile App Development
							</MenuItem>
							<MenuItem
								component={Link}
								to="/websites"
								onClick={() => {
									handleClose();
									setValue(1);
								}}
							>
								Website Development
							</MenuItem>
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Box sx={{ ...theme.mixins.toolbar }} />
		</React.Fragment>
	);
}

export default Header;
