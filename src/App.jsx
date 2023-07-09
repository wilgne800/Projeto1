import { BrowserRouter, Routes, Route } from "react-router-dom"
import Titulo from "./Titulo"
import Goku from "./pages/Goku"
import Sobre from "./pages/Vegeta"
import Contato from "./pages/Gogu_black"

function App(){
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <div> <Goku /> <Titulo frase="Com cada batalha, eu me torno mais forte. Não importa o quão poderoso seja o meu oponente, eu nunca irei desistir até alcançar a vitória!" imgs2 = "https://images3.alphacoders.com/131/1314151.jpg" imgs ="https://japanpowered.com/media/images//goku.png" cor ="red" name="goku" paragrafo = {true}/>  </div> }></Route>  
        <Route path="/Vegeta" element={<div><Sobre /><Titulo frase="Com o poder do meu coração puro e a determinação de um verdadeiro herói, vou superar todos os desafios e me tornar o mais forte dos Saiyajins!" imgs2 ="https://e0.pxfuel.com/wallpapers/410/316/desktop-wallpaper-badass-vegeta-ideas-in-2021-vegeta-dragon-ball-z-dragon-ball-super-vegeta-ultra-ego.jpg" imgs ="https://w7.pngwing.com/pngs/790/830/png-transparent-vegeta-dragon-ball-z-budokai-3-goku-uub-trunks-goku-fictional-character-cartoon-trunks.png" cor ="blue" name="Vegeta" paragrafo={true}/></div>}></Route> 
        <Route path="/Goku_black" element={ <div> <Contato /> <Titulo frase="Diante da minha escuridão, sua esperança é apenas uma chama prestes a se extinguir. Prepare-se para enfrentar a ira de Goku Black!" imgs2="https://pop.proddigital.com.br/wp-content/uploads/sites/8/2023/05/01-33.jpg" imgs ="https://e7.pngegg.com/pngimages/489/635/png-clipart-goku-black-vegeta-gohan-trunks-goku-purple-black-hair.png" name = "goku black" cor ="purple" paragrafo={true}/></div>}></Route> 
        </Routes>
    </BrowserRouter> 
  </div> )
}

export default App