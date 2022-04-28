import { useState } from 'react';
import './App.css';
// import { Article, Voice } from 'components';
// import Voice from './components/Voice';
// import Article from './components/Article';
import { Article, Voice } from './components';


const App = () => {
  const articles = [
    {
      title: 'Zo vierde Nederland Koningsdag: "Een groot feestje"',
      text: '"Een Koningsdag om nooit te vergeten en hopelijk nooit meer te herhalen", zei koning Willem-Alexander een jaar geleden over 27 april 2021, toen Nederland zijn verjaardag vanwege de coronapandemie nauwelijks kon vieren. Dat was dit jaar wel anders: nu alle beperkingen zijn geschrapt, togen Nederlanders weer massaal naar vrijmarkten, festivals en andere Koningsdagevenementen. De koning zelf vierde zijn 55ste verjaardag in Maastricht, samen met een deel van zijn familie. De leden van het koninklijk gezelschap werden vanmorgen op de Sint Servaasbrug toegezongen, waarna ze een ronde liepen door het centrum van de Limburgse hoofdstad. Het bezoek van de Oranjes aan Maastricht stond eigenlijk gepland voor 2020, maar werd vanwege corona twee keer uitgesteld. Koning Willem-Alexander toonde zich "intens dankbaar" dat het feest vandaag wél kon doorgaan. Hij en andere leden van de familie benadrukten hoe belangrijk ze het vinden dat Koningsdag "in vrede en vrijheid" kan worden gevierd, doelend op de oorlog in Oekraïne. "We leven heel erg mee met de mensen in Oekraïne", zei Willem-Alexander in Maastricht.'
    },
    {
      title: 'Na twee jaar weer ouderwets drukke Koningsnacht in steden',
      text: 'Na twee jaar vol coronabeperkingen werd gisteravond en vannacht een "normale" Koningsnacht gevierd. In meerdere steden waren grote evenementen en was veel publiek op de been. Grote incidenten bleven uit. In Utrecht kwam de vrijmarkt aan het einde van de middag op gang. Rond 22.30 uur werd opgeroepen om niet meer naar de binnenstad te komen. Het was daar zo druk dat alle evenementen vol waren, meldde de gemeente. Eerder op de avond was al opgeroepen om het Vredenburg te vermijden.'
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
