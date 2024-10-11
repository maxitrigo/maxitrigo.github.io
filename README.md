<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi CV</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #1a1a1a;
            color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #00bfff;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .skills {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .skill-item {
            background-color: #333;
            border-radius: 5px;
            padding: 10px;
            margin: 10px;
            flex: 1 1 45%;
            text-align: center;
        }
        a {
            color: #00bfff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <h1>Tu Nombre</h1>
            <p><a href="mailto:tucorreo@mail.com">tucorreo@mail.com</a> | <a href="https://github.com/tuusuario" target="_blank">GitHub</a> | <a href="https://linkedin.com/in/tuusuario" target="_blank">LinkedIn</a></p>
        </div>

        <section>
            <h2>Perfil</h2>
            <p>Soy un programador con experiencia en desarrollo web, apasionado por las nuevas tecnologías y con habilidad para resolver problemas complejos de forma eficiente.</p>
        </section>

        <section>
            <h2>Habilidades</h2>
            <div class="skills">
                <div class="skill-item">HTML5 & CSS3</div>
                <div class="skill-item">JavaScript & React</div>
                <div class="skill-item">Node.js & Express</div>
                <div class="skill-item">Git & GitHub</div>
                <div class="skill-item">Bases de Datos SQL/NoSQL</div>
                <div class="skill-item">API REST</div>
            </div>
        </section>

        <section>
            <h2>Experiencia</h2>
            <h3>Desarrollador Web - Empresa XYZ</h3>
            <p><i>Marzo 2022 - Presente</i></p>
            <ul>
                <li>Desarrollo de aplicaciones web full-stack con React y Node.js.</li>
                <li>Integración de APIs y manejo de bases de datos NoSQL.</li>
            </ul>

            <h3>Programador Freelance</h3>
            <p><i>Agosto 2020 - Febrero 2022</i></p>
            <ul>
                <li>Creación de sitios web personalizados para clientes.</li>
                <li>Optimización de rendimiento y SEO en proyectos.</li>
            </ul>
        </section>

        <section>
            <h2>Educación</h2>
            <h3>Licenciatura en Ciencias de la Computación - Universidad ABC</h3>
            <p><i>2018 - 2022</i></p>
        </section>
    </div>

</body>
</html>
