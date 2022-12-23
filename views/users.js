const { users } = require('../database/data'); // .../data.json il reconnait l'extension

module.exports = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acceuil</title>
    <link rel="stylesheet" href="/css/style.css">
    <script src="/script/script.js" defer></script>
</head>
<body>
    <h1>Page d'acceuil</h1>
    <div>
        <ul>
            <li><a href="/home">Acceuil</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/users">Utilisateurs</a></li>
            <li><a href="/services">Services</a></li>
        </ul>
    </div>
    <span></span>
    <table>
    <tr>
      <th>Pseudo</th>
      <th>Email</th>
    </tr>
    ${users.map(({ pseudo, email}) => `
      <tr>
        <td>${pseudo}</td>
        <td>${email}</td>
      </tr>
    `).join('')}
  </table>
</body>
</html>
`;