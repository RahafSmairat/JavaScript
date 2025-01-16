        ///// JSON File /////
        function getJsonData() {
            fetch('users.json')
                .then(response => response.json())
                .then(data => {
                    for (const index in data) {
                        const userCard = document.createElement('div');
                        userCard.innerHTML = `<b>Name:</b> ${data[index].userName} <br><br>
                                          <b>Age:</b> ${data[index].age} <br><br>
                                          <b>Email:</b> ${data[index].email} <br><br>
                                          <b>Profission:</b> ${data[index].profession}`;
                        jsonCardsContainer.appendChild(userCard);
                    }
                })
        }

        ///// API /////
        async function getApiData() {
            const response = await fetch('https://api.npoint.io/8ae3a8790e8571bb89a7');
            const data = await response.json();
            console.log(data);
            for (const index in data) {
                const userCard = document.createElement('div');
                userCard.innerHTML = `<b>Name:</b> ${data[index].userName} <br><br>
                                          <b>Age:</b> ${data[index].age} <br><br>
                                          <b>Email:</b> ${data[index].email} <br><br>
                                          <b>Profission:</b> ${data[index].profession}`;
                apiCardsContainer.appendChild(userCard);
            }
        }