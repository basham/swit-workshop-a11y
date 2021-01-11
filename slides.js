const messages = {
  '35-0': 'Landmarks menu.',
  '35-1': 'Links menu.',
  '35-2': 'Headings menu.',
  '35-3': 'Heading level 1. Virtual Statewide IT Conference 2021.',
  '35-4': 'Heading level 3. Staff kudos form.',
  '35-5': 'Heading level 3. Three dynamic keynote events.',
  '51': 'List fruit. 3 items.',
  '52': 'Apple. 1 of 3.',
  '53': 'Banana. 2 of 3.'
}

Reveal.on('slidechanged', (event) => {
  speak(event.indexh)
})

Reveal.on('fragmentshown', (event) => {
  const { fragmentIndex } = event.fragment.dataset
  const { indexh } = Reveal.getState()
  const id = `${indexh}-${fragmentIndex}`
  speak(id)
})

function speak (messageId) {
  const synth = window.speechSynthesis
  synth.cancel()
  const text = messages[String(messageId)]
  if (!text) {
    return
  }
  const msg = new SpeechSynthesisUtterance(text)
  msg.rate = 1.5
  synth.speak(msg)
}
