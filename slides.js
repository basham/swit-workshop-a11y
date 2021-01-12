const messages = {
  '40-0': 'Landmarks menu.',
  '40-1': 'Links menu.',
  '40-2': 'Headings menu.',
  '40-3': 'Heading level 1. Virtual Statewide IT Conference 2021.',
  '40-4': 'Heading level 3. Staff kudos form.',
  '56': 'List fruit. 3 items.',
  '57': 'Apple. 1 of 3.',
  '58': 'Banana. 2 of 3.'
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
