// copy by using voice
const handleCopy = (selected, setClipboard, selectedText) => {
    if(!selected) return

    if(!selectedText) {
        setClipboard(selected[0])
        return
    }

    setClipboard(selected[selectedText === 'een' ? 0 : Number(selectedText -1)])
}

//copy by selecting text yourself
// const handleCopy = (setClipboard) => {
//     if (document.getSelection()) {
//         let selection = document.getSelection()
//         selection = selection.toString()
//         setClipboard(selection)
//     }
// }

export default handleCopy