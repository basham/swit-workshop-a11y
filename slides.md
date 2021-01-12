# Incorporating Accessibility in the Design Process

Statewide IT 2021 Workshop

Chris Basham



## Chris Basham

csbasham@iu.edu

UX designer in Enterprise Student Systems.

*Accessibility. Front-end dev. Design systems.*



## Outline

| Time | Duration | Description  |
| ----:| --------:| ------------ |
| 1:00 |      10m | Introduction |
| 1:10 |      50m | Lecture      |
| 2:00 |      10m | Break        |
| 2:10 |      50m | Exercises    |
| 3:00 |      10m | Break        |
| 3:10 |      50m | Exercises    |



## Zoom etiquette

- Mute when you're not talking.
- Use chat.
- Use annotations, stamps.



## Problem

Accessibility is addressed too late in the development process.



## Consequences

- Poor or unusable for those with assistive tech.
- Devs are forced to make design decisions.
- Bugs, technical debt.



## Improve knowledge

- Understand assistive tech.
- Learn how users use assistive tech.
- Study WCAG, ARIA, inclusive design.
- Talk, teach about accessibility.
- Join Slack channel `iu-uits#topic-accessibility-web`.



## Improve process

- Discuss accessibility expectations early.
- Practice using a screen reader.
- Enrich design deliverables.
- Test accessibility before, after development.



## Improve feedback

