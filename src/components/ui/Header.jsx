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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";

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
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("tabs"));

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
		toolbar: {
			[theme.breakpoints.down("lg")]: {
				height: "6em",
			},
			[theme.breakpoints.down("sm")]: {
				height: "5em",
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
		switch (window.location.pathname) {
			case "/":
				if (value !== 0) {
					setValue(0);
				}
				break;
			case "/services":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(0);
				}
				break;
			case "/customsoftware":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(1);
				}
				break;
			case "/mobileapps":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(2);
				}
				break;
			case "/websites":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(3);
				}
				break;
			case "/revolution":
				if (value !== 2) {
					setValue(2);
				}
				break;
			case "/about":
				if (value !== 3) {
					setValue(3);
				}
				break;
			case "/contact":
				if (value !== 4) {
					setValue(4);
				}
				break;
			case "/estimate":
				if (value !== 5) {
					setValue(5);
				}
				break;
			default:
				break;
		}
	}, [value, setValue]);

	const tabs = (
		<Fragment>
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
				<Tab sx={sx.tab} label="Contact Us" component={Link} to="/contact" />
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
		</Fragment>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar sx={sx.toolbar} disableGutters>
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
						{matches ? null : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Box sx={{ ...theme.mixins.toolbar, ...sx.toolbar }} />
		</React.Fragment>
	);
}

export default Header;
