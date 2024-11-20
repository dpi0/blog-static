export const SITE_TITLE = "dpi0's internet space";
export const SITE_DESCRIPTION = "An internet space for dpi0.";

export interface MenuItem {
	label: string;
	url: string;
}

// Menu items
export const menuItems: MenuItem[] = [
	{
		label: "home",
		url: "/",
	},
	{
		label: "writings",
		url: "/writings",
	},
	{
		label: "thoughts",
		url: "/thoughts",
	},
	// {
	// 	label: "ships",
	// 	url: "/ships",
	// },
];
