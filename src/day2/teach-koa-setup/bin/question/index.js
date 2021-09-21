import inquirer from 'inquirer';


export async function question() {
    return await inquirer.prompt([
        {
            type: "input",
            name: "packageName",
            message: "set package name"
        },
        {
            type: "number",
            name: "port",
            message: "set port number",
            default: () => 8080
        },
        {
            type: "checkbox",
            name: "middleware",
            choices: [
                {
                    name: "koaStatic"
                },
                {
                    name: "koaRouter"
                },
                {
                    name: "koaViews"
                },
                {
                    name: "koaBody"
                }
            ]
        }
    ])
}