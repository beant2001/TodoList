const fs = require('fs');

// Create project folders
function createProjectFolders() {
    const folders = ['HTML', 'CSS', 'JavaScript'];

    folders.forEach(folder => {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
            console.log(`Created ${folder} folder.`);
        } else {
            console.log(`${folder} folder already exists.`);
        }
    });

    console.log('Project folders created successfully.');
}

// Create HTML file with a basic structure
function createHTMLFile() {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./CSS/styles.css">
        <title>Your Project Title</title>
    </head>
    <body>
        <div id="app">
            <!-- Your content goes here -->
        </div>
        <script src="./JavaScript/script.js"></script>
    </body>
    </html>
    `;

    fs.writeFileSync('./HTML/index.html', htmlContent);
    console.log('HTML file created successfully.');
}

// Main function to set up the project
function setUpProject() {
    createProjectFolders();
    createHTMLFile();
}

// Execute the setup
setUpProject();
