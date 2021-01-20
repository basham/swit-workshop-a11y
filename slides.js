const messages = {
  '68-0': 'Landmarks menu.',
  '68-1': 'Links menu.',
  '68-2': 'Headings menu.',
  '68-3': 'Heading level 1. Virtual Statewide IT Conference 2021.',
  '68-4': 'Heading level 3. Staff kudos form.',
  '105': 'List, Games. 3 items.',
  '106': 'Bullet. Sushi Go!. 1 of 3.',
  '107': 'Bullet. Wingspan. 2 of 3.',
  '129': 'I agree. Unchecked checkbox. Press Space to select or deselect.',
  '130': 'Check. I agree. Checkbox.',
  '131': 'I agree. Checked checkbox. Press Space to select or deselect.'
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
  // Do not speak if in an iframe (speaker notes).
  if (window !== top) {
    return
  }
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
