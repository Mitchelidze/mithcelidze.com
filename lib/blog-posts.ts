export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-invisible-interface",
    title: "The Invisible Interface",
    date: "February 2026",
    readingTime: "5 min read",
    content: `The best interfaces are the ones you stop noticing. Not because they're forgettable, but because they've become so fluent with human intention that the tool disappears and only the task remains.

I've been thinking about this a lot lately — particularly after spending time with a group of first-time smartphone users in rural Georgia. What struck me wasn't what confused them, but what didn't. The physicality of swiping felt natural in a way that menus never had. The gesture vocabulary of modern touchscreens is, in some ways, more universal than the desktop metaphors we spent three decades perfecting.

**The fluency problem**

Design fluency is that invisible layer of learned behavior. When you reach for a door handle, you don't think about it — you've built a model of how handles work, and your hand just knows. Interface fluency works the same way, except we're constantly changing the handles.

Every new interaction paradigm we introduce requires people to build a new model. That cost is real, even when invisible. The designers who respect it tend to build products that feel effortless. The ones who ignore it tend to build products that feel clever.

**Restraint as a design tool**

The most powerful design decision I've made in the past few years wasn't adding something — it was removing it. A navigation element that served 3% of users but added cognitive overhead for the other 97%. A setting that gave power users control but confused everyone else. A feature that marketing wanted and users silently ignored.

Restraint is underrated because it leaves no artifact. You can't put "removed friction" in a portfolio. But you can feel it every time you use a product that gets out of your way.

**What I'm watching**

Spatial computing is the next frontier for this conversation. When the interface is literally the world around you, the question of visibility becomes existential. Do you want to know you're using software? Or do you want the software to simply help you do what you're trying to do?

I don't know the answer yet. But I'm paying close attention to the teams who are asking the question.`,
  },
  {
    slug: "designing-for-trust",
    title: "Designing for Trust",
    date: "January 2026",
    readingTime: "7 min read",
    content: `Trust is the most important thing a product can earn — and the easiest to lose. In ten years of designing digital products, I've noticed that trust isn't built by features. It's built by consistency, by honesty, and by the quiet accumulation of moments where the product did exactly what you expected.

**What breaks trust**

Dark patterns are the obvious villains — the pre-checked boxes, the confusing cancellation flows, the disguised ads. But the subtler trust-breakers are harder to see. An app that remembers your preferences until it updates and forgets them. A notification that promises urgency and delivers a sales pitch. An error message that blames you instead of explaining the problem.

These aren't failures of intent. They're failures of attention. Somewhere in the design process, someone optimized for a metric without considering the cumulative effect on the person.

**Trust as a design primitive**

I've started thinking about trust the way I think about accessibility — not as a checklist, but as a lens. When I review a design now, I ask: does this moment make the user feel more or less confident? Does this copy tell the truth? Does this interaction do what it implies?

Some of the changes that come from this lens are small. Changing "Get started for free" to "Start a 14-day free trial, no credit card required." Changing an empty state from "No results" to "We couldn't find anything matching that search — try different keywords." These aren't big redesigns. They're moments of honesty.

**Building trust over time**

The products I trust most are the ones that have been consistent with me across years. I know how they behave. I know what they'll tell me. I know what they won't do. That predictability feels like safety.

We talk a lot in design about delight — the unexpected moments of surprise that make someone smile. But I'd argue that reliability is more valuable than delight. A product that delights me once and disappoints me three times has done more damage than one that simply works every time.

Build trust first. Delight is a feature. Reliability is a foundation.`,
  },
  {
    slug: "the-design-systems-paradox",
    title: "The Design Systems Paradox",
    date: "December 2025",
    readingTime: "6 min read",
    content: `Design systems are supposed to set designers free. By solving the repetitive problems — color, type, spacing, components — they give designers more time to focus on the hard stuff: interaction, information architecture, the actual design problems.

That's the theory. In practice, design systems can have the opposite effect. They can cage designers into producing work that is consistent but mediocre — work that solves no new problems because every tool in the kit is designed for old ones.

**The consistency trap**

Consistency is valuable. Don't misunderstand me. A product that behaves predictably across its surface is easier to learn and easier to trust. The case for design systems rests on real evidence.

But consistency has a ceiling. At some point, a design system stops being a floor and starts being a ceiling. Team members stop asking "what's the right solution?" and start asking "what component do we have for this?" The system becomes the design.

I've seen this play out in teams that have invested heavily in their systems. The systems are beautiful. The products are... fine. Functional. On-brand. But never surprising, never outstanding, never particularly suited to the actual problem at hand.

**The paradox**

Here's the paradox: the more mature your design system, the harder it is to do original work. The vocabulary grows so rich that you forget you can invent new words.

The solution isn't to abandon systems. It's to build escape hatches. Explicit permission structures that say: when you're in exploration mode, the rules are different. When you're prototyping a new pattern, you're allowed — encouraged — to go outside the system. And when the pattern proves itself, you bring it back in.

**What good systems do**

The best design systems I've worked with have a concept of the frontier — the edge where the system ends and the unknown begins. They make that frontier visible and permission-grant crossing it. They treat components as proposals, not mandates.

Figma has made this easier. Variables, modes, and auto-layout have given designers more room to build systems that flex. But the hard part isn't tooling. It's culture: building teams that use systems as a launching pad, not a landing pad.`,
  },
  {
    slug: "on-mentorship-in-design",
    title: "On Mentorship in Design",
    date: "November 2025",
    readingTime: "5 min read",
    content: `I had a mentor early in my career who never told me what to do. I'd come to her with a problem, lay out my thinking, show her what I'd tried — and she'd ask me a question. Just one question, sometimes. A question that made me see something I'd been standing too close to notice.

It took me years to realize she was teaching me how to think, not what to think. That's the hardest thing to do as a mentor, and the most valuable.

**What mentorship is not**

Mentorship isn't feedback. Feedback is important — designers need honest, specific feedback about their work — but feedback is about the artifact. Mentorship is about the person making it.

Mentorship also isn't teaching skills. You can teach someone how to use a tool in an afternoon. Mentorship is about developing judgment, taste, and the kind of professional identity that holds up under pressure.

**The things worth transmitting**

When I mentor designers now, I try to focus on a few specific capacities:

The ability to articulate decisions. Not "it felt right" but the underlying reasoning: who this is for, what they need, what constraints we're working within, why this solution serves those things better than the alternatives.

The ability to sit with uncertainty. Early designers want answers. Good designers learn to hold questions longer — to explore before they close, to prototype before they commit, to stay curious about the problem even after they've found a solution.

The ability to receive hard feedback without defensive collapse or hollow capitulation. This is rare and worth developing carefully. The goal is a designer who hears criticism, separates the signal from the noise, and emerges with better work.

**What I've learned from being mentored**

The best thing my mentors gave me wasn't advice. It was their time, sustained over months and years. The cumulative effect of someone believing you're worth developing is not something you can shortcut or simulate. It changes how you see yourself, and therefore what you're capable of.

If you have time to mentor someone, do it. The work will outlast you.`,
  },
  {
    slug: "the-future-of-design-tools",
    title: "The Future of Design Tools",
    date: "October 2025",
    readingTime: "8 min read",
    content: `Every five years or so, the design tool landscape shifts. We went from Photoshop to Sketch, from Sketch to Figma, and now AI is forcing another inflection point. The question isn't whether the tools will change — they will — but whether the change will be additive or substitutive.

**The additive case**

The optimistic case for AI in design tools is straightforward: AI removes the tedious parts of the process and amplifies the human parts. Auto-layout already does this — designers spend less time nudging pixels and more time thinking about systems. Good AI tooling continues that trend.

Generate ten layout options from a brief. Instantly resize and adapt designs to different screen sizes. Write production-ready copy variations for testing. Identify accessibility violations before they ship. These are genuinely useful capabilities, and they make designers faster without making them redundant.

**The substitutive risk**

The pessimistic case is that AI doesn't just speed up design — it replaces the exploratory parts that generate real insight. When you can generate a hundred variations of something in seconds, you stop developing the judgment to evaluate them. When the tool makes decisions for you, you stop building the intuition to make them yourself.

I've noticed this in junior designers who've grown up with AI assistance. They're fast. They produce volume. But when you ask them to defend a decision — to explain why this layout serves the user better than that one — they struggle. The tool told them. They don't know why.

**What I think will happen**

I think the truth is in between, as it usually is. AI will change the shape of design work dramatically. Some things that designers do today will be fully automated. Others will remain stubbornly human — not because machines can't do them, but because the value is in the human judgment, not the output.

The designers who thrive will be the ones who use AI to do more, not the ones who let AI do it for them. The distinction is in agency: are you directing the tool, or is the tool directing you?

That's not a new question in design. It's the same question we asked when Photoshop arrived, when the web arrived, when mobile arrived. The answer has always been: the tool is as valuable as the thinking behind it.`,
  },
  {
    slug: "what-vr-taught-me-about-flat-design",
    title: "What VR Taught Me About Flat Design",
    date: "September 2025",
    readingTime: "6 min read",
    content: `I spent four years designing for virtual reality at Meta. When I returned to 2D product design afterward, I saw flat interfaces differently — not as the natural, correct way to design, but as one point on a spectrum of spatial expressiveness.

Flat design emerged as a reaction to skeuomorphism — the heavy textures and fake stitching of early iOS. It was the right correction at the right time. But we overcorrected. We stripped away so much depth that we removed useful signals for how things work and what they do.

**What depth communicates**

In VR, depth isn't ornamental. Depth is communication. When an object is closer, it's more important. When something is behind you, it's less urgent. When a menu lifts off the environment surface, you know you can interact with it. These aren't arbitrary conventions — they're rooted in how we understand physical space.

Flat design asked us to encode those signals purely through color, shape, and typography. We can do it. But it's harder, and the margin for error is smaller. A card that "elevates" on hover in a flat design system needs the hover to communicate what depth would communicate automatically in 3D.

**The lessons I brought back**

VR taught me to think of z-axis as a design tool, not a decoration. It taught me that depth hierarchy is as important as typographic hierarchy. And it taught me that users build spatial models of software the same way they build spatial models of rooms — they know where things are, and they notice when things move.

The best 2D interfaces I've designed since have all incorporated some of this thinking. Not skeuomorphism — I'm not advocating for leather textures. But meaningful depth. Surfaces that lift. Layering that communicates relationship. A slight shadow that tells you: this thing is on top of that thing, and that order matters.

**The next wave**

Spatial computing is now making this conversation explicit again. When the entire design surface is spatial, you can't pretend depth is optional. You have to make deliberate decisions about z-axis, about proximity, about what's ambient and what's immediate.

I'm genuinely excited about it. Not because VR and AR are the future of every interface — they're not. But because designing for space forces exactly the kind of intentional depth-thinking that makes flat design better too.`,
  },
];
