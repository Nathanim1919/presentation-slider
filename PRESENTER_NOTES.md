# 🎤 UI/UX & PRODUCT DESIGN — SPOKEN PRESENTER SCRIPT
*Direct Speaking Notes for Nathanim Tadele*

---

# 🎤 INTRO SLIDE 01 — WHO'S BEHIND THE WORKSHOP?

Hey everyone! I’m Nathanim Tadele. 

I’m a full-stack software engineer, building digital products for 3+ years. 

Quick check in the Google Meet chat: drop a **1** if you write code, and drop a **2** if you do design or product!

Today isn't about boring theory. It's about how real products work. Let's get into it!

---

# 🎤 INTRO SLIDE 02 — MY JOURNEY

I started with code, moved to frontend, and then went full-stack.

Along the way, I realized something simple:

You can write the best backend in the world, but if users can’t figure out what to click, your product fails. 

The interface is the only part of your code people actually touch.

---

# 🎤 INTRO SLIDE 03 — THE UNEXPECTED PART

Here’s the fun part: I don’t really use Figma.

I design by building directly in code. 

My loop is simple: **Idea → Code → See it → Use it → Break it → Fix it.**

A mockup in Figma is just a picture. In the browser, you feel the real button, the loading delay, and the responsive layout right away.

---

# 🎤 INTRO SLIDE 04 — WHAT I LOVE BUILDING

I just love building things. 

Whenever I have free time, it usually turns into a new project or experiment.

Because the best way to learn how an interface feels isn't reading about it — it's building it.

---

# 🎤 INTRO SLIDE 05 — WHY AM I GIVING THIS WORKSHOP?

So why this workshop?

Because good software isn’t just about making something work.

It’s about making something **make sense**.

Let's dive into Workshop 01: UI/UX & Product Design!

---

# 🎤 SLIDE 01 — WHAT IS DESIGN?

Before we talk about tools, colors, or job titles, let’s start with a much harder question: 

What is design?

Most people think design is about aesthetics. If something looks modern and pretty, it’s good design; if it looks dated, it’s bad design. 

In everyday life, that definition might pass. But in software, that mindset creates massive blind spots. Today, we’re going to redefine what design actually means.

---

# 🎤 SLIDE 02 — WHEN YOU HEAR "UI/UX DESIGNER"…

When you hear the phrase "UI/UX designer," what do you picture?

Most people picture someone in Figma picking pastel color palettes, choosing rounded corner radii, and drawing gorgeous mobile screens. 

And look — visual craft is real, and it matters. But if that’s all you think design is, you're missing ninety percent of the iceberg. 

Let me prove this to you with an app almost everyone on this call has used: Uber.

---

# 🎤 SLIDE 03 — WHY DOES UBER FEEL EASY?

Think about using Uber. 

You open the app, tap one button, watch a little car glide across a map toward you, step into the car, and arrive at your destination without ever pulling out a wallet. 

Why does that feel effortless? 

Is it because the buttons are black and white? Is it because the font is clean? 

Or is it because an invisible system anticipated every single fear, question, and piece of friction you had before you even walked outside?

---

# 🎤 SLIDE 04 — A SCREEN IS NOT A PRODUCT

Remember this phrase whenever you build software:

A screen is not a product.

Design is the full experience. It starts the moment a human being feels a need — "I need to get to the airport" or "I need to pay rent" — and it doesn't end until that need is completely resolved. 

The screens are just temporary checkpoints along that journey. If the car never arrives, or you can't find your driver in the dark, it doesn't matter how pretty the app looked.

So let’s zoom in on that visible layer first. What exactly does a UI designer control?

---

# 🎤 SLIDE 05 — WHAT UI ACTUALLY CONTROLS

UI stands for User Interface. What does a UI designer actually control?

Watch what happens to this simple login form on the screen. 

Right now, it’s raw, default HTML. It functions — you can type into it, you can submit it. But it feels raw and uninviting.

When we turn on Typography, notice how establishing scale immediately tells your eyes where to look first. The heading anchors you, and the labels become legible.

When we turn on Spacing, notice how the inputs separate into distinct groups. Spacing isn’t empty space — it’s structural communication telling your brain which label belongs to which field.

When we turn on Contrast and Color, look at the submit button. It transforms from a passive rectangle into an unmistakable, primary call to action.

UI design is visual architecture. It guides human attention, signals hierarchy, and builds immediate trust.

---

# 🎤 SLIDE 06 — BEAUTIFUL ISN'T ENOUGH

Here is the trap:

Beautiful isn't enough.

Imagine you build the most gorgeous checkout form in human history. Perfect glassmorphism, bespoke gradients, elegant typography. 

The user fills it out, clicks "Place Order"... and nothing happens. 

No spinner. No disabled state. No checkmark. The button just sits there.

What does the user do? They click it again. And again. And again. Congratulations — your gorgeous form just charged their card four times. 

UI without intent and feedback is just decoration.

---

# 🎤 SLIDE 07 — UI COMMUNICATES

UI communicates constantly, even when there are no words on the screen.

Watch this button right here. 

Right now, in its resting state, its elevation and contrast tell you: "I am clickable, and I am the primary action on this page."

When I move my mouse over it, look at the hover state. The color brightens, the shadow lifts. The button is answering: "I see you. If you click me right now, something will happen."

When I press down, it sinks into the surface. That tactile depression confirms: "You clicked me. I heard you."

Every state of this button is a deliberate design decision answering questions in the user's nervous system.

---

# 🎤 SLIDE 08 — UX BEGINS WHERE THE BUTTON ENDS

And that brings us to the next layer:

UX begins where the button ends.

UI is the visible control you touch. But what happens after you click that button? 

Who is the user? Are they in a hurry? What happens if their internet drops? How long do they have to wait? What feedback do they get while waiting? 

UX stands for User Experience. It’s about understanding the human being on the other side of the glass and removing every obstacle between them and their goal.

Let’s see this in action on the Uber journey.

---

# 🎤 SLIDE 09 — THE UBER JOURNEY (THE HAPPY PATH)

Here is the entire customer journey for a single Uber ride: one ride, eight moments of truth.

1. Feel the need — "I need to get somewhere."
2. Open the app — "Where do I start?"
3. Enter destination — "Where am I going?"
4. See the price — "How much will this cost?"
5. Request a ride — "Did it work?"
6. Find the driver — "Who is coming for me?"
7. Watch them arrive — "Are they actually moving?"
8. Reach destination — "Am I in the right place?"

Every single step is a question the user is asking in their head. 

UX design is the art of answering those questions before the user even has to ask them. 

On paper, this flow looks clean, simple, and perfect. But real life isn't a clean diagram. Let’s look at what happens when the experience actually breaks.

---

# 🎤 SLIDE 10 — WHERE THE EXPERIENCE BREAKS (FRICTION MODE)

Now look at these orange steps: Step 3, Step 4, Step 6, and Step 7. 

The app hasn't crashed, the code is running, the buttons are rendering. But this is where the human experience falls apart.

Look at Step 3: "Enter destination." Autocomplete fails on a new address. The user is stuck frantically re-typing the street name. That’s input friction.

Look at Step 4: "See the price." Surge pricing is buried in small print. The user thinks it's a ten-dollar ride, but gets billed thirty-five dollars later. The UI didn't crash, but user trust was destroyed. That’s trust friction.

Look at Step 6: "Find the driver." The driver photo thumbnail is twenty pixels wide. You’re standing outside in the dark in the rain, squinting at your screen trying to match a tiny face to a passing car. Good UX must consider the physical world, not just the phone screen.

Look at Step 7: "Watch them arrive." The car on the map freezes. What happens in your head? Panic. "Did they cancel? Are they lost?" That anxiety is an unhandled UX state.

And this gives us the single cleanest definition of UX: 

