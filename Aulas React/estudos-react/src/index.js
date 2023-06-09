// Trazer de outro arquivo/biblioteca alguma função ou variável
import { createRoot } from "react-dom/client";
import { Titulo } from "./components/Titulo";
import { Mensagem } from "./components/Mensagem";
import { Postagem } from "./components/Ponstagem"


//Linka o arquivo css ao projeto React
import "./style.css";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";

// Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement);



// Inserimos o conteúdo da página
root.render(
  <div>
    <Titulo></Titulo>
    <Mensagem />
    <hr/>
    <Postagem/>
    <Blog/>
    <hr/>
    <Footer/>
  </div>
);

// let nome = "Almir";

// root.render(
//   <section>
//     <h1>React é top</h1>
//     <img src="https://picsum.photos/200" />
//     <p>
//       Olá, tudo bem? <br /> <b>{nome.toUpperCase()}</b>
//     </p>
//     <p>Soma: {1 + 1}</p>
//   </section>
// );

// JSX = Javascript Extension
// No fim o HTML é convertido para Javascript (por baixo dos panos)
// JSX = Açúcar Sintático

// Dentro das chaves podemos escrever expressões JS!
