const messages = {
  '43-0': 'Landmarks menu.',
  '43-1': 'Links menu.',
  '43-2': 'Headings menu.',
  '43-3': 'Heading level 1. Virtual Statewide IT Conference 2021.',
  '43-4': 'Heading level 3. Staff kudos form.',
  '57': 'List. 3 items.',
  '58': 'Bullet. Apple. 1 of 3.',
  '59': 'Bullet. Banana. 2 of 3.',
  '60': 'List fruit. 3 items.',
  '62x': 'I agree. Unchecked checkbox. Press Space to select.',
  '63x': 'Check. I agree. Checkbox.',
  '64x': 'I agree. Checked checkbox. Press Space to deselect.'
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
