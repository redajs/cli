#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import ora from 'ora';
import fetch from 'node-fetch';
import { Command } from "commander";
import { exec } from "child_process";
const program = new Command();

program
  .command('create [template]')
  .description('Create a public template')
  .option('-vsc, --vsc', 'Open vs code')
  .action((template, options) => {

    const spinner = ora('Template existence check').start();
    fetch('https://redajs.thebigbotil.repl.co/api/&temp='+template, {
        method: 'GET',
    }).then(response => response.json())
    .then(result => {
      if (result.name === "err") {
        spinner.fail("Template dosen't exist!");
      } else {
        spinner.succeed("Template exist!");
        const install = ora('Install Template').start();
        exec('git clone ' + result.git, (err, stdout, stderr) => {
            if (err) {
                console.log(chalk.red('Error Occurred!'));
              return;
            }
        });
        if (!result.exec == "/") {
            exec(result.exec, (err, stdout, stderr) => {
                if (err) {
                  console.log(chalk.red('Error Occurred!'));
                  return;
                }
            });
        }
        install.succeed("Template installed successfully!");
        if (options.vsc) {
          exec('code .', (err, stdout, stderr) => {
            if (err) {
              console.log(chalk.red('Error Occurred!'));
              return;
            }
        });
        }
        console.log(result.send)
      }
    })
  })

program
  .command('info [template]')
  .description('Get info from public template')
  .action((template) => {

    const spinner = ora('Template existence check').start();
    fetch('https://redajs.thebigbotil.repl.co/api/&temp='+template, {
        method: 'GET',
    }).then(response => response.json())
    .then(result => {
      if (result.name === "err") {
        spinner.fail("Template dosen't exist!");
      } else {
        spinner.succeed("Template exist!");
        console.log()
        console.log(`- Name: ${result.name}
- Description: ${result.description}
- Git: ${result.git}
- Send: ${result.send}
- Exec: ${result.exec}`)
      }
    })
  })


program
  .description('Redajs the template manager!')
  .option('-v, --version', 'Show version')
  .option('-h, --help', 'Show help menu')
  .action((options) => {
    if (options.version) console.log("1.0.0")
    if (options.help) console.log(`reda new : Create new public template
reda new : Create new public template
reda create [template] : Create public template : alias: build
reda -v :  Show version : alias: --version
reda -h :  Show help : alias: --help`)
  })


program.parse();