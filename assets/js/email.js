{
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
      let data = {
        name: document.getElementById('form_name').value,
        email: document.getElementById('form_email').value,
        subject: document.getElementById('subject_mail').value,
        text: document.getElementById('message_text').value,
      }
      let dataString = JSON.stringify(data)
      console.log(data, typeof data)
      console.log(dataString, typeof dataString)
      
    } catch (error) {
      console.log({ err: error.message })
    }
  })
}
