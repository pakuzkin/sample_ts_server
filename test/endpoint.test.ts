import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../src/index';

chai.use(chaiHttp);

describe('Endpoint tests', () => {
    it('Ping endpoint should return status 200', (done) => {
        const msg = "hello";
        chai.request(app)
            .get('/ping')
            .query({
                "message": msg
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.have.property("env", "TEST")
                chai.expect(res.body).to.have.property("version", "1.0.0")
                done();
            });
    });
});
