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
  .command('create <template>')
  .description('Create a public template')
  .option('-vsc, --vsc', 'Open vs code')
  .action((template, options) => {
    inquirer
  .prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Your project name:',
    },
  ]).then(answers => {
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
        exec('git clone ' + result.git + ' ' + answers.name, (err, stdout, stderr) => {
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
  }).catch(err => {console.log(chalk.red('Error Occurred!'))})
})

program
  .command('build <template>')
  .description('Create a public template')
  .option('-vsc, --vsc', 'Open vs code')
  .action((template, options) => {
    inquirer
  .prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Your project name:',
    },
  ]).then(answers => {
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
        exec('git clone ' + result.git + ' ' + answers.name, (err, stdout, stderr) => {
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
  }).catch(err => {console.log(chalk.red('Error Occurred!'))})
})

program
  .command('add <template>')
  .description('Create a public template')
  .option('-vsc, --vsc', 'Open vs code')
  .action((template, options) => {
    inquirer
  .prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Your project name:',
    },
  ]).then(answers => {
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
        exec('git clone ' + result.git + ' ' + answers.name, (err, stdout, stderr) => {
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
  }).catch(err => {console.log(chalk.red('Error Occurred!'))})
})

program
  .command('install <template>')
  .description('Create a public template')
  .option('-vsc, --vsc', 'Open vs code')
  .action((template, options) => {
    inquirer
  .prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Your project name:',
    },
  ]).then(answers => {
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
        exec('git clone ' + result.git + ' ' + answers.name, (err, stdout, stderr) => {
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
  }).catch(err => {console.log(chalk.red('Error Occurred!'))})
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
  .command('new')
  .description('Create new public template')
  .action((template) => {
    inquirer
  .prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Template Name:',
    },
    {
      name: 'description',
      type: 'input',
      message: 'Template Description:',
    },
    {
      name: 'git',
      type: 'input',
      message: 'Template Github Link:',
    },
    {
      name: 'send',
      type: 'input',
      message: 'Message to send after installation:',
    },
    {
      name: 'exec',
      type: 'input',
      message: 'Command to execute after installation:',
    },
  ])
  .then((answers) => {
    const rst = ora('Checking answers').start();
    fetch('https://redajs.thebigbotil.repl.co/api/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: answers.name,
        desc: answers.description,
        git: answers.git,
        send: answers.send,
        exec: answers.exec
      })
  }).then(response => response.json())
  .then(result => {
    const spinner = ora('Adding Template').start();
    if (result.status == "err") {
      spinner.fail("The template already exists")
    } else {
      spinner.succeed("The template has been created")
    }
  })
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