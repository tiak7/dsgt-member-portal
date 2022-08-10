import React, { FC } from "react";
import FlexColumn from "../../layout/FlexColumn/FlexColumn";
import styles from "./EventCard.module.scss";

interface EventCardProps {
  name?: string;
  location?: string;
  shortDescription?: string;
  longDescription?: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  imageSRC?: string;
  big?: boolean;
  sticky?: boolean;
  link?: string;
}

const EventCard: FC<EventCardProps> = ({
  name,
  location,
  shortDescription,
  longDescription,
  startDate,
  startTime,
  endDate,
  endTime,
  imageSRC,
  big,
  sticky,
  link,
}: EventCardProps) => {
  const format_month = "short";
  const format_day = "numeric";
  const format_hour = "numeric";
  const format_minute = "numeric";

  let leftDate = [];
  let sameYear = false;
  if (startDate && endDate) {
    let sd = new Date(startDate);
    let ed = new Date(endDate);
    let now = new Date();
    if (
      sd.getFullYear() === now.getFullYear() &&
      sd.getFullYear() === ed.getFullYear()
    ) {
      sameYear = true;
    }
  } else if (startDate) {
    let sd = new Date(startDate);
    let now = new Date();
    if (sd.getFullYear() === now.getFullYear()) {
      sameYear = true;
    }
  } else if (endDate) {
    let ed = new Date(endDate);
    let now = new Date();
    if (ed.getFullYear() === now.getFullYear()) {
      sameYear = true;
    }
  }

  if (startDate && startTime) {
    let d = new Date(`${startDate} ${startTime}`);
    if (sameYear) {
      leftDate.push(
        d.toLocaleDateString("en-us", { month: format_month, day: format_day })
      );
    } else {
      leftDate.push(d.toLocaleDateString("en-us"));
    }

    leftDate.push(
      d.toLocaleTimeString("en-us", {
        hour: format_hour,
        minute: format_minute,
      })
    );
  } else if (startDate) {
    let sd = new Date(`${startDate} 12:00`);
    if (sameYear) {
      leftDate.push(
        sd.toLocaleDateString("en-us", { month: format_month, day: format_day })
      );
    } else {
      leftDate.push(sd.toLocaleDateString("en-us"));
    }
  }
  // } else if (startTime) {
  //   let st = new Date(startTime);
  //   leftDate.push(st.toLocaleTimeString("en-us"));
  // }
  let rightDate = [];
  if (endDate && endTime) {
    let d = new Date(`${endDate} ${endTime}`);
    if (sameYear) {
      rightDate.push(
        d.toLocaleDateString("en-us", { month: format_month, day: format_day })
      );
    } else {
      rightDate.push(d.toLocaleDateString("en-us"));
    }
    rightDate.push(
      d.toLocaleTimeString("en-us", {
        hour: format_hour,
        minute: format_minute,
      })
    );
  } else if (endDate) {
    let ed = new Date(`${endDate} 12:00`);
    if (sameYear) {
      rightDate.push(
        ed.toLocaleDateString("en-us", { month: format_month, day: format_day })
      );
    } else {
      rightDate.push(ed.toLocaleDateString("en-us"));
    }
  }
  let datetime = "";
  const joinSymbol = ", ";
  if (leftDate.length && rightDate.length) {
    datetime = `${leftDate.join(joinSymbol)} to ${rightDate.join(joinSymbol)}`;
  } else if (leftDate.length) {
    datetime = leftDate.join(joinSymbol);
  } else if (rightDate.length) {
    datetime = rightDate.join(joinSymbol);
  }

  let desc = "Event Description 1";

  if (big) {
    if (longDescription) {
      desc = longDescription;
    } else if (shortDescription) {
      desc = shortDescription;
    }
  } else if (shortDescription) {
    desc = shortDescription;
  }

  return (
    <div
      className={`${styles.EventCard} ${big ? styles.BigEventCard : ""} ${
        sticky ? styles.StickyEventCard : ""
      }`}
      data-testid="EventCard"
    >
      <div
        className={`${styles.Image}`}
        style={{ backgroundImage: `url(${imageSRC})` }}
      >
        {/* <img src={imageSRC} alt={name} /> */}
      </div>
      <div className={styles.Content}>
        <FlexColumn height="100%" wrap="nowrap">
          <p className={styles.When}>{datetime}</p>
          <p className={styles.Location}>{location}</p>
          <h1 className={styles.Major}>{name ? name : "Event Name"}</h1>
          <p className={styles.Description}>{desc}</p>
          {link ? (
            <a
              className={styles.Link}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          ) : (
            ""
          )}
        </FlexColumn>
      </div>
    </div>
  );
};

export default EventCard;