UX designers find friction. Then they remove it. That’s the job.

---

# 🎤 SLIDE 11 — UX IS MORE THAN SCREENS (THE FULL TOOLKIT)

So what does a UX designer actually work on every day?

- **Personas:** Understanding who the user is, what environment they are in, and what they fear.
- **User Journeys:** Mapping the before, during, and after — the emotional highs and lows across time.
- **User Flows:** Mapping the decision trees to eliminate dead ends and unnecessary clicks.
- **Information Architecture:** Deciding how content is organized, named, and grouped so people can find what they need without thinking.
- **Usability Testing:** Watching real people use the product in silence so you can see which of your assumptions were completely wrong.
- **UX Writing:** Crafting the exact words, labels, and error messages that guide the user.

Let's look at UX writing specifically, because words are one of the most powerful interface elements in existence.

---

# 🎤 SLIDE 12 — THE LANGUAGE MATTERS (UX WRITING)

Look at these two error messages. Same technical failure: a payment API failed.

On the left: "Error 500. Something went wrong. Try again." 

How does that make you feel? Panic. Did my card get charged? Did the order go through? If I click try again, will I get billed twice? 

Now look on the right: 

"We couldn't complete your payment. Your card was not charged. Check your details below and try again — or use a different card."

Notice what happened there: In three short sentences, you eliminated their panic, answered their biggest fear ("Was my card charged?"), and gave them an immediate, clear path forward.

Words are design.

---

# 🎤 SLIDE 13 — WHO ARE WE DESIGNING FOR? (THE TRIAD)

Now let's zoom out further. 

A UI designer makes screens intuitive. A UX designer makes journeys smooth. 

But products don't exist in a vacuum. Products exist inside businesses. 

A Product Designer sits right at the intersection of The User, The Business, and The Technology.

A product that users love, but costs forty dollars per user to run with zero revenue, is not a product — it’s a charity that will shut down in six months. 

Product design is about solving real user problems in a way that sustains the business and drives long-term growth.

---

# 🎤 SLIDE 14 — UBER HAS MULTIPLE PRODUCTS

To see this in practice, look at Uber again. 

A generalist UI/UX designer might design a marketing page on Monday and a mobile app next month. 

A Product Designer at Uber is embedded in one specific product ecosystem:
- The Rider App
- The Driver App
- Uber Eats
- The Restaurant Merchant Dashboard
- Enterprise Fleet Management

A product designer on the Driver App works alongside engineers, data scientists, and operations managers for years. They are measured on driver retention, onboarding completion rates, and safety metrics. 

They own outcomes, not just deliverables.

---

# 🎤 SLIDE 15 — THE PRODUCT DESIGNER'S QUESTIONS

Look at the difference in the questions they ask.

A UI/UX designer asks:
- Is this easy to use?
- Can users find the button?
- How do we reduce friction?
- Is the information clear?

A Product Designer asks all of those, PLUS:
- Does this solve a real problem in the market?
- Does this drive adoption?
- How does this improve conversion?
- Will this increase retention so users come back next month?
- Is this scalable and cost-effective to build and maintain?

Product design doesn't replace UI/UX — it anchors UI/UX in market reality.

---

# 🎤 SLIDE 16 — THE RETENTION LOOP

And that’s why product design isn’t a one-off project. It’s a continuous retention loop:

Discover → Adopt → Use → Value → Return → Advocate → Expand → Optimise.

If your software has a great onboarding flow, but users never experience real value in Step 4, they never return in Step 5. 

Pouring money into acquiring new users when your retention loop is broken is like pouring water into a bucket full of holes. Product designers build products that keep users coming back.

---

# 🎤 SLIDE 17 — AIRBNB: REDUCING UNCERTAINTY

Let's look at how this works in the real world with Airbnb. 

In 2008, the idea of Airbnb sounded completely crazy: "Send money to a stranger on the internet and go sleep on an air mattress in their apartment." 

The barrier wasn't price — it was pure human uncertainty. Would the host be dangerous? Would the room look like the photos? 

Design solved that trust problem at all three levels:
- **UI Decision:** Edge-to-edge, high-resolution photography. You aren't booking a room; you are picturing yourself sitting on that sunny balcony.
- **UX Decision:** Verified reviews from real guests. Social proof eliminates fear.
- **Product Decision:** AirCover — a million-dollar damage protection guarantee for hosts and full refunds for guests. 

Airbnb turned the biggest business risk — distrust — into their primary growth engine. That’s product design.

---

# 🎤 SLIDE 18 — GOOGLE MAPS: COMMUNICATING SYSTEM STATE

Now look at Google Maps. It’s a masterclass in communicating system state.

GPS is messy: satellite signals bouncing between concrete buildings to a moving phone with spotty connectivity. How does Maps make that feel effortless?
- **UI Decision:** The pulsing blue dot. If it was a static pin, you’d wonder if the app froze. The pulse tells you: "I am actively listening to satellites right now."
- **UX Decision:** When you miss a turn, it doesn't say "Error." It calmly says "Recalculating..." It removes blame, handles the mistake with grace, and shows an instant path forward.
- **Product Decision:** Offline maps. Google recognized that when you need GPS the most — in tunnels, mountains, or traveling abroad — you often lose data. Offline caching keeps you inside the Google ecosystem.

Every state in Google Maps feels intentional.

---

# 🎤 SLIDE 19 — YOUTUBE: HELPING DECISIONS & PRODUCT TENSION

Now look at YouTube. YouTube has billions of videos. The challenge is reducing infinite choice to a split-second decision.
- **UI Decision:** Video thumbnails. In one tenth of a second, an expressive face and bold text communicate value.
- **UX Decision:** The red progress bar across the bottom of thumbnails. It instantly shows what you finished and what you left halfway through, pulling you back in to complete it.
- **Product Decision:** Autoplay with a five-second countdown. 

Now think about Autoplay: Is Autoplay purely "good UX"? Not always. Sometimes you wanted to go to sleep! But from a product perspective, it dramatically drove platform watch time. 

Product design lives right in that tension between user control and business metrics.

---

# 🎤 SLIDE 20 — ONE SCREEN, SEVEN REALITIES (BUTTON STATES)

Now let's bring this back to code. 

As developers, we often think we are building one button. But in the browser, that single component lives in seven different realities.

Look at the live interactive buttons on screen:
1. **Default:** Clean contrast and resting elevation.
2. **Hover:** Feedback before commitment — telling the cursor "I am ready."
3. **Focus:** The high-contrast ring for keyboard users and screen readers. Without this, accessibility fails.
4. **Pressed:** The tactile sink into the surface confirming input receipt.
5. **Loading:** A spinner appears and the button locks, preventing race conditions and double clicks.
6. **Success:** A green checkmark confirms the action before navigating away.
7. **Disabled:** Blocked. But rule number one: Never disable a button without explaining *why* it’s disabled!

Every single state is a conversation with the user's nervous system.

---

# 🎤 SLIDE 21 — THE LOADING STATE

Let's look at the three most neglected states in software, starting with Loading.

What happens between the click and the result?

On the left: No loading state. The user clicks "Submit". Nothing visual changes. They wonder: "Did it work? Did my Wi-Fi die?" They click again. Now you have duplicate database records.

On the right: With a designed loading state. The button text changes to "Processing...", a spinner animates, and the button disables itself. The user relaxes: "The system heard me." 

Good UI state design directly protects backend database integrity.

---

# 🎤 SLIDE 22 — THE EMPTY STATE

Now, what happens when there is no data at all? The Empty State.

You spent three months building a project management app. A new user signs up, clicks "Projects"... and sees a blank white screen. 

They think: "Is it broken?" They close the tab and never come back. 

Now look at an intentional Empty State on the right:
- An illustration or welcoming icon
- "You don't have any projects yet."
- A clear sentence explaining what a project is
- A big, friendly primary button: "Create your first project →"

