import { useEffect, useState } from 'react'
import useClippy from 'use-clippy'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Alert } from '../components'
import { handleCopy, handleSelect, handlePaste } from '../utils'
import { Mic, Close } from '../assets'



const Voice = ({articles, setFormattedArticles}) => {
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

const { transcript, listening } = useSpeechRecognition({ commands })

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
        setAlert('Tekst is geplakt.')
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
            <div className='utils'>
            {alert && <Alert message={alert} />}
                <p>{transcript ? transcript : 'Transcriptie komt hier.'}</p>
                <div className='instructies'>
                    <h2>Instructies</h2>
                    <p>Selecteer: zeg "selecteer (begin woorden) tot (eind woorden)"</p>
                    <p>Kopieeren: zeg "kopieer"</p>
                    <p>Plakken: zeg "plakken"</p>
                </div>
                <textarea disabled value={paste} placeholder='hier kan je tekst plakken'/>
            </div>
            <button className='voice-button' onClick={handleMic}>
              <img className='mic-icon' src={listening ? Close : Mic} alt='Icon van een microfoon' />
            </button>
        </div>

    )
}

export default Voice