function getFhirData() {
    const clientId = document.querySelector('input').value;
    console.log(clientId);
    FHIR.oauth2.authorize({
      'client_id': clientId,
      'scope': 'user/Patient.read user/Practitioner.read launch openid profile offline_access fhirUser',
      'redirect_uri': 'https://vineethjagannathan.github.io/smart-on-fhir-sample-appz/app.html'
    });
  }
  
