<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi CV</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background-color: #000;
            color: #fff;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 40px;
        }

        h1, h2, h3 {
            color: #fff;
            font-weight: 800;
            margin: 0 0 10px;
        }

        h1 {
            font-size: 3rem;
            text-align: center;
        }

        h2 {
            font-size: 2rem;
            border-bottom: 1px solid #333;
            padding-bottom: 10px;
        }

        p, li {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #e0e0e0;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        .header p {
            margin: 10px 0;
        }

        .skills {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .skill-item {
            background-color: #111;
            border: 1px solid #333;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            font-weight: 600;
        }

        a {
            color: #0070f3;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .experience-item {
            margin-bottom: 30px;
        }

        .experience-item h3 {
            margin-bottom: 5px;
            font-weight: 600;
        }

        .experience-item p {
            font-size: 1rem;
            margin: 0;
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
            <p>Soy un programador enfocado en crear experiencias de usuario rápidas y accesibles, con un fuerte enfoque en tecnologías JavaScript modernas, como Next.js y React.</p>
        </section>

        <section>
            <h2>Habilidades</h2>
            <div class="skills">
                <div class="skill-item">Next.js</div>
                <div class="skill-item">React</div>
                <div class="skill-item">Node.js</div>
                <div class="skill-item">TypeScript</div>
                <div class="skill-item">API REST & GraphQL</div>
                <div class="skill-item">Tailwind CSS</div>
            </div>
        </section>

        <section>
            <h2>Experiencia</h2>
            <div class="experience-item">
                <h3>Desarrollador Full Stack - Empresa XYZ</h3>
                <p><i>Marzo 2022 - Presente</i></p>
                <ul>
                    <li>Desarrollo de aplicaciones web escalables utilizando Next.js y React.</li>
                    <li>Implementación de arquitectura serverless con AWS y Vercel.</li>
                </ul>
            </div>

            <div class="experience-item">
                <h3>Programador Freelance</h3>
                <p><i>Agosto 2020 - Febrero 2022</i></p>
                <ul>
                    <li>Diseño y desarrollo de sitios web modernos con performance optimizada.</li>
                    <li>Integración de soluciones backend con Node.js y bases de datos NoSQL.</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>Educación</h2>
            <div class="experience-item">
                <h3>Licenciatura en Ciencias de la Computación - Universidad ABC</h3>
                <p><i>2018 - 2022</i></p>
            </div>
        </section>
    </div>

</body>
</html>
