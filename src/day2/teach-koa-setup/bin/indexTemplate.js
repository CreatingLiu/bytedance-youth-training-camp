import fs from 'fs'
import ejs from 'ejs'
import prettier from 'prettier';

export function createIndexTemplate(config) {
    const template = fs.readFileSync(process.cwd() + '/template/index.ejs', 'utf-8');

    const code = ejs.render(template,  {
        port: config.port,
        middleware: config.middleware
    });

    return code;
}