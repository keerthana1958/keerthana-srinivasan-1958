describe(' API Automation', () => {
    const baseUrl = 'https://restful-booker.herokuapp.com'
    let token
    let bookingId
  
    it(' auth token', () => {
      cy.request('POST', `${baseUrl}/auth`, {
        username: 'admin',
        password: 'password123'
      }).then((response) => {
        expect(response.status).to.eq(200)
        token = response.body.token
      })
    })
  
    it(' new booking', () => {
      cy.request('POST', `${baseUrl}/booking`, {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 123,
        depositpaid: true,
        bookingdates: {
          checkin: '2025-03-03',
          checkout: '2025-03-10'
        },
        additionalneeds: 'Breakfast'
      }).then((response) => {
        expect(response.status).to.eq(200)
        bookingId = response.body.bookingid
      })
    })
  
    it('get the created booking', () => {
      cy.request('GET', `${baseUrl}/booking/${bookingId}`).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('firstname', 'John')
        expect(response.body).to.have.property('lastname', 'Doe')
      })
    })
  
    it('partially update the booking', () => {
      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/booking/${bookingId}`,
        headers: {
          Cookie: `token=${token}`
        },
        body: {
          firstname: 'Jane'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('firstname', 'Jane')
      })
    })
  
    it('Delete the booking', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/booking/${bookingId}`,
        headers: {
          Cookie: `token=${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
      })
    })
  })