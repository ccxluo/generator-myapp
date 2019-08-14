const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  // add your own methods
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: 'test-project'
      },
      {
        type: 'list',
        name: 'framework',
        message: 'choose a framework',
        choices: ['React', 'Vue', 'Angular'],
        default: 'React'
      }
    ];

    return this.prompt(prompts).then(answers => {
      this.name = answers.name;
      this.framework = answers.framework;
    })
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(this.name)
    );
  }
};