An empty state is not a void. It is your product's very first conversation with a new user.

---

# 🎤 SLIDE 23 — THE ERROR STATE

And finally, the error state:

An error is a design moment. Handle it like one.

When something breaks, users immediately feel anxiety: "Did I mess up? Did I lose my work?"

A bad error says: "Error 500. Something went wrong." It feels cold, cryptic, and abandoning.

A great error says:
"We couldn't load your projects. Your data is safe — nothing was lost. This usually fixes itself in a moment. [Try Again]"

Look at those five words: "Your data is safe." That single sentence eliminates ninety percent of user panic.

---

# 🎤 SLIDE 24 — YOUR TURN: THE 90-SECOND CHALLENGE

Alright, now it’s your turn. Put on your Lead Product Designer hat.

Here’s your scenario:
A user opens a food delivery app at 7:00 PM on a Tuesday. They are hungry, tired from work, and in a hurry. How do you design for them?

You have ninety seconds. Think through these prompts, and start typing your ideas directly into the chat:
- Who is this user emotionally?
- What is their single goal?
- Where will friction kill their order?
- What UI, UX, and product decisions will make this experience effortless?

Go!

---

# 🎤 SLIDE 25 — WHAT DID YOU COME UP WITH?

Time's up! What did you decide to prioritize? Drop your answers in the chat, or feel free to unmute and share!

*(Read out 2-3 quick answers from the chat or an unmuted mic: e.g., "Put past orders at the top", "Show delivery times upfront")*

Exactly! Look at what a great designer does first:
1. Identify the dominant emotion: hunger plus urgency.
2. Prioritize the fastest path: a prominent "Reorder your usual burrito in 2 taps" button right at the top.
3. Show estimated delivery times immediately on the restaurant cards so nobody falls in love with a place with a 75-minute wait.
4. Auto-apply coupons and save payment info to eliminate checkout friction.
5. And follow up with the retention loop: "Order again next Tuesday?"

Great designers don't just have opinions — they have clear, empathetic reasons for every single decision.

---

# 🎤 SLIDE 26 — THE PROCESS BEHIND EVERY DECISION

People look at great apps and think: "I could never design that. I'm not an artistic genius."

Good design isn’t artistic lightning — it is a repeatable, six-step engineering process:
1. **UNDERSTAND:** Research real users and map their pain points.
2. **DEFINE:** Write down the real problem statement and what success looks like.
3. **IDEATE:** Sketch ten rough ideas before picking the best one. Diverge before you converge.
4. **PROTOTYPE:** Build interactive mockups or live code prototypes to test feel.
5. **TEST:** Watch real humans use it in silence to see where they get stuck.
6. **SHIP & LEARN:** Launch, look at telemetry data, iterate. Because software is never done.

---

# ═══════════════════════════════════════════════════════════════
# 🧩 LIVE PRODUCT BUILD — EVENT RESCUE
# ═══════════════════════════════════════════════════════════════
#
# TOTAL TIME: ~10–12 minutes
#
# This section sits between the design challenge/process slides
# and the final "Three Levels / Become Great / Design Internet" slides.
#
# The workshop flow is:
#   ...Design Challenge → Design Process →
#   ⟹ LIVE PRODUCT BUILD (this section) →
#   ⟹ REFLECTION →
#   Three Levels → Become Great → Design Internet → Closing
#
# You need THREE screens:
#   Screen 1: The presentation slides
#   Screen 2: This document (presenter notes)
#   Screen 3: Excalidraw (blank canvas, ready to draw)
#
# ═══════════════════════════════════════════════════════════════

---

# ✅ EXCALIDRAW BUILD CHECKLIST

*Scan this while presenting. Check off each step as you complete it.*

```
[ ] 01  Problem           — Concert + 5 friends + time pressure
[ ] 02  User              — Alex + goal + context + frustrations
[ ] 03  Success           — "Everyone knows what to do"
[ ] 04  Journey           — Plan → Invite → Coordinate → Travel → Meet → Enter
[ ] 05  Pain points       — Friend late → "What now?"
[ ] 06  How Might We      — Core problem statement
[ ] 07  Solution ideas    — ETA / map / alerts / status / chat
[ ] 08  Core experience   — Join → Share → See → Detect → Respond → Arrive
[ ] 09  User flow         — Home → Create/Join → Status → Alert → Resolve
[ ] 10  Wireframes        — Home / Event / Group Status / Problem (4 screens)
[ ] 11  Interaction       — Before/After status change
[ ] 12  States            — Default / Warning / Critical / Action / Resolved
[ ] 13  Edge cases        — Offline / location denied / time change
[ ] 14  Product thinking  — User × Business × Technology triangle
[ ] 15  Success metrics   — Arrival rate / join time / problems resolved
[ ] 16  Test              — Audience role-play task
[ ] 17  Iterate           — Version 1 → Test → Problem → Version 2
```

---

# 📋 EXCALIDRAW — WHAT I SHOULD DRAW (Quick Reference)

| Step | What to draw |
|------|-------------|
| 01 Problem | "Concert tonight" + 5 stick figures + "40 min" + late friend circled |
| 02 User | Box: "Alex" + Goal + Context bullets + Frustration quotes |
| 03 Success | Box: "SUCCESS: Everyone knows what to do, where to go, and whether the plan changed" |
| 04 Journey | Vertical flow: PLAN → INVITE → COORDINATE → GET READY → TRAVEL → MEET → ENTER |
| 05 Pain | Branch off TRAVEL: 🚨 FRIEND IS LATE → WHAT NOW? + pain point annotations |
| 06 HMW | Box: "How might we help a group know if everyone is on track?" |
| 07 Ideas | Scatter around HMW: group map, shared ETA, alerts, status, chat, route |
| 08 Core | Flow: JOIN → SHARE STATUS → SEE GROUP → DETECT PROBLEM → RESPOND → ARRIVE |
| 09 Flow | Decision tree: HOME → CREATE/JOIN → STATUS → [ON TRACK? YES/NO] → branches |
| 10 Wireframes | 4 rough phone rectangles: Home, Event, Group Status, Problem |
| 11 Interaction | Two side-by-side lists: BEFORE (all ✓) and AFTER (one ⚠) |
| 12 States | 5 labeled boxes: Default → Warning → Critical → Action → Resolved |
| 13 Edge cases | "What if…?" questions with X marks |
| 14 Product | Triangle: USER — BUSINESS — TECHNOLOGY with "PRODUCT" in center |
| 15 Metrics | 2–3 bullet metrics below the triangle |
| 16 Test | "Task: You're going to a concert. Sam is late. What do you do?" |
| 17 Iterate | VERSION 1 → TEST → PROBLEM FOUND → VERSION 2 (with crossed-out element) |

---

# ⏱ TIMING GUIDE

| Step | Topic | Time |
|------|-------|------|
| 01 | The Problem | 1:00 |
| 02 | Define the User | 0:45 |
| 03 | Define Success | 0:30 |
| 04 | Map the Journey | 1:00 |
| 05 | Pain Points | 1:00 |
| 06 | How Might We | 0:45 |
| 07 | Solution Ideas | 1:00 |
| 08 | Core Experience | 0:45 |
| 09 | User Flow | 1:00 |
| 10 | Wireframes | 2:00 |
| 11 | Interaction Design | 0:45 |
| 12 | States | 1:00 |
| 13 | Edge Cases | 0:45 |
| 14 | Product Thinking | 1:00 |
| 15 | Success Metrics | 0:30 |
| 16 | Test | 0:45 |
| 17 | Iterate | 0:30 |
| **TOTAL** | | **~13 min** |

---

# 🎤 SLIDE 27 — TRANSITION INTO LIVE BUILD

Alright. We've covered UI, UX, product design, real-world case studies, interaction states, and you've even done your own design challenge.

