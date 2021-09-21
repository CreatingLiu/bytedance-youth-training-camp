const path = require("path")
const fs = require("fs")

const Koa = require("koa")

const app = new Koa()

app.use((ctx) => {
    const url = ctx.request.url;
    console.log(url);

    if(url === "/"){
        ctx.body = fs.readFileSync('./index.html', 'utf-8');
    }
    else if(url.endsWith(".js")) {
        // console.log(url.slice(1))
        const p = path.resolve(__dirname, url.slice(1));
        // console.log(p)
        ctx.type = "text/javascript"
        const source = fs.readFileSync(p, "utf-8");
        ctx.body = rewriteImport(source)
    }
    else if(url.startsWith("/@modules")){
        const moduleName = url.replace("/@modules", "");
        const prefix = path.resolve(__dirname, "node_modules", moduleName);
        const module = require(prefix + "/package.json").module;
        console.log(module);
        const code = fs.readFileSync(path.resolve(prefix, module), "utf-8");
        ctx.type = "text/javascript"
        ctx.body = rewriteImport(code);
    }
})

function rewriteImport(source) {
    return source.replace(/(from\s+["|'])(?![\.\/])/g, "$1/@modules")
                    .replace(/process\.env\.NODE_ENV/g, '"development"')
}

app.listen(8080,()=>{
    console.log("open server localhost:8080")
})