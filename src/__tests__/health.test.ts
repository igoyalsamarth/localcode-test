import request from 'supertest';
import app from '../app';
import { version } from '../../package.json';

describe('Health Check Route', () => {
  describe('GET /health', () => {
    it('should return status 200', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
    });

    it('should return healthy status', async () => {
      const response = await request(app).get('/health');
      expect(response.body.status).toBe('healthy');
    });

    it('should return a valid ISO timestamp', async () => {
      const response = await request(app).get('/health');
      expect(response.body.timestamp).toBeDefined();
      
      // Verify it's a valid ISO 8601 date string
      const timestamp = new Date(response.body.timestamp);
      expect(timestamp.toISOString()).toBe(response.body.timestamp);
    });

    it('should return JSON content type', async () => {
      const response = await request(app).get('/health');
      expect(response.headers['content-type']).toMatch(/json/);
    });

    it('should return the correct version', async () => {
      const response = await request(app).get('/health');
      expect(response.body.version).toBe(`v${version}`);
    });
  });
});
