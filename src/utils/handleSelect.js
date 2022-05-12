const foundText = (str, first, second, setSelected) => (
    str.replace(
        new RegExp(`${first}(.*)${second}`, 'i'),
        found => {
            setSelected(prevState => [...prevState, found])
            return `<mark>${found}</mark>`
        }
    )
)

const handleSelect = (first, second, articles, setSelected, setFormattedArticles) => {
    setSelected([])
    const replaceArticles = articles.map(item => (
        {
            title: foundText(item.title, first, second, setSelected),
            text: foundText(item.text, first, second, setSelected),
            subtitle: foundText(item.text, first, second, setSelected)
        }
    ))
    return setFormattedArticles(replaceArticles)
}

export default handleSelect