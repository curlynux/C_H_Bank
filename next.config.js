import withCSS from "@zeit/next-css";

export default withCSS({
	cssModules: true,
	webpack(config, options) {
		return config;
	}
});
 