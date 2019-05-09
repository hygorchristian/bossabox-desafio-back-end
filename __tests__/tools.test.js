/* eslint-disable no-undef */

const request = require('supertest')
const server = require('../src/server')

beforeAll(async () => {
  console.log('Jest starting!')
})

afterAll(done => {
  done()
})

describe('Testing the tools path', () => {
  let id = 0

  test('It should response the method GET /tools', done => {
    request(server)
      .get('/tools')
      .expect(200)
      .end((err, res) => {
        if (err) done(err)
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
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        id = res.body._id
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
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })
})
