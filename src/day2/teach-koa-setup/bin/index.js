#!/usr/bin/env node

import fs from 'fs'
import ejs from 'ejs'
import { createIndexTemplate } from './indexTemplate.js';
import { createPackageTemplate } from './packageTemplate.js';
import { question } from './question/index.js';
import { createConfig } from './config.js';
import execa from 'execa';

const answer = await question();

const inputConfig = createConfig(answer);


fs.mkdirSync(getRootPath());

fs.writeFileSync(getRootPath() + '/index.js', createIndexTemplate(inputConfig));

fs.writeFileSync(getRootPath() + '/pacakge.json', createPackageTemplate(inputConfig));



// TODO package
// execa('npm i', {
//     cwd: getRootPath(),
//     stdio: [2, 2, 2]
// })


function getRootPath() {
    return './' + inputConfig.projectName;
}