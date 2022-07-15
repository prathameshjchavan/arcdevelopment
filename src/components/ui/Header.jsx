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
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const open = Boolean(anchorEl);

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
				borderRadius: 0,
			},
			"& .MuiList-root": {
				background: theme.palette.common.blue,
			},
			"& .MuiMenuItem-root": {
				...theme.typography.tab,
				color: "#fff",
				opacity: 0.7,
				"&:hover": {
					opacity: 1,
				},
			},
			"& .Mui-selected": {
				background: "#074f81 !important",
			},
		},
	};

	const servicesMenuOptions = [
		{
			name: "Services",
			link: "/services",
		},
		{
			name: "Custom Software Development",
			link: "/customsoftware",
		},
		{
			name: "Mobile App Development",
			link: "/mobileapps",
		},
		{
			name: "Website Development",
			link: "/websites",
		},
	];

	// Event Listeners
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (event, index) => {
		setValue(1);
		setSelectedIndex(index);
		setAnchorEl(null);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
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
								id="services"
								aria-haspopup="listbox"
								aria-controls="services-menu"
								aria-expanded={open ? "true" : undefined}
								onMouseEnter={handleOpenMenu}
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
						<Menu
							id="services-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleCloseMenu}
							MenuListProps={{
								"aria-labelledby": "services",
								role: "listbox",
								onMouseLeave: handleCloseMenu,
							}}
							sx={sx.servicesMenu}
							disableAutoFocusItem
						>
							{servicesMenuOptions.map(({ name, link }, index) => (
								<MenuItem
									key={name}
									component={Link}
									to={link}
									selected={index === selectedIndex && value === 1}
									onClick={(event) => handleMenuItemClick(event, index)}
								>
									{name}
								</MenuItem>
							))}
						</Menu>
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
