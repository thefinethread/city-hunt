const supertest = require('supertest');
const app = require('../index');
const { setFugitiveLocation } = require('../controller/app.controller');

jest.mock('../controller/app.controller', () => ({
  ...jest.requireActual('../controller/app.controller'),
  vehiclesRange: { evSuv: 120 },
  cityDistance: { yapkashnagar: 60 },
}));

describe('App', () => {
  describe('get app data', () => {
    it('should return app data', async () => {
      const { statusCode } = await supertest(app).get('/api/app-data');

      expect(statusCode).toBe(200);
    });
  });

  describe('set Fugitive Location', () => {
    it('should set Fugitive Location and return 200 status', async () => {
      const { statusCode, body } = await supertest(app).post('/api/reset-game');

      expect(statusCode).toBe(200);
      expect(body.success).toBe('OK');
    });
  });

  describe('POST /result', () => {
    beforeEach(() => {
      setFugitiveLocation(
        {
          body: {},
        },
        {
          status: jest.fn(() => ({ json: jest.fn() })),
        }
      );

      jest.clearAllMocks();
    });

    it('should return success and cop name if a cop is in the fugitive location and has enough range', async () => {
      const copPayload = {
        cop1: { city: 'yapkashnagar', vehicle: 'evSuv' },
      };

      const response = await supertest(app)
        .post('/api/result')
        .send(copPayload);

      expect(response.status).toBe(200);
    });

    it('should  return success false if none of the cop is in the fugitive location', async () => {
      const copPayload = {
        cop2: { city: 'lihaspur', vehicle: 'evBike' },
      };

      const response = await supertest(app)
        .post('/api/result')
        .send(copPayload);

      expect(response.status).toBe(200);
    });
  });
});