Now I want to do something different.

We're going to **build a product together. Right now. Live.**

Not in Figma. Not in code. We're going to use Excalidraw — a simple whiteboard — because the tool doesn't matter.

What matters is the *thinking.*

We're going to go from a messy, real-world problem all the way to a testable product concept. And we're going to do it in about ten minutes.

*(Switch to Excalidraw on Screen 3. Show a blank canvas.)*

Here's the rule: **We are not designing screens first. We are designing an experience around a real problem.**

Let's go.

---

---

# 🧩 PRODUCT BUILD — STEP 01: THE PROBLEM

**⏱ Time: 1 minute**

## What the audience sees

The presentation slide shows the scenario setup. Then I switch to Excalidraw and start drawing.

## What I should say

"Here's the situation. You and four friends are going to a concert tonight. You're excited. Tickets are bought. The concert starts in 40 minutes.

But here's the thing: One friend is across town. Another hasn't even left their house yet. Someone else texted the group chat 'where are we meeting?' ten minutes ago and nobody answered.

Quick question for everyone — **what would you normally do in this situation?**"

*(Pause. Let 2-3 people answer in the chat or unmute.)*

"Right — you'd blow up the group chat. You'd call everyone. You'd panic a little. And somehow, maybe, you'd get there.

Now here's the key insight: **We're not starting with an app. We're starting with the problem.**"

## What I do in Excalidraw

1. Write large text: **"CONCERT TONIGHT"**
2. Draw 5 rough stick figures in a cluster
3. Write **"40 minutes"** with a rough clock/circle
4. Draw one stick figure separated from the group, label it **"across town"**
5. Draw another with **"hasn't left yet"**
6. Circle the gap between the separated friends and the group — label it **"THE PROBLEM"**

## Audience question

"What would you normally do in this situation?"

## Expected answers

- "Text the group chat"
- "Call everyone"
- "Share my location"
- "Just go and hope everyone shows up"
- "Assign one person to coordinate"

## What I am teaching

Product design begins with understanding a real human problem — not with opening a design tool and drawing rectangles.

## Key sentence

> "We don't start with a screen. We start with a situation."

## Transition

"Good. We have a problem. But who exactly are we solving it for?"

## Connection to earlier concepts

**Earlier (Slide 03):** "Why does Uber feel easy?" → We showed that design starts with a need, not a screen.
**Now:** We're doing exactly that — starting with the need before any interface.

---

---

# 🧩 PRODUCT BUILD — STEP 02: DEFINE THE USER

**⏱ Time: 45 seconds**

## What the audience sees

A simple user profile area appearing on the Excalidraw canvas, to the right of the problem area.

## What I should say

"We need to know who we're designing for. Not 'everyone.' One specific person in one specific situation.

Meet Alex. Alex is going to the concert tonight with four friends. Let me write down what we know about Alex's world right now."

## What I do in Excalidraw

1. Draw a box labeled **"USER"**
2. Write: **"Alex — going to the concert with 4 friends"**
3. Below, write **"GOAL"**: "Get to the event together without chaos"
4. Below, write **"CONTEXT"** with bullets:
   - Running late
   - Multiple people
   - Different locations
   - Limited time
   - Uncertain transportation
5. Below, write **"FRUSTRATIONS"** with quotes:
   - "Where is everyone?"
   - "When should I leave?"
   - "Where are we meeting?"
   - "Are we still going together?"

## Audience question

*(No direct question — this is a demonstration moment.)*

## What I am teaching

You don't design for "users." You design for a specific person, in a specific moment, with a specific goal and specific frustrations. This connects directly to the Personas concept from earlier.

## Key sentence

> "We're not designing for everyone. We're designing around a specific situation."

## Transition

"We know who Alex is and what Alex is dealing with. But before we build anything, we need to answer one question: what does success actually look like?"

## Connection to earlier concepts

**Earlier (Slide 11):** UX Personas — understanding who the user is, their goals, fears, and context.
**Now:** We're building a persona live, but keeping it practical and situation-specific instead of a formal template.

---

---

# 🧩 PRODUCT BUILD — STEP 03: DEFINE SUCCESS

**⏱ Time: 30 seconds**

## What the audience sees

A clear success statement appears on the canvas.

## What I should say

"Before we design any features, let me ask you something that most people skip:

**What does success look like?**

Not 'what features should the app have.' Not 'what screens do we need.' But — if this product works perfectly, what actually happens?"

*(Brief pause.)*

"Success for Alex looks like this: **Everyone knows what to do, where to go, and whether the plan has changed.**

A product needs an outcome. We don't build features simply because they sound useful. Every feature should serve this outcome."

## What I do in Excalidraw

1. Draw a box labeled **"SUCCESS"**
2. Write inside: **"Everyone knows what to do, where to go, and whether the plan has changed."**
3. Draw a subtle arrow from the USER box to the SUCCESS box

## What I am teaching

Products need a measurable, describable outcome before you think about features. This prevents feature creep and keeps the team aligned.

## Key sentence

> "A product needs an outcome. We don't build features because they sound useful."

## Transition

"Now that we know who Alex is and what success looks like — let's map out what actually happens in Alex's journey."

---

---

# 🧩 PRODUCT BUILD — STEP 04: MAP THE USER JOURNEY

**⏱ Time: 1 minute**

## What the audience sees

A vertical flow diagram appears on the canvas, showing the journey from planning to entering the event.

## What I should say

"Let's map what Alex actually goes through. Not what screens they see — but what *happens in their real life* as they try to get to this concert.

The journey looks like this:"

*(Draw the flow step by step, talking as you draw.)*

"Plan the outing. Invite friends. Coordinate — who's coming, when, where to meet. Get ready. Travel. Meet up. Enter the event.

On paper, this looks clean and simple. But we all know real life isn't a clean diagram."

*(Add the complication.)*

"Right here — during travel — something goes wrong. A friend is late. And now the whole plan is uncertain. What do we do? Do we wait? Do we go in? Do we message them?"

## What I do in Excalidraw

1. Create a vertical flow in a new area of the canvas:
   ```
   PLAN
    ↓
   INVITE FRIENDS
    ↓
   COORDINATE
    ↓
   GET READY
    ↓
   TRAVEL
    ↓
   MEET
    ↓
   ENTER EVENT
   ```
2. Then add a branch off TRAVEL:
   ```
   TRAVEL
      ↓
   🚨 FRIEND IS LATE
      ↓
   WHAT NOW?
   ```
3. Circle the complication in red/orange

## Audience question

"Where should our product help? Which of these moments is the most painful?"

## Expected answers

- "During travel — when things are going wrong"
- "The coordination part — knowing who's where"
- "The meeting point — when it's unclear"
- "When someone is late — that's when panic starts"

## What I am teaching

UX is about the whole journey, not a collection of screens. The product should solve real friction points in the journey, not just digitize existing steps.

## Key sentence

> "A screen tells us what exists at one moment. A journey tells us what the user actually goes through."

## Transition

"You've just identified the pain points. Let me mark them."

## Connection to earlier concepts

**Earlier (Slide 09):** The Uber Journey — "One ride. Eight moments of truth."
**Now:** We're building our own journey map, and about to find our own friction points — just like we did with Uber.

---

---

# 🧩 PRODUCT BUILD — STEP 05: IDENTIFY PAIN POINTS

**⏱ Time: 1 minute**

## What the audience sees

Pain point annotations appear around the journey, with the core problem being highlighted.

## What I should say

"Let me annotate the real pain points that Alex experiences during this journey:

- Don't know where friends are
- Don't know when to leave
- Meeting point is unclear
- Someone is delayed and nobody knows
- Transportation plans change
- Communication is scattered across texts, calls, and group chats

Sound familiar? This is basically every time you've tried to coordinate going somewhere with friends.

