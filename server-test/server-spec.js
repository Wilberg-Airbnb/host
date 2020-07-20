'use strict'

// const app = require('../server/app.js')
const {generateHosts} = require('../database-mongodb/data.js');

const chai = require('chai');
const chaiHttp = require("chai-http");
const { expect } = chai;
const should = chai.should();

//Unit Test
describe('Generate Unique listingIds', function () {
  it('should return 100 unique listingIds', function (done) {
    let hosts = generateHosts();
    let listingIds = hosts.reduce( (accumulator, current) => {
          return accumulator.concat(current.listingId);
      }, []);
    let unqiueListingIds = [...new Set(listingIds)];
    expect(listingIds.length).to.equal(100);
    expect(unqiueListingIds.length).to.equal(100);
    done();
  });
});

//Integration Test

let server;
chai.use(chaiHttp);
describe("API Get Request", () => {
  
  it("Response is an object", done => {
    chai
      .request('http://localhost:2000')
      .get('/api/host/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('listingId');
        res.body.should.have.property('hostId')
        done();
      });
  });


});


// describe('Unique listingIds', function () {
//   it('should return 100 unique listingIds', function (done) {
//     db.Host.find({})
//     .then((results) => {
//       return results.reduce( (accumulator, current) => {
//           return accumulator.concat(current.listingId);
//       }, []);
//     })
//     .then( (listingIds) => {
//       var unqiueListingIds = [...new Set(listingIds)];
//       expect(listingIds.length).to.equal(100);
//       expect(unqiueListingIds.length).to.equal(100);
//       done();
//     })
//     .catch(done);
//   });
// });