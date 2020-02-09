const app = require('../app.js');
const request = require('supertest');

const supertest = request(app);

describe('ENDPOINT /api/list', ()=>{

    it('get (200) + expect array', (done)=>{
        supertest.get('/api/list')
        .set({'authorization': 'xyz0987654321'})
            .then((res)=>{
                const body = res.body;
                expect(body).toBeInstanceOf(Array);

                done();
            })
            .catch((err)=>{
                done(err);
            });
    });

    it('get (401) - bad auth token', (done)=>{
        supertest.get('/api/list')
        .set({'authorization': 'xy...'})
            .then((res)=>{

                expect(res.status).toBe(401);

                done();
            })
            .catch((err)=>{
                done(err);
            });
    });

    it('post (200) + encode string', (done)=>{
        supertest.post('/api/list')
        .set({'authorization': 'xyz0987654321'})
            .send({ text: 'qqqqQQQQ'})
            .then((res)=>{
                const body = res.body;
                expect(body['text']).toBe('q4Q4');

                done();
            })
            .catch((err)=>{
                done(err);
            });
    });

    it('post (401) - bad auth token', (done)=>{
        supertest.post('/api/list')
            .send({ text: ''})
            .set({'authorization': 'xy...'})
            .then((res)=>{

                expect(res.status).toBe(401);

                done();
            })
            .catch((err)=>{
                done(err);
            });
    });

    it('delete (200)', (done)=>{
        supertest.delete('/api/list/1')
            .set({'authorization': 'xyz0987654321'})
            .then((res)=>{

                expect(res.status).toBe(200);

                done();
            })
            .catch((err)=>{
                done(err);
            });
    });
    
    it('delete (401) - bad auth token', (done)=>{
        supertest.delete('/api/list/1')
            .set({'authorization': 'xy...'})
            .then((res)=>{

                expect(res.status).toBe(401);

                done();
            })
            .catch((err)=>{
                done(err);
            });
    });
});

describe('ENDPOINT /login', ()=>{

    it('post (200) - valid credentials', (done)=>{
        supertest.post('/login')
        .send({ email: 'optimus.prime@autobots.com', password: 'validPassword1234!' })
            .then((res)=>{

                const token = res.body.token;
                expect(token).toBe('xyz0987654321');

                done();
            })
            .catch((err)=>{
                done(err);
            });
    });

    it('post (401) - invalid credentials', (done)=>{
        supertest.post('/login')
        .send({ email: 'bumble.bee@autobots.com', password: 'wheeeee!' })
            .then((res)=>{

                expect(res.status).toBe(401);

                done();
            })
            .catch((err)=>{
                done(err);
            });
    });
});