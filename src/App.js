import { useState } from 'react';
import './App.css';
// import { Article, Voice } from 'components';
// import Voice from './components/Voice';
// import Article from './components/Article';
import { Article, Voice } from './components';


const App = () => {
  const articles = [
    {
      title: 'NIOD: "Uniek beeld van massamoord door Syrische overheid"',
      text: 'Er is een video gepubliceerd van de executie van tien burgers in Syrië door twee leden van de militaire inlichtingendienst. "Het is uniek beeldmateriaal. Nooit hebben we iemand van de officiële organen van de Syrische overheid dit soort massamoorden zien uitvoeren", zegt genocide-onderzoeker Uğur Ümit Üngör. Beelden uit het zeven minuten durende filmpje uit 2013 zijn vandaag verschenen op de websites van NRC en The Guardian. Ongewapende burgers worden geblinddoekt één voor één naar een kuil in een buitenwijk van Damascus gebracht. Daar worden ze door het hoofd geschoten. "De groeten aan de baas", zegt een van de twee daders lachend in de camera.'
    },
    {
      title: 'NIOD: "Uniek beeld van massamoord door Syrische overheid"',
      text: 'Er is een video gepubliceerd van de executie van tien burgers in Syrië door twee leden van de militaire inlichtingendienst. "Het is uniek beeldmateriaal. Nooit hebben we iemand van de officiële organen van de Syrische overheid dit soort massamoorden zien uitvoeren", zegt genocide-onderzoeker Uğur Ümit Üngör. Beelden uit het zeven minuten durende filmpje uit 2013 zijn vandaag verschenen op de websites van NRC en The Guardian. Ongewapende burgers worden geblinddoekt één voor één naar een kuil in een buitenwijk van Damascus gebracht. Daar worden ze door het hoofd geschoten. "De groeten aan de baas", zegt een van de twee daders lachend in de camera.'
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