- Get early feedback from assistive tech users.
- Hire assistive tech users.
- [Request an accessibility evaluation](https://ux.iu.edu/accessibility/) from the UITS&nbsp;Accessibility&nbsp;Team.



## Enterprise Systems

- [Accessibility Bootcamp](https://iu.mediaspace.kaltura.com/channel/Accessibility%2Bbootcamp/165180531) training
- [Accessibility Development Guidelines](https://uisapp2.iu.edu/confluence-prd/display/TAG/Accessibility+Development+Guidelines)
- Accessibility shares in dev community of practice
- Automated accessibility testing
- Cross-team accessibility committee
- Partnering with UITS Accessibility Team



## Workshop goals

- Learn how a screen reader works, communicates.
- Simulate the screen reader experience.
- Examine, discuss, annotate wireframes.



## Out of scope

- Practice using a screen reader.
- Deep-dive into WCAG Success Criteria.



## Overview

Note:
Now that we've established where we're going during this workshop, let's start by better understanding accessibility and how it fits into what we do.



## Human perfection is&nbsp;a&nbsp;myth

Note:
There is no perfect human or human condition. Everyone has both abilities and disabilities. We are simply different along that spectrum.



## Disability is a mismatched interaction

Environment + Social context + Limitations

Note:
We should think of disabilities as a mismatched interaction between a person and the world. This conflict is unique, depending on the environment or social context or limitations of the person.



## Environment

Location. Weather. Time. Objects.

Note:
The environment surely affects how we interact with the world. Being physical beings, we must be situated in a particular place and time. Maybe that's at home, at work, in the woods, or in a busy city center. Time of day, severity of the weather, and the stuff around you all affects what you can or want to do.



## Social context

Alone. Coworkers. Crowd. Friends. Family.

Note:
Secondly, how you behave changes according to if you're alone or with others. And who those others are and how many of them will continue to affect your choices and behavior. An quiet setting with close friends is much different than a loud setting with strangers.



## Limitations

Touch. Sight. Hearing. Speech. Cognition.

Note:
Thirdly, you may be physically limited in what you can do.



|           | Permanent  | Temporary     | Situational       |
| --------- | ---------- | ------------- | ----------------- |
| **Touch** | One arm    | Arm injury    | New parent        |
| **See**   | Blind      | Cataract      | Distracted driver |
| **Hear**  | Deaf       | Ear infection | Bartender         |
| **Speak** | Non-verbal | Laryngitis    | Heavy accent      |

Note:
Let's look at some examples. I could be born or become blind, meaning I've permanently lost my sight. But sight could also be affected temporarily. My sight could gradually degrade as I develop cataracts, but then with a procedure, my full sight could be restored. My sight could also be negatively affected by being distracted. I get a text message. I look down and take my eyes of the road, increasing the danger for myself and others.

As another example, I could be mute, or my throat could be raspy because of a sickness, or I travel to a place where my accent is not easily discerned.

As these examples illustrate, we all experience limitations of some form. Sometimes they're obvious. Sometimes they're not.



## Mismatches cause exclusion

- Person + Person
- Person + Environment
- Person + Object

<footer>

See: [*Microsoft Design Inclusive Toolkits*](https://www.microsoft.com/design/inclusive/)

</footer>

Note:
When we experience these mismatches, we inevitably experience some form of exclusion. We can't talk to a friend. We can't go where we want to go. We can't use a thing the way we want to.

As a simple example, when I was growing up, my family would often go to amusement parks. I loved going on roller coasters. But one time, after waiting in line for what seemed like hours, I was denied entry. I was too short. By a mere inch. I got mad and angry and threw fits. If the height requirement needed many inches, okay. I could handle that. But an inch was just close enough to be frustrating.

I was excluded from doing what I wanted to do. Granted, for this case, it was on purpose and for my personal safety. But many times, exclusion is not necessary. It becomes a form of cruelty. And not everyone has the power or energy or means to improve their situation.



## Tech can help or hinder

- Person + (Tech) + Person
- Person + (Tech) + Environment
- Person + (Tech) + Object

Note:
Technology can be one means of augmenting these interactions, so that these mismatches can be overcome. We are currently using Zoom to communicate across distances. You use a can opener to open a can. You use a hat to shield you from the sun.

But not all technology is great. It can be misused, be abused, be nefarious, or simply be poorly designed. As those who work in technology, it is our obligation to create things that improve the lives of others. That could mean saving them time, energy, and frustration. But more importantly, it could mean empowering them to be included in society in ways previously restricted.



## Accessibility

"Can I use this?"

Note:
Accessibility is inherently about inclusion. It askes the question, "Can I use this thing?" On the surface, the answer is binary. But as we've already learned, what one person is capable of is different than another or even themselves, depending on context and limitations.



## Usability

"How well can I use this?"

Note:
Usability expands on capability and answers the question, "How well can I use this thing?" Does it demand a lot of time and causes frustration? Or does it easily disappear into the background, and the thing becomes a natural extension of myself?



## Assistive tech

- Mobility, hearing, cognitive aids
- Closed captioning
- Ramps, bars, wide doorways, elevators
- Hardware, software

Note:
Technology that is purposefully designed to be highly accessible and usable is known as assistive technology. A crutch is a mobility aid. A sticky note is a cognitive aid. Closed captioning allows the deaf to experience movies and even those with hearing to confirm a phrase spoken softly. Ramps and wide doorways make it easy for those in wheelchairs and those with strollers to move it buildings.



## Assistive software

- Keyboard shortcuts
- Spell check, word prediction
- Voice control, dictation
- Contrast, color, motion, magnification settings
- Screen readers

Note:
And of course, there is assistive software. Shortcuts allows you to make a change, without hunting through menus. Spell check and word predition helps you to type (sometimes). You can adjust screen colors, if you are color blind and can't see red. You can zoom. And you can use a screen reader. That's where we'll spend most of our time during this workshop.



## Screen readers

Narrate, navigate, interact with content.

Note:
A screen reader is a tool that gives you an alternative way to use a computer. A sighted user can experience a 2 or 3 dimensional visual interface, but a bind user cannot.



## Keyboard is required

Assistive tech relies on proper keyboard behavior.

Note:
Instead of a mouse, you navigate with a keyboard. Instead of reading with your eyes, you listen with your ears or touch your fingers to a braille device. Getting keyboard behavior working well is the foundational step to making the software compatible with assistive tech.



## Tech stack

<dl class="slide-tech-stack">
  <div class="stack stack--span">
    <dt class="label"><code><></code> Website</dt>
  </div>
  <div class="stack">
    <dt class="label">Software</dt>
    <dd class="node">🌲 DOM tree</dd>
    <dd class="node fragment">🎄 Accessibility tree</dd>
    <dd class="node fragment">🍎 Operating system</dd>
    <dd class="node fragment">👁 Screen reader</dd>
  </div>
  <div class="stack">
    <dt class="label">Hardware</dt>
    <dd class="node">📺 Monitor</dd>
    <dd class="node fragment">🔈 Speakers</dd>
    <dd class="node fragment">🎹 Keyboard</dd>
    <dd class="node fragment">🔘 Braille</dd>
  </div>
  <div class="stack stack--span">
    <dt class="label">🙂 User</dt>
  </div>
</dl>

Note:
Let's first look at the technology stack. When you build a website, the user interfaces with it through a browser. That browser interprets HTML, CSS, and JavaScript to render what the user sees, the visual user interface (UI). This interpretation is the DOM tree, short for Document Object Model. The user does not directly interact with the HTML. They interact with the DOM. This DOM can differ from browser to browser.

But the stack is more complicated than that for assistive technology. The accessibility tree prepares the DOM to be used outside of the browser. That gets passed to the operating system's accessibility API, which interfaces with screen reader software and other hardware.

As we can see, there are a lot of layers between the code and what the user experiences. Each layer can interrupt the interaction between the user and the website. The more layers, the more chance of an interruption. In short, screen reader users are much more susceptible to an inaccessible or unusable experience than many others.

See: [*The intersection of performance and accessibility*](https://noti.st/ericwbailey/Yfyaxa/the-intersection-of-performance-and-accessibility)



## You can't control:

- Browser, operating system
- Assistive tech
- User settings, skill level



## You control your code

- Semantic HTML
- Design for mobile
- Usable with keyboard

Note:
You can control your code. Semantic code will more cleanly translate into the accessibility tree. Designing for mobile devices will help keep the content clean. Making all functionality usable with a keyboard means assistive tech can likely use it.



## Software pairings

|       | Platform | Screen reader | Browser |
| ----- | -------- | ------------- | ------- |
| **1** | Windows  | NVDA          | Firefox |
| **2** | macOS    | VoiceOver     | Safari  |
| **3** | iOS      | VoiceOver     | Safari  |

<footer>

See: [*Use a screen reader to evaluate a website* (IU&nbsp;Knowledge&nbsp;Base)](https://kb.iu.edu/d/atey)

</footer>

Note:
When testing websites, we tend to check the site in the major browsers and call that good enough. However, when considering screen readers and the brittleness between the software layers, where do we start? Luckiliy, the IU Knowledge Base provides recommendations. There are certain combinations of software that give the best experence for users, are popular, and free to use.

NVDA and Firefox will most quickly reveal issues with your markup. They pay the most attention to accessibility standards. Then use VoiceOver on macOS and iOS as a secondary quality check.

Each screen reader has its own personality. The browser pairing will modify that personality. No need to force one screen reader to say what other says.



## General usage

- JAWS, NVDA are most popular for desktop.
- 85% use iOS VoiceOver.
- ChromeVOX is barely used.
- Users use one screen reader per device.

Note:
In the general public, JAWS and NVDA are the most used by those with no or low vision. JAWS is the most robust screen reader, but don't bother with it, because of its cost, at $1,000 per license.

iOS has 85% of marketshare of assistive tech users, in both the general public and Indiana University Bloomington students.

Web developers love Chrome, but it is not the best paired with screen readers. Almost no one uses ChromeVOX, as it is browser only.

While we may test multiple screen readers, users will tend to only use one screen reader per device.



## How screen readers work



## Orientation

Focus. Cursors.



## Focus

"Blue outline"

<div class="slide-focus">Save</div>



## Keyboard cursor

"Blinky pipe"

<div class="slide-keyboard-cursor">
  <div class="label">Name</div>
  <div class="input">Chris</div>
</div>



## Screen reader cursor

"Black outline"

<div class="slide-sr-cursor">
  <ul>
    <li>Apple</li>
    <li class="cursor">Banana</li>
    <li>Strawberry</li>
  </ul>
</div>



## Navigation

Rotor. Shortcuts.



## Rotor

"Table of contents" for [Statewide IT 2021](https://statewideit.iu.edu)

<div class="slide-rotor r-stack">
  <div class="section">
    <h3>Landmarks</h3>
    <ul>
      <li>Main navigation</li>
      <li>main</li>
      <li>contentinfo</li>
      <li>&nbsp;</li>
      <li>&nbsp;</li>
      <li>&nbsp;</li>
      <li>&nbsp;</li>
    </ul>
  </div>
  <div class="section fragment">
    <h3>Landmarks</h3>
    <ul>
      <li>Main navigation</li>
      <li>main</li>
      <li>contentinfo</li>
      <li>&nbsp;</li>
      <li>&nbsp;</li>
      <li>&nbsp;</li>
      <li>&nbsp;</li>
    </ul>
  </div>
  <div class="section fragment">
    <h3>Links</h3>
    <ul>
      <li>Skip to Content</li>
      <li>Skip to Main Navigation</li>
      <li>Skip to Search</li>
      <li>INDIANA UNIVERSITY</li>
      <li>Open Search</li>
      <li>Virtual Statewide IT Conference 2021</li>
      <li>WHAT TO EXPECT</li>
    </ul>
  </div>
  <div class="section fragment">
    <h3>Headings</h3>
    <ul>
      <li>1: Virtual Statewide IT Conference 2021</li>
      <li>3: Staff kudos form</li>
      <li>3: Three dynamic keynote events</li>
      <li>2: Keynote Speakers</li>
      <li>4: Rob Lowden</li>
      <li>4: Michael McRobbie</li>
      <li>4: Stacy Morrone</li>
    </ul>
  </div>
  <div class="section fragment">
    <h3>Headings</h3>
    <ul>
      <li class="active">1: Virtual Statewide IT Conference 2021</li>
      <li>3: Staff kudos form</li>
      <li>3: Three dynamic keynote events</li>
      <li>2: Keynote Speakers</li>
      <li>4: Rob Lowden</li>
      <li>4: Michael McRobbie</li>
      <li>4: Stacy Morrone</li>
    </ul>
  </div>
  <div class="section fragment">
    <h3>Headings</h3>
    <ul>
      <li>1: Virtual Statewide IT Conference 2021</li>
      <li class="active">3: Staff kudos form</li>
      <li>3: Three dynamic keynote events</li>
      <li>2: Keynote Speakers</li>
      <li>4: Rob Lowden</li>
      <li>4: Michael McRobbie</li>
      <li>4: Stacy Morrone</li>
    </ul>
  </div>
</div>



## Rotor content

| Content       | Examples                      |
| ------------- | ----------------------------- |
| Landmarks     | `<header>`, `<main>`, `<nav>` |
| Headings      | `<h1>`…`<h6>`                 |
| Links         | `<a>`                         |
| Form controls | `<button>`, `<input>`         |
| Tables        | `<table>`                     |
| Articles      | `<article>`                   |



## Shortcuts

| Operation              | Command              |
| ---------------------- | -------------------- |
| Start / stop VoiceOver | `Command` + `F5`     |
| VoiceOver keys (VO)    | `Control` + `Option` |
| Lock / unlock VO keys  | `VO` + `;`           |
| Open rotor             | `VO` + `U`           |



## Go to next focusable element

(`Shift`) + `Tab`



## Go to next heading

`VO` + (`Shift`) + `Command` + `H`



## Go to next table

`VO` + (`Shift`) + `Command` + `T`



## Go to next list

`VO` + (`Shift`) + `Command` + `X`



## Go to next element

`VO` + (`Shift`) + `Command` + [element]

- Link (`L`)
- Visited link (`V`)
- Form control (`J`)
- Graphic (`G`)



## Move like a tree

| Operation     | Command                          |
| ------------- | -------------------------------- |
| Down/Up       | `VO` + `Shift` + `Down/Up Arrow` |
| Next/Previous | `VO` + `Right/Left Arrow`        | 

<div class="slide-tree r-stack">
  <div class="line line--1"></div>
  <div class="line line--2"></div>
  <div class="line line--3"></div>
  <div class="line line--4"></div>
  <div class="node node--1"></div>
  <div class="node node--2"></div>
  <div class="node node--3"></div>
  <div class="node node--4"></div>
  <div class="node node--5"></div>
  <div class="node node--6"></div>
  <div class="node node--1 fragment">↓</div>
  <div class="node node--2 fragment">↓</div>
  <div class="node node--3 fragment">→</div>
  <div class="node node--4 fragment">↑</div>
  <div class="node node--2 fragment">→</div>
  <div class="node node--6 fragment"></div>
</div>



## Summary

- Everyone has limitations.
- Tech can help make a more inclusive world.
- Screen reader users navigate with <br> focus, cursors, rotor, shortcuts.



## After the break

- What screen readers communicate
- Exercises



# Break

10 minutes

Return at 2:10



# Exercises



## Read the screen

Exercise 1



## ISO

|               |                                           |
| ------------- | ----------------------------------------- |
| **Identity**  | What am I interacting with?               |
| **State**     | What is the current status of this thing? |
| **Operation** | How do I use this thing?                  |

<footer>

See: [*How to Describe Complex Designs for Users with Disabilities*](https://medium.com/salesforce-ux/how-to-describe-complex-designs-for-users-with-disabilities-ba05f5224130)

</footer>

Note:
aria-label
role



## List

```html
<ul aria-label="fruit">
  <li>Apple</li>
  <li>Banana</li>
  <li>Strawberry</li>
</ul>
```



## List

|               |              |
| ------------- | ------------ |
| **Identity**  | "List fruit" |
| **State**     | "3 items"    |
| **Operation** | ""           |

<div class="slide-list">
  <ul class="cursor">
    <li>Apple</li>
    <li>Banana</li>
    <li>Strawberry</li>
  </ul>
</div>



## List

|               |          |
| ------------- | ---------|
| **Identity**  | "Apple"  |
| **State**     | "1 of 3" |
| **Operation** | ""       |

<div class="slide-list">
  <ul aria-label="Fruit">
    <li class="cursor">Apple</li>
    <li>Banana</li>
    <li>Strawberry</li>
  </ul>
</div>



## List

|               |          |
| ------------- | -------- |
| **Identity**  | "Banana" |
| **State**     | "2 of 3" |
| **Operation** | ""       |

<div class="slide-list">
  <ul>
    <li>Apple</li>
    <li class="cursor">Banana</li>
    <li>Strawberry</li>
  </ul>
</div>



## Checkbox

|               |                                                    |
| ------------- | -------------------------------------------------- |
| **Identity**  | "I agree to these terms and conditions. Checkbox." |
| **State**     | "Unchecked."                                       |
| **Operation** | "Press spacebar to check."                         |

<div class="slide-checkbox">
  <input id="terms-conditions" type="checkbox" class="cursor">
  <label for="terms-conditions">I agree to these terms and conditions<label>
</div>
