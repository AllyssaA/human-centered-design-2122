// copy by using voice
const handleCopy = (selected, setClipboard, selectedText) => {
    if(!selected) return

    if(!selectedText) {
        setClipboard(selected[0])
        return
    }

    setClipboard(selected[selectedText === 'een' ? 0 : Number(selectedText -1)])
}


export default handleCopy