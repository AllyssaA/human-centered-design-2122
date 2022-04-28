const Article = ({ title, text }) => {
    const createMarkup = (html) => ({ __html: html })
    
    return (
      <div className='article'>
        {/* https://stackoverflow.com/questions/37337289/react-js-set-innerhtml-vs-dangerouslysetinnerhtml */}
        <h2 dangerouslySetInnerHTML={createMarkup(title)}></h2>
        <p dangerouslySetInnerHTML={createMarkup(text)}></p>
      </div>
    )
  }
  
  export default Article