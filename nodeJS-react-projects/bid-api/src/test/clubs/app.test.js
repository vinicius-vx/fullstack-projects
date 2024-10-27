/* global describe,it,afterEach */
const { expect } = require('chai');
const nock = require('nock');
const sinon = require('sinon');
const clubsModel = require('../../models/clubs/clubsModel');
const clubsControllers = require('../../controllers/clubs/clubsControllers');

describe('Units tests clubs', () => {
  afterEach(() => {    
    sinon.restore();
    nock.cleanAll();
  });

  it('Get clubs success', async () => {
    const fakeApiResponse = [
      {
        id: 1,
        name: 'Sem Clube',
        uf: 'SP',
        created_at: '2024-01-29T03:23:03.631Z',
        updated_at: null
      },
      {
        id: 2,
        name: 'Ituano FC',
        uf: 'SP',
        created_at: '2024-01-29T02:12:29.425Z',
        updated_at: null
      },
    ];

    nock('https://clubs-api-fake.personal-svcs.com')
      .get('/clubs')
      .reply(200, fakeApiResponse);

    sinon.stub(clubsModel, 'getAll').resolves(fakeApiResponse);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await clubsControllers.getAll(null, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(fakeApiResponse)).to.be.true;
  });

  it('Get club by id success', async () => {
    const fakeApiResponse = [
      {
        id: 1,
        name: 'Sem Clube',
        uf: 'SP',
        created_at: '2024-01-29T03:23:03.631Z',
        updated_at: null
      }
    ];

    nock('https://clubs-api-fake.personal-svcs.com')
      .get('/clubs/:id')
      .query({
        id: '1'
      })
      .reply(200, fakeApiResponse);

    sinon.stub(clubsModel, 'getById').resolves(fakeApiResponse);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await clubsControllers.getById({ params: { id: '1' } }, res);
   
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(fakeApiResponse)).to.be.true;
  });

  it('Should return an error when a club is not found', async () => {
    const fakeApiResponse = [
      {
        message: 'Club not found',
      }
    ];

    nock('https://clubs-api-fake.personal-svcs.com')
      .get('/clubs/:id')
      .query({
        id: '140'
      })
      .reply(404, fakeApiResponse);

    sinon.stub(clubsModel, 'getById').resolves(fakeApiResponse);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await clubsControllers.getById({ params: { id: '140' } }, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(fakeApiResponse)).to.be.true;
  });
});