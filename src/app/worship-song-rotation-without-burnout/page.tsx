import { Navbar } from '@/components/nav/Navbar';
import { Footer } from '@/components/footer/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'How to Rotate Worship Songs Without Burnout | WorshipCenter',
  description: 'Learn worship song rotation strategies. Avoid overused songs, maintain fresh worship, and keep your congregation engaged with practical frameworks.',
  openGraph: {
    title: 'How to Rotate Worship Songs Without Burnout | WorshipCenter',
    description: 'Stop the song fatigue. Learn how to maintain healthy rotation and keep worship fresh.',
    url: 'https://worshipcenter.app/worship-song-rotation-without-burnout',
    siteName: 'WorshipCenter',
    type: 'article',
  },
};

export default function WorshipSongRotationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50/50 to-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              How to Rotate Worship Songs Without Burning Out Your Church
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Discover practical strategies for healthy song rotation that keeps worship fresh, engaging, and theologically balanced—without the overwhelm.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-slate prose-lg max-w-none">
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Song Rotation Matters</h2>
              <p className="text-slate-600 mb-4">
                You've seen it happen. The worship leader introduces a powerful new song, and for a few weeks, it's electric. The congregation engages, hands go up, voices lift in genuine worship. Then... it becomes a regular part of the rotation. And another. And another. Before long, the set list feels stale, the songs feel overplayed, and engagement starts to wane.
              </p>
              <p className="text-slate-600 mb-4">
                Healthy song rotation isn't about constantly chasing the latest trend or abandoning songs your congregation loves. It's about intentional stewardship of your worship repertoire. Good rotation prevents song fatigue, keeps congregational engagement high, ensures theological balance, and creates space for new songs to breathe.
              </p>
              <p className="text-slate-600 mb-4">
                When rotation fails, everyone suffers. The congregation sings on autopilot, disengaged because they've heard "How Great Is Our God" for the 30th time this year. The worship team gets bored playing the same arrangements week after week. New worshipers wonder if this church ever does anything different. And the worship leader feels stuck—unable to move forward but unsure how to break the cycle.
              </p>
              <p className="text-slate-600">
                The challenge is that good rotation requires systems. You can't just "feel" your way through it. You need to track what you've played, when you've played it, and what's overdue for a break. Without a system, you default to the familiar—and the familiar becomes the enemy of fresh worship.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Rotation Problems</h2>
              <p className="text-slate-600 mb-4">
                Most churches struggle with song rotation for predictable reasons:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Reliance on Memory:</strong> "I feel like we haven't done that song in a while" is not a rotation strategy. Human memory is notoriously unreliable for tracking frequency. You'll inevitably overplay some songs while neglecting others, all while thinking you're being balanced.</li>
                <li><strong>Spreadsheet Chaos:</strong> Some churches maintain spreadsheets to track song usage, but these quickly become unwieldy. Which sheet has this month's data? Did you update the frequency count? Without a clean, accessible system, tracking becomes a burden and gets abandoned.</li>
                <li><strong>No Clear Guidelines:</strong> How often <em>should</em> you play each song? What's too often? What's too infrequent? Without clear frequency guidelines, every decision feels arbitrary. Some songs get played constantly while others gather dust.</li>
                <li><strong>Mental Tracking:</strong> Many worship leaders try to keep track mentally: "We did 'Good Good Father' three weeks ago, so we're good." But mental tracking doesn't scale. As your repertoire grows, your mental spreadsheet becomes overwhelmed.</li>
                <li><strong>Reactive, Not Proactive:</strong> You plan sets week-to-week, responding to the moment rather than following a rotation strategy. This leads to reactive patterns—you play the songs you know work rather than the songs that fit your rotation plan.</li>
                <li><strong>No Historical Data:</strong> Without tracking past usage, you have no context for current decisions. How many times did you play that song last year? Which songs have been neglected for months? The lack of historical insight makes smart rotation impossible.</li>
              </ul>
              <p className="text-slate-600">
                These problems compound over time. The longer you go without a rotation system, the more entrenched the patterns become. Eventually, your song setlist becomes a comfortable rut rather than a curated repertoire.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple Frameworks for Healthy Rotation</h2>
              <p className="text-slate-600 mb-4">
                Effective song rotation doesn't require complex algorithms. Simple frameworks work best:
              </p>
              <p className="text-slate-600 mb-4">
                <strong>The Active Library Approach:</strong> Rather than trying to manage every song you've ever done, focus on an "active library"—a curated set of 40-60 songs that form your regular rotation. Songs outside this library are retired (or archived) and brought back only intentionally. This keeps your rotation manageable and focused.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Tiered Frequency Guidelines:</strong> Not all songs should be played equally. Create tiers based on song type:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Core Songs (Tier 1):</strong> These are your anthems—the songs your congregation knows by heart and connects with deeply. Play these every 6-8 weeks. They're familiar but not overplayed.</li>
                <li><strong>Regular Songs (Tier 2):</strong> These are solid, well-liked songs that fit your church well. Play these every 8-12 weeks. They're part of your regular rotation but not core repertoire.</li>
                <li><strong>Occasional Songs (Tier 3):</strong> These are newer songs, seasonal songs, or songs you're testing. Play these every 12-16 weeks (or strategically for teaching series). They add freshness without overwhelming your congregation.</li>
              </ul>
              <p className="text-slate-600 mb-4">
                <strong>Series-Based Planning:</strong> Instead of thinking about individual songs, plan in series or seasons. A 4-week series on God's faithfulness might feature 4-6 songs that support that theme, played multiple times during the series. After the series, most of those songs take a break. This creates natural rotation cycles tied to teaching rather than arbitrary timelines.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>The 80/20 Rule:</strong> Aim for 80% of your songs to come from your active library, with 20% being intentional variety—new songs, seasonal songs, or songs brought back from the archives. This balance provides stability while keeping worship fresh.
              </p>
              <p className="text-slate-600">
                <strong>Congregational Readiness:</strong> Consider your congregation's appetite for new songs. Some churches embrace new music weekly; others need more time to learn and internalize songs before introducing the next one. Match your rotation pace to your congregation, not to what other churches are doing.
              </p>
            </section>

            <section className="mb-12 bg-slate-50 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Step-by-Step: Building a 3-Month Rotation Plan</h2>
              <p className="text-slate-600 mb-4">
                Here's how to create a practical rotation plan for your church:
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Step 1: Audit Your Current Repertoire:</strong> Review the last 6-12 months of worship sets. Which songs have you played most frequently? Which songs have been neglected? Be honest—you might be surprised by the data. This audit reveals your current patterns and creates a baseline.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Step 2: Define Your Active Library:</strong> From your audit, identify 40-60 songs that should form your regular rotation. These are the songs that work for your church—theologically sound, musically accessible, and congregationally engaging. Archive anything outside this set.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Step 3: Tier Your Songs:</strong> Categorize your active library into Core, Regular, and Occasional tiers. Be realistic about which songs are truly core anthems versus simply familiar choices. Aim for roughly 15-20 core songs, 20-25 regular songs, and 10-15 occasional songs.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Step 4: Set Frequency Targets:</strong> Based on your tiers, establish how many times you want to play each song per quarter. Core songs might be played 4-6 times per quarter, regular songs 3-4 times, occasional songs 2-3 times. These targets create your rotation rhythm.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Step 5: Plan Quarterly:</strong> At the start of each quarter, map out which songs from each tier you'll play and when. Consider teaching series, seasonal themes, and natural pacing. Don't try to play every active song every quarter—that's not the point. Some songs will sit out for a season, and that's okay.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Step 6: Track and Adjust:</strong> As you plan and execute, track actual usage against your plan. Are you sticking to your frequency targets? Are there songs that aren't resonating as expected? Adjust your tiers and targets quarterly based on real data, not assumptions.
              </p>
              <p className="text-slate-600">
                <strong>Step 7: Review and Refresh:</strong> Every 6-12 months, review your active library. Are there songs that should be retired or promoted? Are there archived songs worth bringing back? Rotation isn't static—your repertoire should evolve with your church.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Track Usage Effectively</h2>
              <p className="text-slate-600 mb-4">
                The key to successful rotation is tracking—and tracking requires a system. Here's what effective song tracking looks like:
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Service History:</strong> Maintain a complete history of every service—songs played, dates, and any notes. This historical data is invaluable. You can look back and see, "We played 'Holy Spirit' three times in February—let's give it a break."
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Usage Metrics:</strong> For each song, track: last played date, total times played this year, average weeks between plays, and current tier. These metrics give you instant insight into rotation health. If a song was last played 20 weeks ago, it's overdue. If it was played twice in the last month, it's overplayed.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Tagging System:</strong> Tag songs by theme, tempo, key, or category. This helps you find the right song for the right moment while still respecting rotation rules. "I need an upbeat song about God's faithfulness that hasn't been played in 8 weeks"—your tags and metrics make this easy.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Rotation Dashboard:</strong> Create a simple dashboard that shows:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Songs due for rotation (haven't been played in X weeks)</li>
                <li>Songs at risk of overplay (played recently, need a break)</li>
                <li>Upcoming series themes and matching songs</li>
                <li>Active library overview (tier distribution)</li>
              </ul>
              <p className="text-slate-600 mb-4">
                <strong>Planning Integration:</strong> Your tracking should integrate with service planning, not exist separately. When you're building a set, see rotation status at a glance. "Build Me Up Savior" shows as overdue—great candidate. "What a Beautiful Name" shows as played two weeks ago—skip this week.
              </p>
              <p className="text-slate-600">
                <strong>Automated Insights:</strong> The best systems surface insights automatically. Instead of manually checking every song's last-played date, get alerts: "You haven't played any Tier 1 songs in the last 3 weeks," or "These 5 songs are overdue for rotation."
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How a Tool Like WorshipCenter Can Automate Rotation</h2>
              <p className="text-slate-600 mb-4">
                Manual song tracking is tedious and error-prone. WorshipCenter automates rotation tracking so you can focus on leading worship, not managing spreadsheets:
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Automatic Usage Tracking:</strong> Every time you add a song to a service plan, WorshipCenter records it automatically. No manual entry, no forgetting to update the spreadsheet. Your service history builds effortlessly.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Last-Played Tracking:</strong> See instantly when each song was last played, how many times it's been played this quarter, and its current rotation status. Visual indicators show which songs are overdue, which are fresh, and which need a break.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Overplayed Song Alerts:</strong> Get warnings when you're about to overplay a song. "You played 'How Great Is Our God' two weeks ago—are you sure you want to play it again?" These gentle prompts help you stay on track.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Underused Song Suggestions:</strong> WorshipCenter can suggest songs that haven't been played recently. "Here are 5 songs from your active library that haven't been played in 8+ weeks." Fresh options at your fingertips.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Tagging and Search:</strong> Tag songs by theme, tempo, key, or season. When you need a specific type of song, filter by tag and rotation status together. Find an upbeat song about God's love that hasn't been played in 6 weeks—easy.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Tier Management:</strong> Assign each song to a rotation tier and set your frequency preferences. WorshipCenter helps you stick to your plan by showing which tier each song belongs to and how it fits your rotation strategy.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Rotation Reports:</strong> Generate quarterly reports showing rotation health. Which songs were played most? Which were neglected? Are you meeting your frequency targets? These insights help you continuously improve.
              </p>
              <p className="text-slate-600">
                Stop fighting song rotation with spreadsheets and memory. Let WorshipCenter handle the tracking so you can focus on leading worship that's fresh, engaging, and life-giving.
              </p>
              <p className="text-slate-600">
                Ready to transform your song rotation? <Link href="/" className="text-brand-600 hover:text-brand-700 font-medium">Try worship planning software that tracks song usage</Link> with a free trial. Keep your worship fresh, your team engaged, and your congregation singing.
              </p>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Keep Your Worship Fresh</h2>
            <p className="text-xl text-slate-300 mb-8">
              Start your free trial and let WorshipCenter help you maintain healthy song rotation.
            </p>
            <a
              href="https://app.worshipcenter.app/signup"
              className="inline-block bg-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-lg"
            >
              Get Started Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}