Now here's the critical move: **We should not try to solve everything.** That's how bad products get made — they try to do everything and end up doing nothing well.

Let's narrow it down to one core problem."

*(Write the core problem.)*

"The group doesn't know whether everyone is on track to arrive together."

## What I do in Excalidraw

1. Add annotations/sticky notes around the journey at pain points:
   - "Don't know where friends are"
   - "When to leave?"
   - "Meeting point unclear"
   - "Someone delayed"
   - "Transport changes"
   - "Scattered communication"
2. Draw a large box labeled **"CORE PROBLEM"**
3. Write inside: **"The group doesn't know whether everyone is on track to arrive together."**

## What I am teaching

Product design requires narrowing. You can't solve every problem. The "How Might We" framework helps you focus on one solvable, meaningful problem.

## Key sentence

> "Narrowing the problem is what makes product design manageable."

## Transition

"Now let's turn this problem into a question we can actually design around."

## Connection to earlier concepts

**Earlier (Slide 10):** Where the Uber experience breaks — we identified friction points at steps 3, 4, 6, 7.
**Now:** We're doing the same thing for our own product — finding where friction lives in the journey.

---

---

# 🧩 PRODUCT BUILD — STEP 06: HOW MIGHT WE

**⏱ Time: 45 seconds**

## What the audience sees

A "How Might We" statement appears prominently on the canvas.

## What I should say

"In product design, there's a technique called 'How Might We.' It turns a problem into an open-ended question that invites solutions without jumping to one too early.

Our 'How Might We' is:

**How might we help a group know whether everyone is on track — and what to do when someone falls behind?**

Notice the structure. It's not 'build an app that shows a map.' It's not 'add a group chat feature.' It's open enough to explore, but focused enough to be useful."

## What I do in Excalidraw

1. Draw a prominent box labeled **"HOW MIGHT WE..."**
2. Write: **"How might we help a group know whether everyone is on track — and what to do when someone falls behind?"**
3. Draw an arrow from CORE PROBLEM to this box

## What I am teaching

The "How Might We" framework is a real design tool used at companies like Google, IDEO, and Spotify. It reframes problems as opportunities.

## Key sentence

> "A good 'How Might We' is open enough to explore, but focused enough to be useful."

## Transition

"Alright, now — what could we actually build? Let's brainstorm."

---

---

# 🧩 PRODUCT BUILD — STEP 07: EXPLORE SOLUTIONS

**⏱ Time: 1 minute**

## What the audience sees

Multiple solution ideas scattered around the HMW statement on the canvas.

## What I should say

"What could we build to answer this question? Don't filter yourself yet. What ideas come to mind?

Drop them in the chat!"

*(Wait for 15-20 seconds. Read a few responses.)*

"Great. Let me add some of mine too."

*(Draw ideas around the HMW box.)*

"Group map. Shared ETA. Meeting point pin. Automatic alerts when someone falls behind. An 'I'm leaving now' status button. Late warning notifications. Group chat. Route suggestions.

Now here's where most people go wrong: **they pick the first idea that sounds good and start building it.**

We don't do that. We ask: which of these ideas gives us the most user value, with the most simplicity, and is actually feasible to build?"

## What I do in Excalidraw

1. Scatter idea bubbles around the HMW box:
   - "Group map"
   - "Shared ETA"
   - "Meeting point"
   - "Auto alerts"
   - "'I'm leaving' status"
   - "Late warning"
   - "Group chat"
   - "Route suggestions"
2. Draw loose connecting lines to the HMW box
3. Put a small star or checkmark next to 2–3 strongest ideas (Shared ETA, Auto alerts, Status)

## Audience question

"What could we build to answer this?"

## Expected answers

- "A group map showing everyone's location"
- "Automatic ETA updates"
- "Push notifications when someone is running late"
- "A status board"
- "A shared meeting point"

## What I am teaching

Ideation should be divergent before convergent. Generate many ideas, then evaluate them — don't jump to the first thing that sounds reasonable.

## Key sentence

> "We don't immediately choose the first idea. We generate options, then evaluate."

## Transition

"Let's combine the strongest ideas into one focused experience."

## Connection to earlier concepts

**Earlier (Slide 26):** "IDEATE — Sketch ten rough ideas before picking the best one. Diverge before you converge."
**Now:** We're doing exactly that — diverging with many ideas before converging on the strongest ones.

---

---

# 🧩 PRODUCT BUILD — STEP 08: CORE PRODUCT EXPERIENCE

**⏱ Time: 45 seconds**

## What the audience sees

A focused product experience flow appears on the canvas — the core loop of the product.

## What I should say

"From all those ideas, here's the focused experience we're going to build. I'm calling it **Group Arrival.**

The product lets everyone:
1. Join the event
2. Share their current status or ETA
3. See whether the group is on track
4. Get alerted when someone is falling behind
5. Decide what to do together

That's the product. Not a list of features — a connected experience."

## What I do in Excalidraw

1. Create a clean vertical flow labeled **"CORE EXPERIENCE: GROUP ARRIVAL"**:
   ```
   JOIN
    ↓
   SHARE STATUS
    ↓
   SEE GROUP
    ↓
   DETECT PROBLEM
    ↓
   RESPOND
    ↓
   ARRIVE
   ```
2. Draw a box around the entire flow

## What I am teaching

A product experience is different from a feature list. Features are disconnected capabilities. An experience is a connected sequence that guides the user toward an outcome.

## Key sentence

> "We now have a product experience — not a list of features."

## Transition

"Now let's turn this experience into an actual user flow — with decisions and branches."

---

---

# 🧩 PRODUCT BUILD — STEP 09: USER FLOW

**⏱ Time: 1 minute**

## What the audience sees

A decision-tree style user flow with branches appears on the canvas.

## What I should say

"This is one of the most important moments in product design. We're turning that experience into a flow — with real decisions.

The user opens the app. They see their event. They create one or join one. They see the group status. And here's the critical decision point:

**Is everyone on track?**

If yes — great, just wait and enjoy the anticipation. If no — an alert appears. They can view the problem, send a message, suggest an alternative, and the group resolves the situation.

This is where products become real. A screen tells you what exists at one moment. **A flow tells you what the user can actually do.**"

## What I do in Excalidraw

1. Draw the full decision-tree flow:
   ```
   HOME
    ↓
   CREATE / JOIN EVENT
    ↓
   EVENT DETAILS
    ↓
   GROUP STATUS
    ↓
   [EVERYONE ON TRACK?]
         /       \
       YES        NO
        ↓          ↓
      WAIT       ALERT
                   ↓
              VIEW PROBLEM
                   ↓
             HELP / MESSAGE
                   ↓
                RESOLVE
   ```
2. Use diamond shape for the decision point
3. Draw the YES path shorter, the NO path longer

## What I am teaching

The difference between screens and flows. Screens are static. Flows capture decisions, branches, and the real logic of how a product works.

## Key sentence

> "A screen tells us what exists at one moment. A flow tells us what the user can actually do."

## Transition

"Now — and only now — are we ready to draw screens."

## Connection to earlier concepts

**Earlier (Slide 11):** User Flows — "How do users move through the system? Flows expose dead ends, unnecessary steps, and hidden complexity."
**Now:** We just built a real user flow, and the audience can see how it exposes the decision logic behind every screen.

---

---

# 🧩 PRODUCT BUILD — STEP 10: WIREFRAMES

**⏱ Time: 2 minutes**

## What the audience sees

Four rough, low-fidelity phone wireframes appear on the canvas. No colors, no branding.

## What I should say

"NOW we draw screens. Not before. You'll notice something: after doing all that thinking, the screens practically design themselves. We already know what needs to be on each one.

I'm going to keep these deliberately ugly. No colors. No logos. No gradients. Just structure.

