//copy by selecting text yourself
const selectCopy = (setClipboard) => {
    if (document.getSelection()) {
        let selection = document.getSelection()
        selection = selection.toString()
        setClipboard(selection)
    }
}

export default selectCopy