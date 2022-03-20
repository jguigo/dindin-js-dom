document.getElementsByTagName("header")[0].style.backgroundColor = "#2E948A";
document.getElementsByTagName("a")[1].setAttribute("href", "./cursos.html");

let gps = window.location.pathname;

if (gps === "/index.html") {
   document.querySelector(".titulo.depoimento h3").innerHTML =
      "O QUE FALAM SOBRE NÓS";

   document.querySelector("#introducao").style.justifyContent = "center";

   document.querySelector("#falam_sobre+.titulo h3").innerText =
      "Mais conteúdo pra você";

   let titulos = document.querySelectorAll(".titulo");
   titulos.forEach((a) => (a.style.textTransform = "uppercase"));

   document.querySelector("#todos_posts").setAttribute("href", "blog.html");

   let novoElemento = document.querySelector(
      "#investimentos_poupando_independencia"
   );
   novoElemento.innerHTML =
      novoElemento.innerHTML +
      `<div id="independencia"><img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"><h2>Independência Financeira</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><a class="comecar_agora" href="./curso.html">começar agora</a></div>`;
}

if (gps === "/contato.html") {
   let form = document.querySelector("form");
   form.setAttribute("action", "sucesso.html");

   let textarea = document.querySelector("#formulario textarea");
   let telefone = document.createElement("input");
   telefone.setAttribute("type", "tel");
   telefone.setAttribute("placeholder", "telefone");
   form.insertBefore(telefone, textarea);

   textarea.setAttribute("style", "box-sizing:border-box");

   let btn = document.querySelector("#enviar");
   btn.setAttribute("style", "width:100px");

   let styleToDepoimentos = document.querySelector('header');
   styleToDepoimentos.innerHTML += '<link rel="stylesheet" href="/css/index.css">'
   
   let main = document.querySelector("main");
   main.innerHTML =
      main.innerHTML +
      `<section class='titulo depoimento'>
      <h3>Depoimentos</h3>
  </section>

  <section id='falam_sobre'>
      <div class="depoimentos">
          <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
          <p>
              ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam.”
              <br>
              <br>
              Wally, 25
          </p>
      </div>

      <div class="depoimentos">
          <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
          <p>
              ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.”
              <br>
              <br>
              Jaden Smith, 23
          </p>
      </div>

      <div class="depoimentos">
          <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
          <p>
              ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.”
              <br>
              <br>
              Whoopi Goldberg, 37
          </p>
      </div>

      <div class="depoimentos">
          <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
          <p>
              ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.”
              <br>
              <br>
              Janes Joplin, 29
          </p>
      </div>
    </section>`;
}
