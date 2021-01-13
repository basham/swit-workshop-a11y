# Incorporating Accessibility in the Design Process

Statewide IT 2021 Workshop

Chris Basham

Notes:
Welcome everyone to this workshop. Today, we'll learn how to incorporate accessibility in the design process. First, let's start with some background and logistics.



## Chris Basham

csbasham@iu.edu

UX designer in Enterprise Student Systems.

*Accessibility. Front-end dev. Design systems.*

Notes:
I'm Chris Basham. I've worked at Indiana University since 2012, as a UX designer and front-end developer, working on various web software products. Over recent years, I've dived deeper into the topic of accessibility, and I want to share with you what I've learned regarding the intersection of these topics.



## Outline

| Time | Duration | Description  |
| ----:| --------:| ------------ |
| 1:00 |      10m | Introduction |
| 1:10 |      50m | Lecture      |
| 2:00 |      10m | Break        |
| 2:10 |      50m | Exercises    |
| 3:00 |      10m | Break        |
| 3:10 |      50m | Exercises    |

Notes:
The workshop today is split into 3 major sections, over the course of 3 hours. The first will be a lecture, followed later by exercises. Each section will be divided by 10 minute breaks.



## Zoom etiquette

- Submit questions in chat.
- Questions will be answered after the break.
- Mute when you're not talking.
- Use annotations, stamps.

Notes:
Because there's a lot to cover in this first section, I request you to submit any questions you have in the Zoom chat and keep yourself muted. I will then follow up with those questions after the break. Once we transition to exercises, I will encourage more engagement. And we'll use some of Zoom's annotation features, so everyone can collaborate, in a bigger way.



## Resources

https://github.com/basham/swit-workshop-a11y

Notes:
All resources for this workshop, including slides, slide notes, exercises, and links, are located on GitHub. Visit github.com/basham/swit-workshop-a11y. This link is posted in the Zoom chat.



# Problem

Accessibility is addressed too late in the development process.

Notes:
The problem we're addressing with this workshop today is that accessibility is often addressed too late in the development process.



## Consequences

- Devs are forced to make design decisions.
- Poor or unusable for those with assistive tech.
- Bugs, technical debt.

Notes:
There's a number of issues that result from this. When devs aren't given proper direction, they are forced to make decisions, the best they can. Because accessibility is not designed upfront, the experience for those using assistive technologies with the product is unknown. It could be fine, but likely it is poor or unusable in certain ways. Reworking is inevitable, resulting in bugs, ever growing technical debt, a lower quality product, high costs, and a slow process.



## Improve knowledge

- Learn how assistive tech is used.
- Study WCAG, ARIA, inclusive design.
- Review IU Knowledge Base articles.
- Talk, teach about accessibility.
- Join Slack channels.

Notes:
There are a lot of ways we address this problem. First, you can improve your knowledge. Research how assistive technology is used. Study the WCAG and ARIA documentation to better understand the vastness of the specs. Especially if you're a designer, investigate inclusive design practices. The IU Knowledge Base provides a lot of guidance, especially tailored for the work we do. You can talk and teach about accessibility, both within your team and among the teams you work with. There are a number of forums in which you talk about accessibility. The #topic-accessibility-web channel being of them on the iu-uits Slack workspace.



## Improve process

- Involve everyone.
- Discuss accessibility expectations early.
- Enrich design deliverables.
- Practice using keyboard, screen reader.
- Test accessibility before, after development.

Notes:
Second, you can improve your process. Everyone needs to be involved, including management, product owners, business analysts, quality assurance, developers, and designers. Teams should discuss accessibility expectations early in the process. Document those expectations alongside acceptance criteria, testing notes, and design deliverables. Include accessibility notes in wireframes. Put aside the mouse and test your software using a keyboard only. Practice using a screen reader, on both desktop and mobile device. Evaluate the accessibility of a design direction before development, and then test it again once implemented. Make accessibility reviews part of your team's process.



