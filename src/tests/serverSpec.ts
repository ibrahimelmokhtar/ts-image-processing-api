import supertest from 'supertest';
import { app } from '../server/config';


const req = supertest(app);

describe('Server Endpoints Suite', () => {
    it('gets /api/resize response after applying resize operation', async () => {
        const res = await req.get('/api/resize?filename=santamonica&width=200&height=500');
        expect(res.status).toBe(200);
    });

    it('gets /api/resize response from cache memory', async () => {
        const res = await req.get('/api/resize?filename=santamonica&width=200&height=500');
        expect(res.status).toBe(200);

    });

    it('gets /api/resize response for an image that does NOT exist', async () => {
        const res = await req.get('/api/resize?filename=anyOtherNameThatDoesNotExist&width=100&height=100');
        expect(res.status).toBe(400);
    });
});
