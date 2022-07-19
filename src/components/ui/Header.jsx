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
	SwipeableDrawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
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
	const [value, setValue] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [openDrawer, setOpenDrawer] = useState(false);
	const openMenu = Boolean(anchorEl);
	const theme = useTheme();
	const { pathname } = useLocation();
	const matches = useMediaQuery(theme.breakpoints.down("tabs"));
	const iOS =
		typeof navigator !== "undefined" &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);

	// Common sx prop object for all components
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
			zIndex: theme.zIndex.modal + 2,
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
		appbar: {
			zIndex: theme.zIndex.modal + 1,
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
			{
				name: "Free Estimate",
				link: "/estimate",
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

	// For setting tab value on refresh/reload
	useEffect(() => {
		const routeIndex = routes.findIndex(({ link }) => link === pathname);

		if (routeIndex !== -1) {
			if (routeIndex >= 1 && routeIndex <= 4) {
				if (value !== 1) setValue(1);

				if (selectedIndex !== routeIndex - 1) setSelectedIndex(routeIndex - 1);
			} else {
				const index = routeIndex === 0 ? 0 : routeIndex - 3;
				if (value !== index) {
					setValue(index);
				}
			}
		}
	}, [routes, pathname, value, setValue]);

	const tabs = (
		<Fragment>
			<Tabs
				value={value > 4 ? false : value}
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
				MenuListProps={{
					"aria-labelledby": "services",
					role: "listbox",
					onMouseLeave: handleCloseMenu,
				}}
				sx={sx.servicesMenu}
				disableAutoFocusItem
				keepMounted
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
				<Box sx={{ ...theme.mixins.toolbar, ...sx.toolbar }} />
				<List disablePadding>
					{[...routes.slice(0, 2), ...routes.slice(5)].map(
						({ name, link }, index) => (
							<ListItem
								key={name}
								onClick={() => {
									setValue(index);
									setOpenDrawer(false);
								}}
								divider
								component={Link}
								to={link}
							>
								<ListItemButton
									selected={value === index}
									sx={
										index === 5
											? { ...sx.drawerItemButton, ...sx.drawerItemEstimate }
											: sx.drawerItemButton
									}
								>
									<ListItemText sx={sx.drawerItem} disableTypography>
										{name}
									</ListItemText>
								</ListItemButton>
							</ListItem>
						)
					)}
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
				<AppBar sx={sx.appbar} position="fixed">
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