## Improve feedback

- Get early feedback
- Seek assistive tech users, experts, communities of practice, Digital&nbsp;Accessibility&nbsp;Office.
- Hire assistive tech users.

Notes:
Third, you should seek feedback from others. Get feedback from those who use assistive technologies. Seek accessibility experts from within your division or outside. Get involved in the various web development and design communities of practice. Reach out to the Digital Accessibility Office. And if you hire people who use assistive technologies, you'll have even a more direct means of feedback.



## Accessibility at IU

Notes:
Now, let's talk about some examples of accessibility initiatives at Indiana University.



## Digital Accessibility Office

- [IU.edu](https://www.iu.edu/)
- [IUPUI.edu](https://www.iupui.edu/)
- [IU Mobile](https://www.iu.edu/mobile-app/)

Notes:
The Digital Accessibility Office lead by Greg Hanek has been pushing to have accessibility addressed in the planning and design stages. They've recently worked on the IU site, IUPUI site, and the IU Mobile app. Involving them early has made a huge difference in the quality of those projects.



## Enterprise Systems

- [Accessibility Bootcamp](https://iu.mediaspace.kaltura.com/channel/Accessibility%2Bbootcamp/165180531) training
- [Accessibility Development Guidelines](https://uisapp2.iu.edu/confluence-prd/display/TAG/Accessibility+Development+Guidelines)
- Accessibility shares in dev community of practice
- Automated accessibility testing
- Cross-team accessibility committee
- Partnering with Digital Accessibility Office

Notes:
The Enterprise Systems division, which I am part of, has been doing a lot to improve our practices. In April, experts at Deque University conducted a multi-day bootcamp training for us. That content is now available for anyone at IU through Kaltura. Our developer leads have published accessibility guidelines for teams to follow. Developers will share various accessibility implementations and what they've learned, with the community of practice. Developers have incorporated automated accessibility testing tools, so we identify issues before features are manually tested. We have meetings to address accessibility issues across teams. And we've started to partner with the Digital Accessibility Office to evaluate some of our products.



## Workshop goals

- Learn how a screen reader works, communicates.
- Simulate the screen reader experience.
- Examine, discuss, annotate wireframes.

Notes:
For the remainder of this workshop, we will focus on a few core things. We will learn how a screen reader works and communicates. Then we will conduct a number of exercises to help you better understand the experience of those using screen readers. Then we will explore how we can enrich design deliverables like wireframes to better articulate accessibility expectations.



## Out of scope

- Practice using a screen reader.
- Deep-dive into WCAG Success Criteria.

Notes:
Given time constraints, we won't devote time during this workshop to practice using a screen reader. Also, we won't dive into the details of accessibility documentation. Those are good things for you to do at your own pace.



# Overview

Notes:
Now that we've established where we're going during this workshop, let's start by better understanding accessibility and how it fits into what we do.



## Human perfection is&nbsp;a&nbsp;myth

Notes:
There is no perfect human or human condition. Everyone has both abilities and disabilities. We are simply different along that spectrum.



## Disability is a mismatched interaction

Environment + Social context + Impairments

<footer>

See: [*Types of disabilities*](https://kb.iu.edu/d/atpo) (IU Knowledge Base)

</footer>

Notes:
We should think of disabilities as a mismatched interaction between a person and the world. This conflict is unique, depending on the environment, social context, or ways in which the person is impaired.



## Environment

Location. Weather. Time. Objects.

Notes:
The environment surely affects how we interact with the world. Being physical beings, we must be situated in a particular place and time. Maybe that's at home, at work, in the woods, or in a busy city center. Time of day, severity of the weather, and the stuff around you all affects what you can or want to do.



## Social context

Alone. Coworkers. Crowd. Friends. Family.

Notes:
Secondly, how you behave changes according to if you're alone or with others. And who those others are and how many of them will continue to affect your choices and behavior. An quiet setting with close friends is much different than a loud setting with strangers.



## Impairments

Permanent. Temporary. Situational.

Vision. Hearing. Mobility. Cognitive. Speech.

Noticeable. Invisible.

Notes:
Thirdly, you may be physically impaired in what you can do. Those impairments could be permanent, temporary, or situational. And those impairments can cover a range of physical and mental contexts. And those impairments may be noticeable by others or may be invisible to others.



|               | Permanent  | Temporary     | Situational  |
| ------------- | ---------- | ------------- | ------------ |
| **Vision**    | Blind      | Eye injury    | Bright room  |
| **Hearing**   | Deaf       | Ear infection | Noisy room   |
| **Mobility**  | Paralyzed  | Broken arm    | Carrying box |
| **Cognitive** | Dyslexia   | Concussion    | Distracted   |
| **Speech**    | Non-verbal | Laryngitis    | Heavy accent |

<footer>

See: [*Types of impairments*](https://kb.iu.edu/d/ayuj) (IU Knowledge Base)

</footer>

Notes:
Let's look at some examples. I could be born or become blind. Or maybe my sight could degrade because of an injury or cataracts. Then with a procedure, full sight could be restored. My sight could also be negatively affected by being in a bright room. If I'm driving, I could get distracted by a text message. My throat could be raspy because of a sickness. I travel to a place where my accent is not easily discerned. As these examples illustrate, we all experience impairments of some form.



## Mismatches cause exclusion

- Person + Person
- Person + Environment
- Person + Object

<footer>

See: [*Microsoft Design Inclusive Toolkits*](https://www.microsoft.com/design/inclusive/)

</footer>

Notes:
When we experience these mismatches, we inevitably experience some form of exclusion. We can't talk to a friend. We can't go where we want to go. We can't use a thing the way we want to.

As a simple example, when I was growing up, my family would often go to amusement parks. I loved going on roller coasters. But one time, after waiting in line for what seemed like hours, I was denied entry. I was too short. By a mere inch. I got mad and angry and threw fits. If the height requirement needed many inches, okay. I could handle that. But an inch was just close enough to be frustrating.

I was excluded from doing what I wanted to do. Granted, for this case, it was on purpose and for my personal safety. But many times, exclusion is not necessary. It becomes a form of cruelty. And not everyone has the power or energy or means to improve their situation.



## Tech can help or hinder

- Person + (Tech) + Person
- Person + (Tech) + Environment
- Person + (Tech) + Object

Notes:
Technology can be one means of augmenting these interactions, so that these mismatches can be overcome. We are currently using Zoom to communicate across distances. You use a can opener to open a can. You use a hat to shield you from the sun.

But not all technology is great. It can be misused, be abused, be nefarious, or simply be poorly designed. As those who work in technology, it is our obligation to create things that improve the lives of others. That could mean saving them time, energy, and frustration. But more importantly, it could mean empowering them to be included in society in ways previously restricted.



## Accessibility

"Can I use this?"

Notes:
Accessibility is inherently about inclusion. It asks the question, "Can I use this thing?" On the surface, the answer is binary. But as we've already learned, what one person is capable of is different than another or even themselves, depending on context and limitations.



## Usability

"How well can I use this?"

Notes:
Usability expands on capability and answers the question, "How well can I use this thing?" Does it demand a lot of time and causes frustration? Or does it easily disappear into the background, and the thing becomes a natural extension of myself?



## Assistive tech

- Mobility, hearing, cognitive aids
- Closed captioning
- Ramps, bars, wide doorways, elevators
- Hardware, software

Notes:
Technology that is purposefully designed to be highly accessible and usable is known as assistive technology. Depending on your needs, you may use various combinations of assistive tech. A crutch is a mobility aid. A sticky note is a cognitive aid. Closed captioning allows the deaf to experience movies and even those with hearing to confirm a phrase spoken softly. Ramps and wide doorways make it easy for those in wheelchairs and those with strollers to move it buildings.



## Assistive software

- Keyboard shortcuts
- Spell check, word prediction
- Voice control, dictation
- Contrast, color, motion, magnification settings
- Screen readers

Notes:
And of course, there is assistive software. Shortcuts allows you to make a change, without hunting through menus. Spell check and word prediction helps you to type (sometimes). You can adjust screen colors, if you are color blind and can't see red. You can zoom. And you can use a screen reader. That's where we'll spend most of our time during this workshop.



## Screen readers

Narrate, navigate, interact with content.

Notes:
A screen reader is a tool that gives you an alternative way to use a computer. A sighted user can experience a 2 or 3 dimensional visual interface, but a blind user cannot.



## Keyboard is required

Assistive tech relies on proper keyboard behavior.

Notes:
Instead of a mouse, you navigate with a keyboard. Instead of reading with your eyes, you listen with your ears or touch your fingers to a braille device. Getting keyboard behavior working well is the foundational step to making the software compatible with assistive tech.



## Tech stack

<figure>
  <dl class="fig-tech-stack">
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
  <figcaption>Numerous software and hardware technologies integrate together as the interface between the website and the user. This includes the DOM tree, Accessibility tree, operating system, screen reader, monitor, speakers, keyboard, and other assistive hardware like braille keyboards.</figcaption>
</figure>

Notes:
Let's first look at the technology stack. When you build a website, the user interfaces with it through a browser. That browser interprets HTML, CSS, and JavaScript to render what the user sees, the visual user interface (UI). This interpretation is the DOM tree, short for Document Object Model. The user does not directly interact with the HTML. They interact with the DOM. This DOM can differ from browser to browser.

But the stack is more complicated than that for assistive technology. The accessibility tree prepares the DOM to be used outside of the browser. That gets passed to the operating system's accessibility API, which interfaces with screen reader software and other hardware.

See: [*The intersection of performance and accessibility*](https://noti.st/ericwbailey/Yfyaxa/the-intersection-of-performance-and-accessibility)



## You can't control:

- Browser, operating system
- Assistive tech
- User settings, skill level

Notes:
As we can see, there are a lot of layers between the code and what the user experiences. You can't control a lot of it. Nor can you control each person's skill level with whatever they're using. Each layer can interrupt the interaction between the user and the website. The more layers, the more chance of an inaccessible or unusable experience.



## You control your code

- Semantic HTML
- Design for mobile
- Usable with keyboard

Notes:
However, you can control your code. Semantic code will more cleanly translate into the accessibility tree. Designing for mobile devices will help keep the content clean. Making all functionality usable with a keyboard means assistive tech can likely use it.



## Software pairings

|       | Platform | Screen reader | Browser |
| ----- | -------- | ------------- | ------- |
| **1** | Windows  | NVDA          | Firefox |
| **2** | macOS    | VoiceOver     | Safari  |
| **3** | iOS      | VoiceOver     | Safari  |

<footer>

See: [*Use a screen reader to evaluate a website* (IU&nbsp;Knowledge&nbsp;Base)](https://kb.iu.edu/d/atey)

</footer>

Notes:
When testing websites, we tend to check the site in the major browsers and call that good enough. However, when considering screen readers and the brittleness between the software layers, where do we start? Luckily, the IU Knowledge Base provides recommendations. There are certain combinations of software that give the best experience for users, are popular, and free to use.

NVDA and Firefox will most quickly reveal issues with your markup. They pay the most attention to accessibility standards. Then use VoiceOver on macOS and iOS as a secondary quality check.

Each screen reader has its own personality. The browser pairing will modify that personality. No need to force one screen reader to say what other says.



## General usage

- JAWS, NVDA are most popular for desktop.
- 85% use iOS VoiceOver.
- ChromeVOX is barely used.
- Users use one screen reader per device.

Notes:
Now a few notes about the general usage of screen readers.

In the general public, JAWS and NVDA are the most used by those with no or low vision. JAWS is the most robust screen reader, but don't bother with it, because of its cost, at $1,000 per license.

iOS has 85% of market share of assistive tech users, in both the general public and Indiana University Bloomington students.

Web developers love Chrome, but it is not the best paired with screen readers. Almost no one uses the ChromeVOX plugin, as it is browser only.

While quality assurance may test with multiple screen readers, users will tend to only use one screen reader per device.



## How screen readers work

Notes:
Now let's look at how screen readers work and how they're used.



## Orientation

Focus. Cursors.

Notes:
First, there are a few ways you can get oriented in an interface.



## Focus

"Blue outline"

<figure>
  <div class="fig-focus">Save</div>
  <figcaption>By default, a blue ring outlines interactive objects, such as this Save button, when in focus.</figcaption>
<figure>

Notes:
A focus ring around an interactive object tells you where keyboard focus is. By default in most browsers, it is a blue outline. Never remove a focus style, as sighted users using keyboards won't know where they are. But you may replace the style with something more aesthetically suitable for your website, as long as there's enough distinction for a low vision person to see it.



## Keyboard cursor

"Blinking pipe"

<figure>
  <div class="fig-keyboard-cursor">
    <div class="label">Name</div>
    <div class="input">Chris</div>
  </div>
  <figcaption>When a text box is in focus, a vertical pipe blinks, indicating the cursor position. In this example, the cursor is positioned after the value "Chris" in the "Name" text box.</figcaption>
</figure>

Notes:
The blinking pipe in a text box is the keyboard cursor. It informs you where you are positioned within a piece of text.



## Screen reader cursor

"Black outline"

<figure>
  <div class="fig-sr-cursor">
    <ul>
      <li>Apple</li>
      <li class="cursor">Banana</li>
      <li>Strawberry</li>
    </ul>
  </div>
  <figcaption>VoiceOver's screen reader cursor is a black outline. In this example, the cursor encompasses the text "Banana", which is the second of three items in a list of fruits.</figcaption>
</figure>

Notes:
A screen reader overlays another type of cursor on the screen. In VoiceOver, it is a black outline around the current piece of content. Whenever this cursor changes position, the screen reader announces information about the new content. Depending on the screen reader settings, this cursor can follow focus, meaning that they outline the same piece of content. However, they don't have to follow each other. You can rest keyboard focus on a form element with the Tab key, while using the screen reader cursor to read surrounding context with other keyboard shortcuts.



## Navigation

Rotor. Shortcuts.

Notes:
Now that you know how to get oriented, there are a couple ways in which you can navigate.



## Rotor

"Table of contents" for [Statewide IT 2021](https://statewideit.iu.edu)

<figure>
  <div class="fig-rotor r-stack">
    <dl class="section">
      <dt>Landmarks</dt>
      <dd>Main navigation</dd>
      <dd>main</dd>
      <dd>contentinfo</dd>
      <dd>&nbsp;</dd>
      <dd>&nbsp;</dd>
      <dd>&nbsp;</dd>
      <dd>&nbsp;</dd>
    </dl>
    <dl class="section fragment">
      <dt>Landmarks</dt>
      <dd>Main navigation</dd>
      <dd>main</dd>
      <dd>contentinfo</dd>
      <dd>&nbsp;</dd>
      <dd>&nbsp;</dd>
      <dd>&nbsp;</dd>
      <dd>&nbsp;</dd>
    </dl>
    <dl class="section fragment">
      <dt>Links</dt>
      <dd>Skip to Content</dd>
      <dd>Skip to Main Navigation</dd>
      <dd>Skip to Search</dd>
      <dd>INDIANA UNIVERSITY</dd>
      <dd>Open Search</dd>
      <dd>Virtual Statewide IT Conference 2021</dd>
      <dd>WHAT TO EXPECT</dd>
    </dl>
    <dl class="section fragment">
      <dt>Headings</dt>
      <dd>1: Virtual Statewide IT Conference 2021</dd>
      <dd>3: Staff kudos form</dd>
      <dd>3: Three dynamic keynote events</dd>
      <dd>2: Keynote Speakers</dd>
      <dd>4: Rob Lowden</dd>
      <dd>4: Michael McRobbie</dd>
      <dd>4: Stacy Morrone</dd>
    </dl>
    <dl class="section fragment">
      <dt>Headings</dt>
      <dd class="active">1: Virtual Statewide IT Conference 2021</dd>
      <dd>3: Staff kudos form</dd>
      <dd>3: Three dynamic keynote events</dd>
      <dd>2: Keynote Speakers</dd>
      <dd>4: Rob Lowden</dd>
      <dd>4: Michael McRobbie</dd>
      <dd>4: Stacy Morrone</dd>
    </dl>
    <dl class="section fragment">
      <dt>Headings</dt>
      <dd>1: Virtual Statewide IT Conference 2021</dd>
      <dd class="active">3: Staff kudos form</dd>
      <dd>3: Three dynamic keynote events</dd>
      <dd>2: Keynote Speakers</dd>
      <dd>4: Rob Lowden</dd>
      <dd>4: Michael McRobbie</dd>
      <dd>4: Stacy Morrone</dd>
    </dl>
  </div>
  <figcaption>The rotor acts as a table of contents. In this example, the rotor opens to the Landmarks menu, then the Links menu, then Headings menu. Then the top two headings are put in focus, to demonstrate what the screen reader says.</figcaption>
</figure>

Notes:
First, the rotor is a tool that dynamically builds a table of contents for the website. Right now we're looking at a Landmarks menu for the Statewide IT conference website. You rotate through these different menus with the right and left arrow keys. Next is the Links menu. This demonstrates why it is important to ensure that the link name itself is sufficiently self-explanatory. If there are a bunch of "read more" or "click here" links in this menu, you have no idea where they would go, because there is no surrounding context. Lastly, we'll look at the Headings menu. The heading level is positioned before the heading name. This demonstrates why you should care about the order of headings. It can be confusing if headings skip. In this case, the level 2, 3, and 4 headings could use some clean up. Pressing the Down and Up arrow keys selects a heading. And pressing Enter will close the rotor; scroll so that the selected heading is visible within the viewport; and highlight the heading with the screen reader cursor.



## Rotor content

| Content       | Examples                        |
| ------------- | ------------------------------- |
| Landmarks     | `<header>`, `<main>`, `<nav>`   |
| Headings      | `<h1>`…`<h6>`, `role="heading"` |
| Links         | `<a>`                           |
| Form controls | `<button>`, `<input>`           |
| Tables        | `<table>`                       |
| Articles      | `<article>`                     |

Notes:
Here's a bigger, yet abbreviated, list of content the rotor will scrape. It will dig through HTML to find certain elements. It could be based on an element's tag name, like "h1". It could be based on an element's role, such as "heading".



## Shortcuts

| Operation              | Command              |
| ---------------------- | -------------------- |
| Start / stop VoiceOver | `Command` + `F5`     |
| VoiceOver keys (VO)    | `Control` + `Option` |
| Lock / unlock VO keys  | `VO` + `;`           |
| Open rotor             | `VO` + `U`           |

Notes:
You operate a screen reader with keyboard shortcuts. To reduce conflict with shortcuts in other apps, screen reader commands usually are prefixed with additional keys. In VoiceOver, these keys are abbreviated "VO", but they stand for holding down both the Control and Option keys at the same time. You can lock the VO keys down so you don't need to press them every time. This is just like if you activate Caps Lock, to avoid holding down Shift to capitalize a sequence of letters.



## Go to next focusable element

(`Shift`) + `Tab`

Notes:
As you're likely already familiar, pressing Tab will advance focus to the next focusable element. This is likely a link, button, or other form control. Pressing Shift at the same time will go backwards instead of forwards. This same Shift-to-go-back pattern is employed for most other commands.



## Go to next heading

`VO` + (`Shift`) + `Command` + `H`

Notes:
You can also go to the next or previous heading.



## Go to next table

`VO` + (`Shift`) + `Command` + `T`

Notes:
Go to the next or previous table.



## Go to next list

`VO` + (`Shift`) + `Command` + `X`

Notes:
Go to the next or previous list.



## Go to next element

`VO` + (`Shift`) + `Command` + [element]

- Link (`L`)
- Visited link (`V`)
- Form control (`J`)
- Graphic (`G`)

Notes:
And do the same for links, visited links, form controls, and graphics.



## Move like a tree

| Operation     | Command                          |
| ------------- | -------------------------------- |
| Down/Up       | `VO` + `Shift` + `Down/Up Arrow` |
| Next/Previous | `VO` + `Right/Left Arrow`        | 

<figure>
  <div class="fig-tree r-stack">
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
  <figcaption>Circles representing nodes are linked together with lines. They're arranged with the root node on top. That links to two child nodes. The first child node links to three more child nodes. Using a keyboard, you an navigate down, up, left, and right through the tree. This is how you navigate through objects with a screen reader.</figcaption>
</figure>

Notes:
Some content is more complicated. Content can be nested inside of content. This nesting is important. When you go to this content, you don't want all of it announced at once, like a blob of raw content. It would be like removing all formatting in a book. The only context given to you is that one sentence follows another. Instead, you want organization and meaning. Organization is defined by hierarchy. A root node has child and grandchild nodes. Meaning is defined by attributes, which labels and links content. When a screen reader encounters one of these objects, it tells information about the object itself. Then you navigate down, up, next, or previous through this tree of content to explore. This is similar to navigating through a directory of files on your computer.



## Summary

- Everyone experiences impairments.
- Tech can help make a more inclusive world.
- Screen reader users navigate with <br> focus, cursors, rotor, shortcuts.

Notes:
In summary, everyone experiences impairments. The severity of those impairments and surrounding context can exclude people from doing what they want to do. If properly designed, technology can intervene and make the world more inclusive. And in examining the screen reader, as one example of assistive software, we illustrate that there is no technical reason why anyone should be excluded from using the websites we build. We must be intentional about including others. That intention should manifest in how we think, how we work, and what we create.



## After the break

- What screen readers communicate
- Exercises

Notes:
After the break, we'll transition into some exercises. As a reminder, please submit any questions you have so far in the chat. I'll address them once we return. Thank you, and see you in 10 minutes.



# Break

10 minutes

Return at 2:10



# Questions



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

Notes:
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
| **Operation** | —            |

<div class="fig-list">
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
| **Operation** | —        |

<div class="fig-list">
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
| **Operation** | —        |

<div class="fig-list">
  <ul>
    <li>Apple</li>
    <li class="cursor">Banana</li>
    <li>Strawberry</li>
  </ul>
</div>



## Checkbox

|               |                          |
| ------------- | ------------------------ |
| **Identity**  | "I agree. Checkbox."     |
| **State**     | "Unchecked."             |
| **Operation** | "Press Space to select." |

<figure>
  <div class="fig-checkbox">
    <input id="fig-agree-1" type="checkbox" class="sr-only">
    <label for="fig-agree-1" class="cursor">I agree</label>
  </div>
</figure>



## Checkbox

|               |                            |
| ------------- | -------------------------- |
| **Identity**  | "I agree. Checkbox."       |
| **State**     | "Checked."                 |
| **Operation** | "Press Space to deselect." |

<figure>
  <div class="fig-checkbox">
    <input id="fig-agree-2" type="checkbox" class="sr-only" checked>
    <label for="fig-agree-2" class="cursor">I agree</label>
  </div>
</figure>
