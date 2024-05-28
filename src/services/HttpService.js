const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const searchPastEvents = async () => {
  const strapiResponse = await ((await fetch(`${API_URL}/past-events?populate=image`, { method: 'GET' })).json());
  const response = [];
  const events = strapiResponse.data;
  events.map((event) => {
    if (event) {
      const { id, attributes } = event;
      const { name, year, image } = attributes;
      const url = `https://strapi.glud.org${image.data.attributes.url}`;
      response.push({ id, name, year, image: url })
    }
  })
  return response;
}

export const searchSponsors = async () => {
  const strapiResponse = await ((await fetch(`${API_URL}/sponsors?populate=image`, { method: 'GET' })).json());
  const response = [];
  const sponsors = strapiResponse.data;
  sponsors.map((sponsor) => {
    if (sponsor) {
      const { id, attributes } = sponsor;
      const { name, topic } = attributes;
      const url = `https://strapi.glud.org${sponsor.attributes.image.data.attributes.url}`;
      response.push({ id, name, topic, url });
    }
  });
  return response;
}

export const searchSpeakers = async () => {
  const response = [];
  const strapiResponse = await ((await fetch(`${API_URL}/speakers?populate=image`, { method: 'GET' })).json());
  const speakers = strapiResponse.data;
  speakers.map((speaker) => {
    if (speaker) {
      const { attributes, id } = speaker;
      const { full_name, degree, alias, contact, email, typeOfIdentifier, identifier, image } = attributes;
      let url = '';
      if (image.data !== null) {
        url = `https://strapi.glud.org${image.data.attributes.url}`;
      }
      response.push(
        {
          id,
          full_name,
          alias,
          contact,
          email,
          typeOfIdentifier,
          identifier,
          url,
          degree
        }
      );
    }
  });
  return response;
}

export const searchConferences = async () => {
  const strapiResponse = await ((await fetch(`${API_URL}/conferences?sort=date`, { method: 'GET' })).json());
  const response = [];
  const conferences = strapiResponse.data;
  conferences.map((conference) => {
    if (conference) {
      const { id, attributes } = conference;
      const { name, description, date, link } = attributes;
      response.push({ id, name, description, date, link });
    }
  })
  return response;
}