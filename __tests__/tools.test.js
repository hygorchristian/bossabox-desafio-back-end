/* eslint-disable no-undef */

const request = require('supertest')
const server = require('../src/server')
const UserController = require('../src/app/controllers/UserController')

const email = 'hygor.christian@gmail.com'
const password = '123456'

beforeAll(async () => {
  UserController.destroy(email)
})

afterAll(done => {
  done()
})

describe('Testing the tools paths', () => {
  let id = 0
  let token = ''

  test('It should response 200 for POST /users', done => {
    request(server)
      .post('/users')
      .send({ name: 'Hygor Christian', email, password })
      .expect(200)
      .end((err, res) => {
        if (err) done(err)
        done()
      })
  })

  test('It should response the token for POST /login', done => {
    request(server)
      .post('/login')
      .send({ email, password })
      .expect(200)
      .end((err, res) => {
        if (err) done(err)
        token = res.body.token
        done()
      })
  })

  test('It should get status 200 for the method POST /tools', done => {
    request(server)
      .post('/tools')
      .send({
        title: 'hotel',
        link: 'https://github.com/typicode/hotel',
        description:
          'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
        tags: [
          'node',
          'organizing',
          'webapps',
          'domain',
          'developer',
          'https',
          'proxy'
        ]
      })
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        id = res.body._id
        done()
      })
  })

  test('It should response the method GET /tools', done => {
    request(server)
      .get('/tools')
      .expect(200)
      .end((err, res) => {
        if (err) done(err)
        done()
      })
  })

  test('It should get status 405 for the method POST /tools', done => {
    request(server)
      .post('/tools')
      .send({
        title: 'hotel',
        link: 'https://github.com/typicode/hotel'
      })
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(405)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })

  test('It should get status 200 for the method GET /tools/:id', done => {
    request(server)
      .get(`/tools/${id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })

  test('It should get status 200 for the method PUT /tools/:id', done => {
    request(server)
      .put(`/tools/${id}`)
      .send({
        title: 'hotel',
        link: 'https://github.com/typicode/hotel'
      })
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })

  test('It should get status 404 for the method PUT /tools/12321', done => {
    request(server)
      .put(`/tools/12321`)
      .send({
        title: 'hotel',
        link: 'https://github.com/typicode/hotel'
      })
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })

  test('It should get status 200 for the method DELETE /tools/:id', done => {
    request(server)
      .delete(`/tools/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })

  test('It should get status 404 for the method DELETE /tools/12321', done => {
    request(server)
      .delete(`/tools/12321`)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })
})
