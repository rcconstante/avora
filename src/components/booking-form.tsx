"use client";
import { useState, useSyncExternalStore } from "react";
import { Icon } from "./icon";
function dateString(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function tomorrow(value: string) {
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() + 1);
  return dateString(date);
}
const subscribe = () => () => {};
const getToday = () => dateString(new Date());
const getServerToday = () => "";
export function BookingForm() {
  const today = useSyncExternalStore(subscribe, getToday, getServerToday);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [error, setError] = useState("");
  return (
    <form
      className="booking-form"
      action="https://www.booking.com/searchresults.html"
      method="get"
      target="_blank"
      rel="noopener noreferrer"
      onSubmit={(event) => {
        const data = new FormData(event.currentTarget);
        const destination = String(data.get("ss") ?? "").trim();
        const arrival = String(data.get("checkin") ?? "");
        const departure = String(data.get("checkout") ?? "");
        if (
          destination.length < 2 ||
          arrival < dateString(new Date()) ||
          departure <= arrival
        ) {
          event.preventDefault();
          setError(
            "Choose a destination and future dates. Check-out must be after check-in.",
          );
        } else setError("");
      }}
    >
      <div className="booking-grid">
        <label className="booking-field">
          Location
          <div className="input-wrap">
            <input
              name="ss"
              aria-label="Location"
              placeholder="Where would you like to go?"
              defaultValue="Palm Springs, California"
              required
              minLength={2}
              maxLength={100}
            />
            <span className="field-icon yellow">
              <Icon name="pin" />
            </span>
          </div>
        </label>
        <label className="booking-field">
          Guest
          <div className="input-wrap">
            <select name="group_adults" aria-label="Guests" defaultValue="3">
              {Array.from({ length: 12 }, (_, i) => (
                <option value={i + 1} key={i}>
                  {i + 1} {i === 0 ? "Person" : "People"}
                </option>
              ))}
            </select>
            <span className="field-icon blue">
              <Icon name="guests" />
            </span>
          </div>
        </label>
        <label className="booking-field">
          Check In
          <div className="input-wrap">
            <input
              type="date"
              name="checkin"
              aria-label="Check in"
              value={checkin}
              min={today || undefined}
              onInput={(event) => {
                const value = event.currentTarget.value;
                setCheckin(value);
                if (checkout && checkout <= value) setCheckout(tomorrow(value));
              }}
              required
            />
            <span className="field-icon lavender">
              <Icon name="calendar" />
            </span>
          </div>
        </label>
        <label className="booking-field">
          Check Out
          <div className="input-wrap">
            <input
              type="date"
              name="checkout"
              aria-label="Check out"
              value={checkout}
              min={
                checkin
                  ? tomorrow(checkin)
                  : today
                    ? tomorrow(today)
                    : undefined
              }
              onInput={(event) => setCheckout(event.currentTarget.value)}
              required
            />
            <span className="field-icon green">
              <Icon name="calendar" />
            </span>
          </div>
        </label>
      </div>
      <input type="hidden" name="no_rooms" value="1" />
      <input type="hidden" name="group_children" value="0" />
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button className="search-button" type="submit">
        SEARCH HOTEL
      </button>
      <p className="booking-note">Explore availability on Booking.com ↗</p>
    </form>
  );
}
