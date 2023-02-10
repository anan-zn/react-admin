export interface MetaProps {
	keepAlive?: boolean;
	requireAuth?: boolean;
	title: string;
	key?: string;
}

export interface RouteObject {
	id?: string;
	name?: string;
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}
