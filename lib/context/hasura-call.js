export async function addNewSpotlight(key, receivedObject) {
  //Use simple verify
  const ver_response = await fetch('/api/simpleVerify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key }),
  });

  const verdata = await ver_response.json();

  //Check if verify is good
  if (ver_response.ok) {
    if (verdata.success) {
      console.log('User is verified.');
      //Post Data if verified
      const response = await fetch('/api/advocatespotlight', {
        method: 'POST',
        body: JSON.stringify(receivedObject),

        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      return data;
    }
  } else {
    return {};
  }
}

export async function getSpotlight() {
  //get spotlight data
  console.log('fetching dataa');
  try {
    const response = await fetch('/api/getSpotlight', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log('Error: ' + err);
  }
}
