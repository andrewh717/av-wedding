const scriptURL = 'https://script.google.com/macros/s/AKfycbzYM3D-VZDfpc7Y2W0mb-aGJzXcA5MErQ63NCE3ROjhTKi8_-6i/exec'
  const form = document.forms['rsvp-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })