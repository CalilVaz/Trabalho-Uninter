let titleContent = document.querySelector('#title')
let descriptionContent = document.querySelector('#description')

console.log(titleContent);
console.log(descriptionContent);

function onSobreMim() {
    titleContent.innerHTML = 'Sobre mim'
    descriptionContent.innerHTML = 'Me chamo Calil Asir Vaz Velozo, tenho 20 anos de idade, estou cursando análise e desenvolvimento de sistemas, trabalho na empresa Fort Atacadista cargo T.I., natural de Manaus/AM atualmente morando em Balneário Camboriú/SC. Objetivo profissional: Programador'
}

function onFormacao() {
    titleContent.innerHTML = 'Formação'
    descriptionContent.innerHTML = 'Cursando Análise e desenvolvimento de sistemas'
}

function onCarreiraProfissional() {
    titleContent.innerHTML = 'Carreira Profissional'
    descriptionContent.innerHTML = `
     Jovem aprendiz administrativo - Di Felícia
    <br>
     Vendedor - Di Felícia
    <br>
     Repositor - Fort Atacadista
    <br>
     Vendedor - Fort Atacista
    <br>
     Suporte T.i. - Fort Atacadista
    `
}

function onGitHub() {
    titleContent.innerHTML = 'Redes sociais'
    descriptionContent.innerHTML = `
    <ul>
    <li>
    <a href="https://br.linkedin.com/in/calil-vaz-8269b5224" class="socials">Linkedin</a>
    </li>
    <li>
    <a href="https://www.instagram.com/calil_vaz/" class="socials">Instagram</a>
    </li>
    <li>
    <a href="https://wa.me/qr/PBBDDXBSV52CF1" class="socials">WhatsApp</a>
    </li>
    <li>
    <a href="https://github.com/CalilVaz" class="socials">GitHub</a>
    </li>
</ul>
    `
}