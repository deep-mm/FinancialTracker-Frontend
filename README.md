# FinancialTracker

This project is created using Angular and hosted on Azure App Service.

The following steps were performed to develop and configure this app:

1. ng new financial-tracker - Initialize default angular application
2. npm install --force - Install the required modules
3. Generate services and components using ng generate service api, ng generate component AddInvestmentComponent
4. Configure authentication using this article: [Angular App - Azure AD Auth](https://www.c-sharpcorner.com/article/easily-enable-azure-ad-authentication-in-angular-and-web-api-core-app/)
5. Run the application locally: ng serve
6. Create Docker image for angular app, and push it to GitHub container registry using GitHub actions.
7. Configure app service to pull image from this container.

![image](https://user-images.githubusercontent.com/29853549/147818278-ecc22003-49e8-4d47-a519-8f7a55ca28c0.png)
