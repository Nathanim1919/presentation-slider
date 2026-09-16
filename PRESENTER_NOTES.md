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

# 🎤 SLIDE 27 — THREE LEVELS OF DESIGN (THE TRIAD)

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

# 🎤 SLIDE 28 — THEY'RE NOT SEPARATE WORLDS

And remember: these are not separate worlds or warring camps. 

They are the same skill sets applied at different scales of the problem.

At the center is **UI**: typography, layout, interaction states, motion.  
Surrounding that is **UX**: journeys, user flows, information architecture.  
Surrounding that is **PRODUCT**: adoption, retention, scalability, and business viability.

The best builders and engineers move up and down this stack seamlessly every single day.

---

# 🎤 SLIDE 29 — DESIGN × ENGINEERING: YOU'RE ALREADY HERE

And for all the engineers on this call, here is the secret:

You already think like designers.

Think about what you do every day when you write code:
- You think in **components** — that’s design modularity.
- You think in **states** — idle, loading, error, success.
- You think in **edge cases** — null values, empty arrays, timeout retries.
- You think in **systems and performance**.

That IS design thinking! The vocabulary is slightly different, but the mindset is identical: How do we structure a system so that it behaves predictably and gracefully under real-world constraints?

---

# 🎤 SLIDE 30 — THE FINAL THOUGHT

Which brings us to our final thought:

Don't design screens.  
Design experiences.  
Design products people need.

Whether you write backend code, build React interfaces, or design in Figma, the goal is always the same: solve real problems for real human beings. 

Never settle for just making a screen look pretty.

---

# 🎤 SLIDE 31 — HOW DO YOU BECOME GREAT AT DESIGN?

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

# 🎤 SLIDE 32 — YOUR DESIGN INTERNET (CURATED TOOLKIT)

Don’t hoard hundreds of bookmarks you’ll never open. Organize your design internet by the question you are trying to answer:

1. **"I need visual inspiration"** → Go to Dribbble, Behance, or Awwwards for color palettes, typography styling, and creative motion.
2. **"I need real product references"** → Go to Mobbin and Page Flows. Inspect real production screens from hundreds of top mobile and web apps.
3. **"I want to actually learn UX research"** → Go to the Nielsen Norman Group (NN/g). They are the world authority on evidence-based usability and cognitive psychology.
4. **"I want to learn platform conventions"** → Read the Apple Human Interface Guidelines and Google Material 3. They are the API documentation of human interfaces.

“Don’t browse. Investigate.” Use inspiration to understand how other designers think — not to stop thinking.

---

# 🎤 SLIDE 33 — THANK YOU (CLOSING & QUESTIONS)

To close out everything we’ve explored today:

UI is what it looks like.  
UX is how it works.  
Product design is why it exists.

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
