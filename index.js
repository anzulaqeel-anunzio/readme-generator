#!/usr/bin/env node
// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

/*
 * Developed for Anunzio International by Anzul Aqeel
 * Contact +971545822608 or +971585515742
 */

const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');
const chalk = require('chalk');
const { program } = require('commander');

program
    .version('1.0.0')
    .option('-d, --data <file>', 'JSON data file', 'data.json')
    .option('-t, --template <file>', 'Markdown template file', 'template.md')
    .option('-o, --output <file>', 'Output file', 'README.md')
    .action((options) => {
        run(options);
    });

program.parse(process.argv);

function run(options) {
    const dataPath = path.resolve(process.cwd(), options.data);
    const templatePath = path.resolve(process.cwd(), options.template);
    const outputPath = path.resolve(process.cwd(), options.output);

    if (!fs.existsSync(dataPath)) {
        console.error(chalk.red(`Data file not found: ${dataPath}`));
        process.exit(1);
    }
    if (!fs.existsSync(templatePath)) {
        console.error(chalk.red(`Template file not found: ${templatePath}`));
        process.exit(1);
    }

    try {
        console.log(chalk.blue(`Reading data from ${options.data}...`));
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

        console.log(chalk.blue(`Reading template from ${options.template}...`));
        const template = fs.readFileSync(templatePath, 'utf8');

        console.log(chalk.blue('Rendering...'));
        const output = Mustache.render(template, data);

        fs.writeFileSync(outputPath, output);
        console.log(chalk.green(`Successfully generated ${options.output}`));

    } catch (error) {
        console.error(chalk.red(`Error: ${error.message}`));
        process.exit(1);
    }
}

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
