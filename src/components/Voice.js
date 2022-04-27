import { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClippy from 'use-clippy'
import { handleCopy, handleSelect, handlePaste } from '../utils'
import { Alert } from '../components'
import { Close, Mic } from '../assets'



const Voice = ({ articles, setFormattedArticles }) => {
    const [command, setCommand] = useState()
    const [paste, setPaste] = useState()
    const [clipboard, setClipboard] = useClippy()
    const [selected, setSelected] = useState()
    const [alert, setAlert] = useState()

const commands = [
    {
        command: 'kopieer',
        callback: () => {
            handleCopy(selected, setClipboard)
            setCommand('kopieer')
        },
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2,
        bestMatchOnly: true
    },
    {
        command: 'selecteer * tot *',
        callback: (first, second) => {
            handleSelect(first, second, articles, setSelected, setFormattedArticles)
            setCommand('selecteer')
        },
    },
    {
        command: 'plakken',
        callback: () => {
            handlePaste(clipboard, setPaste)
            setCommand('plakken') 
        },
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2,
        bestMatchOnly: true
    }
]

const { listening } = useSpeechRecognition({ commands })

useEffect(() => {
    setAlert()
    if(!command) return
    if (command === 'kopieer') {
        setAlert('Gekopieerd!')
        return
    }
    if (command === 'selecteer') {
        setAlert(selected.length ? 'Geselecteerd!' : 'Kan de tekst niet vinden..')
        return
    }
    if (command === 'plakken') {
        setAlert('Teskt is geplakt.')
    }
}, [command, selected])

    const handleMic = () => {
        if(listening) {
            SpeechRecognition.abortListening()
        }else {
            setCommand()
            SpeechRecognition.startListening({ language: 'nl-NL' })
        }
    }

    if(!SpeechRecognition.browserSupportsSpeechRecognition()) return null

    return (
        <div>
            {alert && <Alert message={alert} />}
            <textarea disabled value={paste} />
            <button className='voice-button' onClick={handleMic}>
          <img className='mic-icon' src={listening ? Close : Mic} alt='Icon van een microfoon' />
        </button>
        </div>

    )
}

export default Voice