**Screen 1 — Home.** The user opens the app. They see their upcoming event, the time, and the group status at a glance. That's it. One screen, three pieces of information.

**Screen 2 — Event.** They tap in. Event name, time, location, and their friends list. Who's confirmed? Who hasn't responded?

**Screen 3 — Group Status.** This is the core screen. A list of friends, each with their ETA and status. A simple map or location indication. At a glance: is everyone on track?

**Screen 4 — Problem.** 'Sam is 25 minutes behind.' What can you do? Message Sam, update the meeting plan, or wait. Clear actions."

## What I do in Excalidraw

1. Draw 4 rough phone rectangles side by side
2. **Screen 1 — HOME:**
   - "🎵 Concert Tonight"
   - "8:00 PM"
   - "4/5 on track"
3. **Screen 2 — EVENT:**
   - "Summer Concert"
   - "8:00 PM · Central Park"
   - Friend list: Alex ✓, Sara ✓, Daniel ✓, Sam ✓, Maya ?
4. **Screen 3 — GROUP STATUS:**
   - Alex — 10 min ✓
   - Sara — 12 min ✓
   - Daniel — 15 min ✓
   - Sam — 13 min ✓
   - (rough map circle)
5. **Screen 4 — PROBLEM:**
   - "⚠ Sam is 25 min behind"
   - [Message Sam]
   - [Update plan]
   - [Wait for Sam]

Label each screen with its name.

## What I am teaching

Wireframes come AFTER the thinking, not before. When you've done the problem, user, journey, and flow work, the screens almost design themselves. Also: low fidelity is intentional — it keeps the focus on structure, not aesthetics.

## Key sentence

> "After doing all that thinking, the screens practically design themselves."

## Transition

"We have screens. But they're static. What happens when the situation changes?"

## Connection to earlier concepts

**Earlier (Slide 05):** "What does a UI designer actually control?" — layout, typography, hierarchy.
**Now:** We're building the raw structure first. The visual polish comes later. Design doesn't begin polished.

---

---

# 🧩 PRODUCT BUILD — STEP 11: INTERACTION DESIGN

**⏱ Time: 45 seconds**

## What the audience sees

A before/after comparison on the canvas showing a status change — from "everyone on track" to "someone is late."

## What I should say

"Let's pick one critical moment. Everyone is on track. The group status screen looks calm and green.

Then Sam's ETA jumps from 13 minutes to 35 minutes. Something happened — traffic, late start, whatever.

What should the product do?"

