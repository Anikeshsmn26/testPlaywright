const { expect } = require('@playwright/test');

class Login {
    constructor(page) {
      this.page = page;
      this.usernameInput = "//input[@name='username']";
      this.passwordInput = "//input[@name='password']";
      this.loginButton = "//button[@type='submit']";
    }
  
    async navigateToLogin() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const title = await this.page.title();
        expect(title).toBe('OrangeHRM');
    }
  
    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput,password);
        await this.page.click(this.loginButton);
    }
  }
  
  module.exports = Login;
  