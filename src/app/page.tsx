import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <h1 id="hero-heading">
              <span className="script">Find a Stay</span>
              <span className="headline-serif">
                that Feels Like Your Destination
              </span>
            </h1>
            <p>
              Discover exceptional hotels, private retreats, and unique stays
              selected for how
              <br className="desktop-break" /> they make you feel—not just where
              they are.
            </p>
          </div>
          <div className="hero-landscape">
            <Image
              className="villa-image"
              src="/images/avora-villa.webp"
              alt="Modern desert villa with a natural stone facade, palm trees, and a turquoise swimming pool"
              fill
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="curve curve-top" aria-hidden="true" />
            <div
              className="brand-seal"
              aria-label="Avora — a little closer to somewhere special"
            >
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <defs>
                  <path
                    id="seal-path"
                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  />
                </defs>
                <text>
                  <textPath href="#seal-path" textLength="274">
                    SOMEWHERE SPECIAL · A LITTLE CLOSER ·{" "}
                  </textPath>
                </text>
              </svg>
              <span className="wordmark">AVORA</span>
            </div>
            <div className="curve curve-bottom" aria-hidden="true" />
            <BookingForm />
          </div>
          <div className="hero-foot">
            <span>EXCEPTIONAL PLACES. YOUR KIND OF STAY.</span>
            <a href="#about" aria-label="Discover Avora">
              <Icon name="down" />
            </a>
            <span>A NEW PERSPECTIVE ON GETTING AWAY.</span>
          </div>
        </section>
        <section id="about" className="about section-wrap">
          <div className="eyebrow">01 / THE AVORA WAY</div>
          <div>
            <h2>
              A place to stay.
              <br />
              <em>A feeling to take home.</em>
            </h2>
            <p>
              A slow morning by the pool. A room filled with sunlight. A new
              city that feels a little like home. We believe the best journeys
              begin with a place that feels right.
            </p>
            <a className="text-link" href="#service">
              Find your kind of escape <Icon name="arrow" />
            </a>
          </div>
          <div className="large-sun" aria-hidden="true">
            <Icon name="sun" />
          </div>
        </section>
        <section id="service" className="services section-wrap">
          <div className="section-heading">
            <div className="eyebrow">02 / ROOM FOR YOUR KIND OF TRAVEL</div>
            <h2>However you wander.</h2>
          </div>
          <div className="service-grid">
            {[
              {
                icon: "sun" as const,
                title: "A slower escape",
                text: "Quiet corners, private pools, and time to do a little less.",
                query: "Palm Springs",
              },
              {
                icon: "compass" as const,
                title: "A different perspective",
                text: "Character-filled hotels at the heart of somewhere new.",
                query: "Lisbon",
              },
              {
                icon: "flower" as const,
                title: "A moment together",
                text: "Room to reconnect, celebrate, and make a memory.",
                query: "Bali",
              },
            ].map((item) => (
              <a
                className="service-item"
                href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(item.query)}`}
                target="_blank"
                rel="noopener noreferrer"
                key={item.title}
              >
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>
                  Explore stays <Icon name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </section>
        <section id="faq" className="faq section-wrap">
          <div>
            <div className="eyebrow">03 / A FEW THINGS TO KNOW</div>
            <h2>
              Good questions.
              <br />
              <em>Simple answers.</em>
            </h2>
          </div>
          <div className="faq-list">
            {[
              {
                q: "How do I find a stay?",
                a: "Choose your destination, guests, and dates in the search form. You’ll continue to Booking.com to browse live availability and complete your reservation.",
              },
              {
                q: "Can I change or cancel my reservation?",
                a: "Changes and cancellations depend on the property and rate you choose. Review the conditions before you book, and manage an existing reservation with the booking provider.",
              },
              {
                q: "Can I find a stay for a group or special occasion?",
                a: "Set the number of guests before searching, then use the booking provider’s filters to find the rooms and amenities that fit your plans.",
              },
            ].map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="event" className="event section-wrap">
          <div className="event-symbol" aria-hidden="true">
            <Icon name="flower" />
          </div>
          <div className="eyebrow">04 / MAKE AN OCCASION OF IT</div>
          <h2>
            Some moments deserve
            <br />
            <span className="script">somewhere special.</span>
          </h2>
          <p>
            A birthday weekend. A long-awaited reunion. A just-because getaway.
            <br />
            Find a setting that makes it feel like an occasion.
          </p>
          <a className="pill-button" href="#home">
            Find your stay <Icon name="arrow" />
          </a>
        </section>
      </main>
      <footer id="contact" className="section-wrap">
        <a className="wordmark" href="#home" aria-label="Avora home">
          AVORA
        </a>
        <p>A little closer to somewhere special.</p>
        <a
          href="https://www.booking.com/customer-service.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Booking support <Icon name="arrow" />
        </a>
        <span>© 2026 Avora</span>
      </footer>
    </>
  );
}
