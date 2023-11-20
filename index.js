// Add your code here

function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      const newId = data.id;
    
      document.body.append(newId)
      
    })
   
    .catch(function (error) {
        const errorMessage = error.message
        document.body.append(errorMessage)
        console.log(error.message);
      });



  }
  