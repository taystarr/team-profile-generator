const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const genTeam = team => {
    const genManager = manager => {
        return `
        <section class="col-10 col-md-4 mx-auto mt-5 mb-3 px-4">
            <div class="card shadow rounded">
                <div class="card-header bg-secondary text-light">
                    ${manager.getName()}
                    <br/>
                    <i class="fa-solid fa-mug-hot"></i>
                    ${manager.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </section>
    
        `
    };

    const genEngineer = engineer => {
        return `
        <section class="col-10 col-md-4 mx-auto mt-5 mb-3 px-4">
        <div class="card shadow rounded">
            <div class="card-header bg-secondary text-light">
                ${engineer.getName()}
                <br/>
                <i class="fa-solid fa-code"></i>
                ${engineer.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub Account: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
            </ul>

        </div>
    </section>

        `
    };

    const genIntern = intern => {
        return `
        <section class="col-10 col-md-4 mx-auto mt-5 mb-3 px-4">
        <div class="card shadow rounded">
            <div class="card-header bg-secondary text-light">
                ${intern.getName()}
                <br/>
                
                ${intern.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>

        </div>
    </section>
        `
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => genManager(manager))
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => genEngineer(engineer))
        .join('')
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => genIntern(intern))
        .join('')
        );

    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <script src="https://kit.fontawesome.com/fc11d6c36f.js" crossorigin="anonymous"></script>
    <title>Team Profile Generator</title>
</head>
<body>
    <header class= "bg-secondary">
        <p class= "h1 mb-1 py-3 text-center text-light font-weight-light">My Team</p>
    </header>
    <div class="row">
        ${genTeam(team)}
    </div>

</body>
</html>
    `
};

// module.exports = genTeam;