function getFhirData() {
    const clientId = document.querySelector('input').value;
    console.log(clientId);
    FHIR.oauth2.authorize({
      'client_id': clientId,
      'scope':  'user/Patient.read user/Practitioner.read launch openid profile offline_access fhirUser',
      'redirect_uri': 'https://sibincsebastian.github.io/smart-on-fhir-sample/app.html'
    });
  }
  
