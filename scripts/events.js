// content of events.js
export function renderEvents(events) {
    return events.map((event) => {
        return `
        <li class="events__list-item">
          <div class="events__img">
            ${event.online ? '<div class="events__online">Online Event</div>' : ''}
            <img src="${event.image}" alt="${event.title}" />
          </div>
          <div class="events__text">
            <p class="events__date--mobile">${event.data}</p>
            <h3 class="events__title">${event.title}</h3>
            <div class="events__location">${event.topic} ${event.distance}</div>
            <p class="events__date--desktop">${event.data}</p>
          </div>
          <div class="events__status--desktop">
            <div>${event.attendee} going</div>
            <div>${event.price}</div>
          </div>
        </li>
      `;
    }).join('');
}

export function formatDate(date) {
    const newDate = new Date(date);
    const optionsDays = {
        weekday: "short",
        month: "short",
        day: "2-digit",
    };
    const optionsHours = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC",
        timeZoneName: "short",
    };
    const formattedDays = new Intl.DateTimeFormat("en-US", optionsDays).format(newDate);
    const formattedHours = new Intl.DateTimeFormat("en-US", optionsHours).format(newDate);
    return `${formattedDays} · ${formattedHours}`;
}

export function createEvent(events, container) {
    container.innerHTML = events.map(event => `
      <a class="all-events-link" href="#">
        <div class="all-events-img-box">
          <img class="all-events-img" src="${event.image}" alt="Event image">
        </div>
        <div class="all-events-info">
          <p class="all-events-date">${formatDate(event.date)}</p>
          <h3 class="all-events-header">${event.title}</h3>
          <p class="all-events-category">${event.category}</p>
          ${event.attendees ? `<p class="all-events-attendees">${event.attendees} attendees</p>` : ""}
        </div>
      </a>
    `).join('');
}

export function clearEvents(container) {
    container.innerHTML = "";
}

export function filterEvents(events, type, distance, category) {
    let filteredEvents = [...events];
    if (type) filteredEvents = filteredEvents.filter(event => event.type === type);
    if (distance) filteredEvents = filteredEvents.filter(event => event.distance === parseInt(distance, 10));
    if (category) filteredEvents = filteredEvents.filter(event => event.category === category);
    return filteredEvents;
}
