import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
			fallback: '200.html',
            pages: "docs",
            assets: "docs"
        }),
    }
};

export default config;