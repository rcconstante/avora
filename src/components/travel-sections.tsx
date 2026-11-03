"use client";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "./icon";
import styles from "./travel-sections.module.css";
const stays = [
  {
    image: "coast",
    location: "Amalfi Coast, Italy",
    name: "A slower life by the sea",
    tag: "Coastal escape",
    query: "Amalfi Coast",
  },
  {
    image: "kyoto",
    location: "Kyoto, Japan",
    name: "A quiet mountain morning",
    tag: "Garden retreat",
    query: "Kyoto ryokan",
  },
  {
    image: "lake",
    location: "Lake Como, Italy",
    name: "Somewhere close to nature",
    tag: "Lakeside living",
    query: "Lake Como",
  },
  {
    image: "hills",
    location: "Provence, France",
    name: "The art of doing a little less",
    tag: "Hillside hideaway",
    query: "Provence",
  },
  {
    image: "sunset",
    location: "Bali, Indonesia",
    name: "One more golden hour",
    tag: "Ocean outlook",
    query: "Bali private villa",
  },
  {
    image: "villa",
    location: "Palm Springs, California",
    name: "Room for everyone",
    tag: "Private villa",
    query: "Palm Springs",
  },
];
const approach = [
  {
    title: "Flexible possibilities",
    copy: "Find a place that fits the way you want to travel. Review each property’s booking terms before you decide.",
    image: "coast",
  },
  {
    title: "A feeling of belonging",
    copy: "Consider the details that make a stay feel right: a warm welcome, a quiet corner, a place to reconnect.",
    image: "guest",
  },
  {
    title: "Chosen with intention",
    copy: "Architecture, atmosphere, and a sense of place. A little inspiration for your next escape.",
    image: "villa",
  },
];
const stories = [
  {
    image: "town",
    title: "Take the scenic route",
    place: "Amalfi Coast, Italy",
    copy: "Pastel houses, slow lunches, and the sea around every corner. Some places make you want to stay a little longer.",
  },
  {
    image: "kyoto",
    title: "Make room for quiet",
    place: "Kyoto, Japan",
    copy: "A garden path. The warmth of timber. A morning with nowhere to rush. Discover a different rhythm.",
  },
  {
    image: "lake",
    title: "Wake up somewhere new",
    place: "Lake Como, Italy",
    copy: "Start the day with light on the water, and let the rest of it unfold at its own pace.",
  },
];
function Photo({
  name,
  alt,
  className = "",
}: {
  name: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      className={className}
      src={`/images/collection/${name}.webp`}
      alt={alt}
      fill
      sizes="(max-width:700px) 100vw, (max-width:1100px) 50vw, 440px"
      quality={90}
    />
  );
}
export function TravelSections() {
  const [active, setActive] = useState(1);
  const [story, setStory] = useState(0);
  const visibleApproach = [
    approach[(active + 2) % 3],
    approach[active],
    approach[(active + 1) % 3],
  ];
  return (
    <>
      <section
        id="about"
        className={`${styles.approach} section-wrap`}
        aria-labelledby="approach-title"
      >
        <h2 id="approach-title">
          The <span className={styles.scriptWord}>Avora</span> Approach
        </h2>
        <p className={styles.lead}>
          More than a room. A sense of place,
          <br />
          warm hospitality, and moments you’ll take home.
        </p>
        <div className={styles.approachGrid}>
          {visibleApproach.map((item, index) => (
            <article
              className={`${styles.approachCard} ${index === 1 ? styles.featured : ""}`}
              key={item.title}
            >
              <div className={styles.approachPhoto}>
                <Photo name={item.image} alt={item.title} />
              </div>
              <a
                href="#stays"
                aria-label={`Explore stays: ${item.title}`}
                className={styles.roundArrow}
              >
                ↗
              </a>
              <div className={styles.approachCopy}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Previous approach"
            onClick={() => setActive((active + 2) % 3)}
          >
            ‹
          </button>
          <span aria-live="polite">0{active + 1}</span>
          <span className={styles.track}>
            <i style={{ width: `${((active + 1) / 3) * 100}%` }} />
          </span>
          <span>03</span>
          <button
            type="button"
            aria-label="Next approach"
            onClick={() => setActive((active + 1) % 3)}
          >
            ›
          </button>
        </div>
      </section>
      <section
        id="stays"
        className={`${styles.collection} section-wrap`}
        aria-labelledby="stays-title"
      >
        <div className={styles.collectionHeading}>
          <h2 id="stays-title">
            <span className={styles.scriptWord}>Discover</span> a Spot
            <br />
            You’ll Love Hanging Out In
          </h2>
          <p>
            Explore places with a little more character.
            <br />
            Original imagery, imagined escapes, and real destinations to
            discover.
          </p>
        </div>
        <div className={styles.stayGrid}>
          {stays.map((item) => (
            <article className={styles.stayCard} key={item.image}>
              <div className={styles.stayPhoto}>
                <Photo name={item.image} alt={item.name} />
                <span className={styles.tag}>{item.tag}</span>
                <span className={styles.previewTag}>Travel inspiration</span>
              </div>
              <div className={styles.stayBody}>
                <span className={styles.location}>{item.location}</span>
                <h3>{item.name}</h3>
                <a
                  href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(item.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.stayLink}
                >
                  Explore available stays <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.caption}>
          An illustrated destination collection. Images are original
          AI-generated concepts; availability and rates are provided by the
          booking provider.
        </p>
      </section>
      <section className={styles.design} aria-labelledby="design-title">
        <Image
          src="/images/collection/villa.webp"
          alt="Contemporary white villa with palms and a wide garden beneath a clear blue sky"
          fill
          sizes="100vw"
          quality={90}
        />
        <div className={styles.designContent}>
          <h2 id="design-title">
            <span className={styles.scriptWord}>Designed</span> Around the
            <br />
            Way You Travel
          </h2>
          <p>
            From the first spark of inspiration to the place you make your own.
          </p>
          <div className={styles.designGrid}>
            <div className={styles.glass}>
              <strong>01</strong>
              <span>A sense of place</span>
            </div>
            <article>
              <Icon name="flower" />
              <h3>Exceptional by design</h3>
              <p>
                Places with character, thoughtful spaces, and a point of view.
              </p>
            </article>
            <div className={styles.gridSpace} />
            <article>
              <Icon name="compass" />
              <h3>On your own terms</h3>
              <p>
                Choose the setting, the pace, and the details that matter to
                you.
              </p>
            </article>
            <article>
              <Icon name="sun" />
              <h3>Your kind of comfort</h3>
              <p>Quiet mornings, familiar rituals, and space to settle in.</p>
            </article>
            <div className={styles.gridSpace} />
            <article>
              <Icon name="flower" />
              <h3>Travel with clarity</h3>
              <p>
                Check the details, compare your options, and book with care.
              </p>
            </article>
            <div className={styles.glass}>
              <strong>04</strong>
              <span>A little more possibility</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="service"
        className={`${styles.services} section-wrap`}
        aria-labelledby="services-title"
      >
        <h2 id="services-title">
          <span className={styles.scriptWord}>Everything</span> You Need
          <br />
          for an Extraordinary Journey
        </h2>
        {[
          {
            title: "Villas & private retreats",
            image: "hills",
            text: "Make room for a slower stay, with more privacy and space to spend time together.",
            query: "Provence villas",
          },
          {
            title: "Exceptional hotel stays",
            image: "villa",
            text: "Discover character-filled hotels and spaces that feel connected to their surroundings.",
            query: "Palm Springs hotels",
          },
          {
            title: "Destination discovery",
            image: "town",
            text: "Coastal towns, mountain mornings, and neighborhoods worth getting lost in. Find your next perspective.",
            query: "Amalfi Coast",
          },
          {
            title: "A different kind of escape",
            image: "lake",
            text: "Follow your curiosity. A weekend by the water can be the beginning of a new story.",
            query: "Lake Como",
          },
        ].map((item, index) => (
          <details
            key={item.title}
            className={styles.serviceRow}
            name="travel-services"
            open={index === 2}
          >
            <summary>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <div className={styles.servicePhoto}>
                <Photo name={item.image} alt={item.title} />
              </div>
              <span className={styles.servicePlus}>+</span>
            </summary>
            <div className={styles.serviceDetail}>
              <p>{item.text}</p>
              <a
                className="pill-button"
                href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(item.query)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore destination ↗
              </a>
            </div>
          </details>
        ))}
      </section>
      <section
        className={`${styles.journal} section-wrap`}
        aria-labelledby="journal-title"
      >
        <h2 id="journal-title">
          <span className={styles.scriptWord}>Every</span>
          <br />
          Journey Has a Story to Tell
        </h2>
        <p className={styles.lead}>A few places to begin your next chapter.</p>
        <div className={styles.storyStage}>
          <Photo name={stories[story].image} alt={stories[story].place} />
          <div className={styles.storyShade} />
          <button
            className={styles.storyPrevious}
            type="button"
            aria-label="Previous destination story"
            onClick={() => setStory((story + 2) % 3)}
          >
            ‹
          </button>
          <article className={styles.storyCard} aria-live="polite">
            <span>THE AVORA TRAVEL JOURNAL</span>
            <h3>{stories[story].title}</h3>
            <p>{stories[story].copy}</p>
            <strong>{stories[story].place}</strong>
          </article>
          <button
            className={styles.storyNext}
            type="button"
            aria-label="Next destination story"
            onClick={() => setStory((story + 1) % 3)}
          >
            ›
          </button>
          <div className={styles.storyTabs}>
            {stories.map((item, index) => (
              <button
                type="button"
                key={item.place}
                aria-pressed={story === index}
                onClick={() => setStory(index)}
              >
                {item.place}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