*(Pause. Don't answer immediately. Let the audience think.)*

"Don't answer yet. Look at the before and after."

## What I do in Excalidraw

1. Draw two side-by-side boxes labeled **"BEFORE"** and **"AFTER"**
2. **BEFORE:**
   ```
   ✓ Alex       10 min
   ✓ Sara       12 min
   ✓ Daniel     15 min
   ✓ Sam        13 min
   ```
3. **AFTER:**
   ```
   ✓ Alex       10 min
   ✓ Sara       12 min
   ✓ Daniel     15 min
   ⚠ Sam        35 min
   ```
4. Circle Sam's row in the AFTER column
5. Draw an arrow between them labeled "**WHAT SHOULD HAPPEN?**"

## Audience question

"What should the product do when Sam goes from 13 minutes to 35 minutes?"

## Expected answers

- "Send a notification to the group"
- "Highlight Sam's status in yellow or red"
- "Ask Sam what happened"
- "Suggest the group go in and save Sam's spot"
- "Show options for what to do next"

## What I am teaching

Interaction design isn't about animations and hover effects. It's about designing what happens when the state of the world changes. The product must respond to reality.

## Key sentence

> "We're not designing one perfect screen. We're designing what happens as reality changes."

## Transition

"That's interaction design. Now let's connect this to something we already covered — states."

## Connection to earlier concepts

**Earlier (Slide 07):** "UI communicates — even without words." The button hover/press states.
**Now:** We're applying the same principle at the product level — the product's state communicates the situation.

---

---

# 🧩 PRODUCT BUILD — STEP 12: DESIGN STATES

**⏱ Time: 1 minute**

## What the audience sees

Five states appear on the canvas, connecting directly to the earlier button/loading/error state concepts.

## What I should say

"Remember earlier when we looked at the seven states of a button? Default, hover, focus, pressed, loading, success, disabled?

The same principle applies at the product level. Our product isn't one screen. It's multiple states.

**Default:** Everyone is on track. Green. Calm.

**Warning:** One person is falling behind. Yellow. The product surfaces the change.

**Critical:** The group might miss the event entirely. Red. The product escalates.

**Action:** The product offers options — message, update plan, wait, go ahead.

**Resolved:** The group has updated the plan. Everyone knows. Back to calm.

**We don't design one perfect screen. We design what happens as reality changes.** That's exactly what we learned about button states — applied to the entire product."

## What I do in Excalidraw

1. Draw 5 boxes in a horizontal row, labeled:
   - **DEFAULT** — "Everyone on track" (draw in green/calm)
   - **WARNING** — "One person falling behind" (draw in yellow/orange)
   - **CRITICAL** — "Group will miss event" (draw in red)
   - **ACTION** — "Product offers options" (draw with action buttons)
   - **RESOLVED** — "Plan updated" (draw in green again)
2. Connect them with arrows showing the flow between states
3. Write above: **"THE PRODUCT IS NOT ONE SCREEN. IT IS MANY STATES."**

## What I am teaching

State design applies at every level — from a single button to an entire product. This directly connects the micro-level (button states from Act VI) to the macro-level (product states).

## Key sentence

> "We don't design one perfect screen. We design what happens as reality changes."

## Transition

"We have a product that works in ideal conditions. Now let's deliberately break it."

## Connection to earlier concepts

**Earlier (Slides 20-23):** Button states, loading state, empty state, error state — "Every state is a conversation with the user's nervous system."
**Now:** We're applying the same principle at the product scale. The product itself has states — and each state must be designed.

---

---

# 🧩 PRODUCT BUILD — STEP 13: EDGE CASES

**⏱ Time: 45 seconds**

## What the audience sees

"What if?" questions appear on the canvas with some crossed out or marked.

## What I should say

"Now let's deliberately break our product. Because real products live in messy reality.

What if someone has no internet?

What if someone doesn't share their location?

What if the event time changes?

What if someone leaves the group?

What if two people are late?

What if the user denies location permission?

We can't solve all of these right now. But the fact that we're asking them? **That's the difference between a prototype and a product.**

Let's pick one: What happens when someone doesn't share their location? Instead of showing an ETA, we show 'Status unknown — last updated 15 minutes ago.' The product still works. It degrades gracefully instead of breaking."

## What I do in Excalidraw

1. Write **"EDGE CASES"** as a header
2. List the "What if?" questions:
   - "No internet?"
   - "No location sharing?"
   - "Event time changes?"
   - "Someone leaves group?"
   - "Two people late?"
   - "Location permission denied?"
3. Circle one or two
4. Write a quick resolution for one: "No location → 'Status unknown — last seen 15 min ago'"
5. Cross out the others with a note: "Future iteration"

## What I am teaching

Edge cases are where products succeed or fail. Thinking about edge cases separates a prototype from a real product. You don't have to solve them all — but you must acknowledge them.

## Key sentence

> "Real products live in messy reality."

## Transition

"Now let's zoom way out from the canvas. We've been thinking about the user. But products don't exist in a vacuum."

## Connection to earlier concepts

**Earlier (Slide 29):** "As developers, you already think in edge cases — null values, empty arrays, timeout retries."
**Now:** We're proving that product edge cases are the same discipline — just at a different scale.

---

---

# 🧩 PRODUCT BUILD — STEP 14: PRODUCT THINKING

**⏱ Time: 1 minute**

## What the audience sees

The User × Business × Technology triangle appears on the canvas.

## What I should say

"Let's zoom out. We've been focused on the user — Alex and friends trying to get to a concert. But products need more than user value.

**User:** Does this actually help the group? Does it reduce their stress? Does it solve a real problem?

**Business:** Why would someone use this? Would they pay for it? Would they come back next time they have an event? How does this product sustain itself?

**Technology:** Can we actually build this? Real-time location sharing, ETA calculation, push notifications — these are engineering decisions.

This is where product design becomes bigger than UI. A beautiful app that nobody pays for and that's too expensive to run isn't a product. It's a charity that shuts down in six months."

## What I do in Excalidraw

1. Draw a triangle:
   ```
              USER
             /    \
            /      \
           / PRODUCT \
          /          \
   TECHNOLOGY ───── BUSINESS
   ```
2. Inside the triangle, write **"PRODUCT"**
3. Label each corner:
   - USER: "Does it help?"
   - BUSINESS: "Is it sustainable?"
   - TECHNOLOGY: "Can we build it?"

## What I am teaching

Product design is the intersection of user needs, business viability, and technical feasibility. This is the triad introduced earlier in the workshop, now applied to a real product.

## Key sentence

> "This is where product design becomes bigger than UI."

## Transition

"And if we ship this product — how would we even know if it's working?"

## Connection to earlier concepts

**Earlier (Slide 13):** "A Product Designer sits right at the intersection of The User, The Business, and The Technology."
**Now:** We're applying that exact triad to the product we just built together.

---

---

# 🧩 PRODUCT BUILD — STEP 15: SUCCESS METRICS

**⏱ Time: 30 seconds**

## What the audience sees

A few success metrics appear below the product triangle.

## What I should say

"How would we know this product is actually helping?

Not 'how many downloads did we get' — but how many groups actually arrived at their event together? How quickly did everyone join after the event was created? How many coordination problems were resolved through the product instead of through panicked phone calls?

A product isn't successful because we built it. **It's successful because it creates an outcome.**"

## What I do in Excalidraw

1. Below the triangle, write **"HOW DO WE KNOW IT WORKS?"**
2. Add 2-3 metrics:
   - "% of groups arriving together"
   - "Time from creation → everyone joined"
   - "# coordination problems resolved"
3. Underline one as the "north star" metric

## What I am teaching

Success metrics tie back to the success statement from Step 03. Products are measured by outcomes, not output.

## Key sentence

> "A product isn't successful because we built it. It's successful because it creates an outcome."

## Transition

"We have an idea. We have a flow. We have screens. But we still don't know if it actually works. So let's test it."

---

---

# 🧩 PRODUCT BUILD — STEP 16: TEST

**⏱ Time: 45 seconds**

## What the audience sees

A test scenario written on the canvas.

## What I should say

"We have an idea. A flow. Screens. States. But we still don't know whether it actually works.

So let's test it right now. I need a volunteer — someone to act as the user.

*(Pick someone from the chat or an unmuted person.)*

Here's your task: **You're going to a concert with four friends. Sam is late. Show me — looking at these wireframes — what would you do?**

*(Let them talk through it. Don't help immediately. Just listen.)*

Where did you hesitate? What did you expect to happen? What information was missing?

**That's why we test.** Every hesitation, every confused look, every 'wait, where do I go?' — that's a design insight you can't get from staring at your own wireframe."

## What I do in Excalidraw

1. Write **"TEST"** as a header
2. Write the task: **"You're going to a concert. Sam is late. What do you do?"**
3. After the volunteer responds, annotate any confusion or hesitation points on the wireframes
4. Circle any area where the volunteer was confused

## Audience question

"You're going to a concert with four friends. Sam is late. What would you do in this app?"

## Expected answers / behaviors

- Volunteer looks for Sam's status first
- Might not know where to find the "problem" screen
- Might expect a notification rather than having to check manually
- Might want to message Sam directly from the status screen

## What I am teaching

Usability testing reveals assumptions you didn't know you had. The product isn't finished until real humans have tried to use it.

## Key sentence

> "That's why we test. Every hesitation is a design insight."

## Transition

"Did you see the hesitation? That tells us something. Let's go back and fix it."

## Connection to earlier concepts

**Earlier (Slide 26):** "TEST — Usability testing, A/B experiments, real user data."
**Now:** We just did a mini usability test live, and the audience experienced firsthand why testing matters.

---

---

# 🧩 PRODUCT BUILD — STEP 17: ITERATE

**⏱ Time: 30 seconds**

## What the audience sees

A Version 1 → Test → Problem → Version 2 flow, with something crossed out and changed.

## What I should say

"Did you see the hesitation? The volunteer expected to get a notification — but our design requires them to check manually. That's a design problem.

So let's fix it."

*(Go back to the wireframe. Cross something out. Change it.)*

"Version 1: you have to check. Version 2: the product tells you proactively.

**Design isn't getting it right the first time.** It's build, learn, change. That loop — that's the entire job."

## What I do in Excalidraw

1. Write the flow:
   ```
   VERSION 1
        ↓
   TEST
        ↓
   PROBLEM FOUND
        ↓
   VERSION 2
   ```
2. Go back to one of the wireframes and visibly cross out an element
3. Write the improvement next to it
4. Label it "V2"

## What I am teaching

Iteration is the core of design. Nobody gets it right the first time. The willingness to change based on evidence separates good products from mediocre ones.

## Key sentence

> "Design isn't getting it right the first time. It's build → learn → change."

## Transition

"Step back from Excalidraw with me for a moment. Look at what we just did."

## Connection to earlier concepts

**Earlier (Slide 26):** "SHIP & LEARN — Launch, measure, iterate — the product is never done."
**Now:** We just experienced the iteration loop live. The product isn't done when you ship it — it's done when it works.

---

---

# 🎤 SLIDE 28 — REFLECTION: LOOK WHAT WE JUST DID

*(Switch back to the presentation slides from Excalidraw.)*

Stop for a second and look at what we just did in ten minutes:

```
PROBLEM
 ↓
USER
 ↓
GOAL
 ↓
JOURNEY
 ↓
FLOW
 ↓
WIREFRAMES
 ↓
INTERACTION
 ↓
STATES
 ↓
EDGE CASES
 ↓
TEST
 ↓
ITERATE
```

We started with a messy real-world problem — five friends trying to get to a concert.

We didn't start with a color palette.

We didn't start with Figma.

We didn't even start with a screen.

**We started by understanding what someone was trying to accomplish.**

And step by step, a product emerged. Not because we're geniuses. Because we followed a process.

Every great product you use every day — Uber, Airbnb, Google Maps, YouTube — started exactly like this. Not with a polished mockup. With a messy whiteboard and a real problem.

**That's product design.**

---

# 🎤 SLIDE 29 — THREE LEVELS OF DESIGN (THE TRIAD)

Now let's pull all of this together into one clean mental checklist:

Three levels. One unified discipline.

**Level 1: UI (User Interface)**  
Does it look right? Is it accessible? Does it match the brand? Are the interactions clear?

**Level 2: UX (User Experience)**  
Is it easy to use? Can users find what they need? Where is the friction? Does the writing comfort or confuse?

**Level 3: PRODUCT DESIGN**  
Does it align with business goals? Does it drive adoption? How do we retain users? Is it scalable and cost-effective?

UI designers ask level one. UI/UX designers ask levels one and two. Product designers ask all three.

---

# 🎤 SLIDE 30 — THEY'RE NOT SEPARATE WORLDS

And remember: these are not separate worlds or warring camps. 

They are the same skill sets applied at different scales of the problem.

At the center is **UI**: typography, layout, interaction states, motion.  
Surrounding that is **UX**: journeys, user flows, information architecture.  
Surrounding that is **PRODUCT**: adoption, retention, scalability, and business viability.

The best builders and engineers move up and down this stack seamlessly every single day.

---

# 🎤 SLIDE 31 — DESIGN × ENGINEERING: YOU'RE ALREADY HERE

And for all the engineers on this call, here is the secret:

You already think like designers.

Think about what you do every day when you write code:
- You think in **components** — that’s design modularity.
- You think in **states** — idle, loading, error, success.
- You think in **edge cases** — null values, empty arrays, timeout retries.
- You think in **systems and performance**.

That IS design thinking! The vocabulary is slightly different, but the mindset is identical: How do we structure a system so that it behaves predictably and gracefully under real-world constraints?

---

# 🎤 SLIDE 32 — THE FINAL THOUGHT

Which brings us to our final thought:

Don't design screens.  
Design experiences.  
Design products people need.

Whether you write backend code, build React interfaces, or design in Figma, the goal is always the same: solve real problems for real human beings. 

Never settle for just making a screen look pretty.

---

# 🎤 SLIDE 33 — HOW DO YOU BECOME GREAT AT DESIGN?

So how do you actually become great at design?

Follow the loop: **OBSERVE → QUESTION → BUILD → TEST → LEARN → REPEAT.**

Here are six principles to live by:
1. **Become curious:** Stop asking "Does this look cool?" Start asking "Why was it designed this way?"
2. **Study real products:** Stop browsing fake mockups. Study real checkout flows, real onboarding, and real error states in apps like Uber, Linear, and Spotify.
3. **Design for people, not assumptions:** Talk directly to users. Watch a friend use your app without saying a word.
4. **Master the fundamentals:** Tools like Figma change every few years. Typography, contrast, spacing, hierarchy, and accessibility have lasted a hundred years.
5. **Build, test, iterate:** Design is an active, continuous loop.
6. **Develop taste and judgment:** Taste is knowing what looks good. Judgment is knowing what works.

Don't copy designs. Study decisions.

---

# 🎤 SLIDE 34 — YOUR DESIGN INTERNET (CURATED TOOLKIT)

Don’t hoard hundreds of bookmarks you’ll never open. Organize your design internet by the question you are trying to answer:

1. **"I need visual inspiration"** → Go to Dribbble, Behance, or Awwwards for color palettes, typography styling, and creative motion.
2. **"I need real product references"** → Go to Mobbin and Page Flows. Inspect real production screens from hundreds of top mobile and web apps.
3. **"I want to actually learn UX research"** → Go to the Nielsen Norman Group (NN/g). They are the world authority on evidence-based usability and cognitive psychology.
4. **"I want to learn platform conventions"** → Read the Apple Human Interface Guidelines and Google Material 3. They are the API documentation of human interfaces.

“Don’t browse. Investigate.” Use inspiration to understand how other designers think — not to stop thinking.

---

# 🎤 SLIDE 35 — THANK YOU (CLOSING & QUESTIONS)

To close out everything we’ve explored today:

UI is what it looks like.  
UX is how it works.  
Product design is why it exists.

And remember — you experienced that process firsthand today. We went from a problem to a product. From a messy concert night to a testable design. That's the process. That's how real products are made.

Thank you all so much for your time today. My name is Nathanim Tadele — you can find my projects at nathanim.dev and on GitHub. 

Feel free to unmute, raise your virtual hand in Google Meet, or drop your questions directly into the chat. I’d love to take your questions, hear about what you’re building, and talk through any design challenges you’re facing right now. Thank you!

---

# 🎤 EMERGENCY 30-SECOND EXPLANATION
*(If someone asks in Q&A: "In plain English, what is the difference between UI, UX, and Product Design?")*

"Think of an ATM:
- **UI** is the physical screen, the number buttons, the font size, the contrast, and the flashing card slot light.
- **UX** is making sure you can withdraw cash in under thirty seconds, giving you your debit card *before* dispensing the cash so you don't walk away and leave your card behind, and showing you a clear error if the machine is out of bills.
- **Product Design** is deciding where to place ATMs across the city, setting the transaction fees so the bank doesn't lose money, planning cash replenishment routes, and making sure customers trust the machine enough to deposit their paychecks.

**UI is what it looks like. UX is how it works. Product design is why it exists.**"

---

# ═══════════════════════════════════════════════════════════════
# 📌 CONCEPT CONNECTIONS — QUICK REFERENCE
# ═══════════════════════════════════════════════════════════════
#
# Use this to remind yourself which earlier concepts reappear
# during the live build.
#
# | Earlier concept | Where it reappears in the build |
# |---|---|
# | "A screen is not a product" (Slide 04) | Step 01: We start with a problem, not a screen |
# | Personas (Slide 11) | Step 02: We build a user profile for Alex |
# | User journeys (Slide 09) | Step 04: We map Alex's journey to the concert |
# | Friction points (Slide 10) | Step 05: We identify pain points in the journey |
# | "Think in flows, not screens" (Slide 11) | Step 09: We create the user flow with decisions |
# | Button/UI states (Slides 20-23) | Step 12: We design product-level states |
# | "Beautiful isn't enough" (Slide 06) | Step 10: Wireframes are ugly on purpose |
# | User × Business × Technology (Slide 13) | Step 14: Product thinking triangle |
# | Design process (Slide 26) | Steps 06-07: HMW and ideation directly from the process |
# | Build → Test → Learn (Slide 26) | Steps 16-17: We test and iterate live |
# | Edge cases / dev mindset (Slide 29) | Step 13: Edge cases mirror dev thinking |
#
# ═══════════════════════════════════════════════════════════════

---

# ═══════════════════════════════════════════════════════════════
# 🗺 EXCALIDRAW CANVAS LAYOUT GUIDE
# ═══════════════════════════════════════════════════════════════
#
# Organize the canvas in a 4×3 grid, left-to-right, top-to-bottom.
# Each section should be clearly labeled with its step number.
# DO NOT draw everything at once — reveal sections progressively.
#
# ┌─────────────┬─────────────┬──────────────┬─────────────┐
# │ 01 PROBLEM  │ 02 USER     │ 03 SUCCESS   │ 04 JOURNEY  │
# │ Concert +   │ Alex +      │ "Everyone    │ Plan →      │
# │ 5 friends + │ Goal +      │ knows what   │ Travel →    │
# │ time        │ Context     │ to do"       │ Meet        │
# ├─────────────┬─────────────┬──────────────┬─────────────┤
# │ 05 PAIN     │ 06 HMW      │ 07 IDEAS     │ 08 CORE     │
# │ Points +    │ "How might  │ ETA / map /  │ Join →      │
# │ Core        │ we..."      │ alerts /     │ Status →    │
# │ Problem     │             │ status       │ Arrive      │
# ├─────────────┬─────────────┬──────────────┬─────────────┤
# │ 09 FLOW     │ 10 SCREENS  │ 11 STATES    │ 12 EDGE     │
# │ Decision    │ Home / Event│ Default →    │ CASES       │
# │ tree with   │ / Status /  │ Warning →    │ What if...? │
# │ branches    │ Problem     │ Resolved     │             │
# ├─────────────┬─────────────┬──────────────┬─────────────┤
# │ 13 PRODUCT  │ 14 TEST     │ 15 ITERATE   │             │
# │ User ×      │ "Sam is     │ V1 → Test →  │             │
# │ Business ×  │ late. What  │ Problem →    │             │
# │ Technology  │ do you do?" │ V2           │             │
# └─────────────┴─────────────┴──────────────┴─────────────┘
#
# TIPS:
# - Start with a blank canvas. Build section by section.
# - Use Excalidraw's hand-drawn style — rough boxes, arrows, circles.
# - Keep labels large enough for screen sharing.
# - Use color sparingly: green for success, orange/yellow for warnings,
#   red for critical. Everything else is black/white.
# - If you pre-build any elements, keep them off-canvas and drag them
#   in at the right moment.
#
# ═══════════════════════════════════════════════════════════════
