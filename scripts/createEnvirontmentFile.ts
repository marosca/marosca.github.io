// https://javascript.plainenglish.io/setup-dotenv-to-access-environment-variables-in-angular-9-f06c6ffb86c0
const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

if (!process.env.SPACE_ID) {
   console.error('All the required environment variables were not provided!');
   process.exit(-1);
}

const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   SPACE_ID: "${process.env.SPACE_ID}",
   ACCESS_TOKEN: "${process.env.ACCESS_TOKEN}",
   CDN_CONTENTFUL: "${isProduction ? process.env.CDN_CONTENTFUL : process.env.CDN_PREVIEW}",
   CDN_PREVIEW: "${process.env.CDN_PREVIEW}",
   CONTENT_ACCESS_TOKEN: "${isProduction ? process.env.CONTENT_ACCESS_TOKEN: process.env.CONTENT_PREVIEW_ACCESS_TOKEN}",
   CONTENT_PREVIEW_ACCESS_TOKEN: "${process.env.CONTENT_PREVIEW_ACCESS_TOKEN}"
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
})