import fs from 'fs'
import ejs from 'ejs'
import prettier from 'prettier';

export function createPackageTemplate(config) {
    const template = fs.readFileSync(process.cwd() + '/template/package.ejs', 'utf-8');

    let dependencies = [
        `"koa": "^2.13.1"`
    ];

    if(config.middleware.router) {
        dependencies.push(`"koa-router": "^10.1.1"`)
    }

    if(config.middleware.serve) {
        dependencies.push(`"koa-static": "^5.0.0"`)
    }

    if(config.middleware.views) {
        dependencies.push(`"koa-views": "^7.0.1"`)
    }

    if(config.middleware.koaBody) {
        dependencies.push(`"koa-body": "^4.2.0"`)
    }

    const code = ejs.render(template,  {
        projectName: config.projectName,
        dependencies: dependencies
    });

    return prettier.format(code, {
        parser: "json"
    })
}