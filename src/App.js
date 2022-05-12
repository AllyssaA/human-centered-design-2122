import { useState } from 'react';
import './App.css';
// import { Article, Voice } from 'components';
// import Voice from './components/Voice';
// import Article from './components/Article';
import { Article, Voice } from './components';


const App = () => {
  const articles = [
    {
      title: 'Over DnD',
      text: 'Het rollenspel Dungeons & Dragons gaat over het vertellen van verhalen in werelden van zwaarden en tovenarij. Net als fantasiespelletjes, wordt D&D gedreven door verbeeldingskracht. Het gaat over je een afbrokkelend kasteel in een donker wordend bos voorstellen en je voorstellen hoe een fantasie-avonturier zou kunnen reageren op de uitdagingen die de scène met zich meebrengt. In deze fantasiewereld zijn de mogelijkheden onbeperkt. In tegenstelling tot een fantasiespel, geeft D&D structuur aan de verhalen - een manier om de gevolgen van de acties van de avonturiers te bepalen. Spelers gooien met dobbelstenen om te bepalen of hun aanvallen raak of gemist en of hun personages een klif kunnen beklimmen, wegrollen van de inslag van een magische bliksemschicht of een andere gevaarlijke taak kunnen volbrengen. Alles is mogelijk, maar de dobbelstenen maken sommige dingen waarschijnlijker dan andere. Als je nieuw bent bij D&D of meer wilt leren over de regels van het spel, nemen we een paar van de inleidende concepten hieronder door en helpen je bij het vinden van meer informatie. In dit gedeelte kijken we naar de rollen rond de tafel, namelijk de spelers die deelnemen aan het avontuur en de Dungeon Master die hen door het spel leidt!'
    },
    {
      title: 'Rol van de spelers',
      text: 'Als je D&D speelt, kruip je in de huid van een avonturier: een ervaren vechter, een vrome geestelijke, een dodelijke schurk of een tovenaar. Je eerste stap is om je een eigen personage voor te stellen en te creëren. Je personage is een combinatie van spelstatistieken, rollenspelhaken en je verbeeldingskracht. Je kiest een ras (zoals mens of halfling) en een klasse (zoals vechter of tovenaar). Je bedenkt ook de persoonlijkheid, het uiterlijk en het achtergrondverhaal van je personage. Eenmaal voltooid, dient je personage als je vertegenwoordiger in het spel. Met wat vrienden en een beetje fantasie ga je op grootse missies en gewaagde avonturen, waarbij je jezelf test tegen een reeks uitdagingen en bloeddorstige monsters.'
    }
  ]
  const [formattedArticles, setFormattedArticles] = useState(articles)

  return (
    <div className="App">
      <Voice articles={articles} setFormattedArticles={setFormattedArticles} />
      <div className="articles">
        {formattedArticles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  )
}

export default App;
