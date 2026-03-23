import { Navbar } from '@/components/nav/Navbar';
import { Footer } from '@/components/footer/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Worship Planning Software for Small Churches | WorshipCenter',
  description: 'Discover worship planning software designed for small churches. Simple service planning, team scheduling, and communication without the complexity of full ChMS.',
  openGraph: {
    title: 'Worship Planning Software for Small Churches | WorshipCenter',
    description: 'Simple worship planning for small churches. Plan services, schedule your team, and communicate—all in one place.',
    url: 'https://worshipcenter.app/worship-planning-software-small-churches',
    siteName: 'WorshipCenter',
    type: 'article',
  },
};

export default function SmallChurchesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50/50 to-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Worship Planning Software for Small Churches
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              You don't need a complex church management system to run your worship services effectively. Here's how the right worship planning software can help your small church thrive.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-slate prose-lg max-w-none">
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Unique Challenges Small Churches Face</h2>
              <p className="text-slate-600 mb-4">
                Small churches operate differently than large congregations. You likely have a smaller team, limited technical resources, and everyone wears multiple hats. The worship leader might also be the sound engineer, the graphic designer, and sometimes even the IT person. This reality means you need tools that work <em>with</em> you, not against you.
              </p>
              <p className="text-slate-600 mb-4">
                Time is your most precious commodity. Between your day job, family responsibilities, and ministry work, you need solutions that are quick to learn and even quicker to use. The last thing you want is to spend hours training volunteers on a complex system when you could be focusing on what really matters—leading people in worship.
              </p>
              <p className="text-slate-600">
                Many small churches fall into the trap of trying to use tools designed for megachurches. These systems often include features you'll never use—donation tracking, visitor follow-up systems, children's check-in, facility management—and learning them becomes a burden rather than a blessing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Generic Church Management Software Is Overkill</h2>
              <p className="text-slate-600 mb-4">
                Church Management Systems (ChMS) like Planning Center Online, Realm, or Fellowship One are powerful tools—for the right churches. They're built to handle every aspect of church operations: attendance, giving, membership, volunteer management, communications, and more. But if you're a church of 50-150 people, you're probably paying for and maintaining features you rarely use.
              </p>
              <p className="text-slate-600 mb-4">
                The complexity of these systems can be overwhelming. New volunteers need hours of training just to understand the basics. The interface is often cluttered with modules you don't need. And the pricing? It's typically based on church size or attendance, which means you're subsidizing features designed for churches 10 times your size.
              </p>
              <p className="text-slate-600">
                Here's the reality: You don't need a system that can track 5,000 members across multiple campuses if you have 75 people in one sanctuary. You need something focused on what you actually do every week—planning worship services, scheduling your team, and communicating effectively.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What Worship Planning Software Should Do</h2>
              <p className="text-slate-600 mb-4">
                Effective worship planning software focuses on the essentials of your weekly preparation. It should help you:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Plan Services:</strong> Create and organize your service plans with songs, scriptures, media, and notes all in one place. No more scattered documents, emails, or group chats.</li>
                <li><strong>Schedule Your Team:</strong> Assign musicians, vocalists, and technicians to specific services with clear roles and dates. Let your team see where they're scheduled and when.</li>
                <li><strong>Manage Your Song Library:</strong> Store chord charts, lyrics, and audio files for your worship songs. Track which songs you've used and when, so you can maintain healthy rotation.</li>
                <li><strong>Communicate Clearly:</strong> Send reminders, share schedule changes, and keep everyone on the same page. Your team should know exactly what's expected each week.</li>
              </ul>
              <p className="text-slate-600">
                That's it. These are the core activities that happen every week in worship ministry. A tool that does these four things well—and nothing more—is exactly what most small churches need.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Practical Example: How a 100-Person Church Uses Planning Software Weekly</h2>
              <p className="text-slate-600 mb-4">
                Let's walk through a typical week at a small church that uses focused worship planning software:
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Monday:</strong> The worship leader logs in and creates the service plan for Sunday. They add four songs, select the scripture passage, and upload the announcement slides. Total time: 15 minutes.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Tuesday:</strong> They schedule the team—a drummer, bass player, two vocalists, and a sound technician. Each person receives a notification with their role and service details. The drummer replies to confirm availability.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Wednesday:</strong> The worship leader uploads chord charts for all the songs. Team members log in, download PDFs, and start practicing on their own. The vocal group messages through the service chat to confirm harmonies.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Thursday:</strong> The sound technician reviews the plan and notices a media file is missing. They message the worship leader through the service chat. The issue is resolved in minutes.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Saturday:</strong> Everyone receives an automatic reminder for tomorrow's service. The worship leader quickly checks the plan one more time and notes a minor change in the song order.
              </p>
              <p className="text-slate-600">
                <strong>Sunday:</strong> The team arrives prepared. Everyone knows the plan. The service runs smoothly. No stress, no confusion, no last-minute scrambling. Afterward, the worship leader archives the plan with one click.
              </p>
            </section>

            <section className="mb-12 bg-slate-50 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Checklist: Do You Actually Need Worship Planning Software or a Full ChMS?</h2>
              <p className="text-slate-600 mb-4">
                Answer these questions to determine what's right for your church:
              </p>
              <ul className="list-none space-y-3 text-slate-600 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">□</span>
                  <span>Do you have fewer than 200 regular attendees?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">□</span>
                  <span>Is your worship team under 20 people?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">□</span>
                  <span>Do you primarily need to plan services, schedule volunteers, and communicate with your team?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">□</span>
                  <span>Are you currently managing worship planning through email, spreadsheets, or group chats?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">□</span>
                  <span>Would a simple, focused tool save you 2-3 hours per week?</span>
                </li>
              </ul>
              <p className="text-slate-600">
                If you answered "yes" to most of these, you probably need focused worship planning software, not a full ChMS. You'll save money, reduce complexity, and get exactly what you need without the bloat.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How WorshipCenter Fits</h2>
              <p className="text-slate-600 mb-4">
                WorshipCenter was built specifically for churches like yours—small to mid-sized congregations that need powerful but simple worship planning tools. We focus on what matters most:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Service Planning:</strong> Create detailed plans with songs, scriptures, media, and notes. Share them with your team instantly.</li>
                <li><strong>Team Scheduling:</strong> Assign roles, confirm availability, and track who's serving when. Simple and straightforward.</li>
                <li><strong>Communication:</strong> Built-in chat for each service, automatic reminders, and clear notifications. No more information silos.</li>
                <li><strong>Song Management:</strong> Store your library, track usage, and maintain healthy rotation. See what you've played and when.</li>
              </ul>
              <p className="text-slate-600 mb-4">
                We don't do donation tracking, visitor management, or facility scheduling—not because those aren't important, but because there are already great tools for those. WorshipCenter does one thing exceptionally well: worship planning.
              </p>
              <p className="text-slate-600">
                Ready to simplify your worship planning? <Link href="/" className="text-brand-600 hover:text-brand-700 font-medium">Try our simple worship planning app</Link> with a free trial. No credit card required, no commitment, and no overwhelm. Just the tools you need to lead well.
              </p>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Free Trial</h2>
            <p className="text-xl text-slate-300 mb-8">
              See how WorshipCenter can simplify your worship planning in minutes, not hours.
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