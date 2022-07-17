// Module Imports
import {
	AppBar,
	Box,
	Button,
	ListItemButton,
	Menu,
	MenuItem,
	Tab,
	Tabs,
	Toolbar,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useMemo, useState } from "react";

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
	const [value, setValue] = useState(-1);
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [openDrawer, setOpenDrawer] = useState(false);
	const openMenu = Boolean(anchorEl);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("tabs"));
	const iOS =
		typeof navigator !== "undefined" &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);

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
		drawerIconContainer: {
			marginLeft: "auto",
		},
		drawerIcon: {
			height: "50px",
			width: "50px",
		},
		drawer: {
			"& .MuiPaper-root": {
				background: theme.palette.common.blue,
			},
			"& .MuiListItem-root": {
				padding: 0,
			},
			"& .MuiListItemButton-root": {
				padding: "8px 16px",
			},
			"& .Mui-selected": {
				background: "#074f81 !important",
			},
			"& .Mui-selected > .MuiListItemText-root": {
				opacity: 1,
			},
		},
		drawerItem: {
			...theme.typography.tab,
			color: "#fff",
			opacity: 0.7,
		},
		drawerItemButton: {
			padding: 0,
			"&:hover": {
				background: "transparent",
			},
		},
		drawerItemEstimate: {
			background: theme.palette.common.orange,
		},
	};

	const servicesMenuOptions = useMemo(
		() => [
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
		],
		[]
	);

	const routes = useMemo(
		() => [
			{
				name: "Home",
				link: "/",
			},
			{
				name: "Services",
				link: "/services",
			},
			...servicesMenuOptions.slice(1),
			{
				name: "The Revolution",
				link: "/revolution",
			},
			{
				name: "About Us",
				link: "/about",
			},
			{
				name: "Contact Us",
				link: "/contact",
			},
		],
		[servicesMenuOptions]
	);

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
		const pathname = window.location.pathname;
		const routeIndex = routes.findIndex(({ link }) => link === pathname);

		if (routeIndex !== -1) {
			if (routeIndex >= 1 && routeIndex <= 4) {
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(routeIndex - 1);
				}
			} else {
				const index = routeIndex === 0 ? 0 : routeIndex - 3;
				if (value !== index) {
					setValue(index);
				}
			}
		}
	}, [routes, value, setValue]);

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
					aria-expanded={openMenu ? "true" : undefined}
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
				open={openMenu}
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

	const drawer = (
		<Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				anchor="right"
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				sx={sx.drawer}
			>
				<List disablePadding>
					<ListItem
						onClick={() => {
							setValue(0);
							setOpenDrawer(false);
						}}
						divider
						component={Link}
						to="/"
					>
						<ListItemButton selected={value === 0} sx={sx.drawerItemButton}>
							<ListItemText sx={sx.drawerItem} disableTypography>
								Home
							</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem
						onClick={() => {
							setValue(1);
							setOpenDrawer(false);
						}}
						divider
						button
						component={Link}
						to="/services"
					>
						<ListItemButton selected={value === 1} sx={sx.drawerItemButton}>
							<ListItemText sx={sx.drawerItem} disableTypography>
								Services
							</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem
						onClick={() => {
							setValue(2);
							setOpenDrawer(false);
						}}
						divider
						button
						component={Link}
						to="/revolution"
					>
						<ListItemButton selected={value === 2} sx={sx.drawerItemButton}>
							<ListItemText sx={sx.drawerItem} disableTypography>
								The Revolution
							</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem
						onClick={() => {
							setValue(3);
							setOpenDrawer(false);
						}}
						divider
						button
						component={Link}
						to="/about"
					>
						<ListItemButton selected={value === 3} sx={sx.drawerItemButton}>
							<ListItemText sx={sx.drawerItem} disableTypography>
								About Us
							</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem
						onClick={() => {
							setValue(4);
							setOpenDrawer(false);
						}}
						divider
						button
						component={Link}
						to="/contact"
					>
						<ListItemButton selected={value === 4} sx={sx.drawerItemButton}>
							<ListItemText sx={sx.drawerItem} disableTypography>
								Contact Us
							</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem
						onClick={() => {
							setValue(5);
							setOpenDrawer(false);
						}}
						divider
						button
						component={Link}
						to="/estimate"
					>
						<ListItemButton
							selected={value === 5}
							sx={{ ...sx.drawerItemButton, ...sx.drawerItemEstimate }}
						>
							<ListItemText sx={sx.drawerItem} disableTypography>
								Free Estimate
							</ListItemText>
						</ListItemButton>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				sx={sx.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon sx={sx.drawerIcon} />
			</IconButton>
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
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Box sx={{ ...theme.mixins.toolbar, ...sx.toolbar }} />
		</React.Fragment>
	);
}

export default Header;
