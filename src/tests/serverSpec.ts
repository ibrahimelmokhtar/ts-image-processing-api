import supertest from 'supertest';
import { app } from '../server/server.config';

const req = supertest(app);

describe('Server Endpoints Suites', () => {
	describe('Resize Route Suite', () => {
		it('gets /api/resize response after applying resize operation', async () => {
			const res = await req.get(
				'/api/resize?filename=santamonica&width=200&height=500'
			);
			expect(res.status).toBe(200);
		});

		it('gets /api/resize response from cache memory', async () => {
			const res = await req.get(
				'/api/resize?filename=santamonica&width=200&height=500'
			);
			expect(res.status).toBe(200);
		});

		it('gets /api/resize response for an image that does NOT exist', async () => {
			const res = await req.get(
				'/api/resize?filename=anyOtherNameThatDoesNotExist&width=100&height=100'
			);
			expect(res.status).toBe(400);
		});
	});

	describe('Grayscale Route Suite', () => {
		it('gets /api/grayscale response after applying grayscale operation', async () => {
			const res = await req.get('/api/grayscale?filename=santamonica');
			expect(res.status).toBe(200);
		});

		it('gets /api/grayscale response from cache memory', async () => {
			const res = await req.get('/api/grayscale?filename=santamonica');
			expect(res.status).toBe(200);
		});

		it('gets /api/grayscale response for an image that does NOT exist', async () => {
			const res = await req.get(
				'/api/grayscale?filename=anyOtherNameThatDoesNotExist'
			);
			expect(res.status).toBe(400);
		});
	});

	describe('Threshold Route Suite', () => {
		it('gets /api/threshold response after applying grayscale operation', async () => {
			const res = await req.get(
				'/api/threshold?filename=santamonica&threshold=150'
			);
			expect(res.status).toBe(200);
		});

		it('gets /api/threshold response from cache memory', async () => {
			const res = await req.get(
				'/api/threshold?filename=santamonica&threshold=150'
			);
			expect(res.status).toBe(200);
		});

		it('gets /api/threshold response for an image that does NOT exist', async () => {
			const res = await req.get(
				'/api/threshold?filename=anyOtherNameThatDoesNotExist&threshold=255'
			);
			expect(res.status).toBe(400);
		});
	});

	describe('Negative Route Suite', () => {
		it('gets /api/negative response after applying negative operation', async () => {
			const res = await req.get('/api/negative?filename=santamonica');
			expect(res.status).toBe(200);
		});

		it('gets /api/negative response from cache memory', async () => {
			const res = await req.get('/api/negative?filename=santamonica');
			expect(res.status).toBe(200);
		});

		it('gets /api/negative response for an image that does NOT exist', async () => {
			const res = await req.get(
				'/api/negative?filename=anyOtherNameThatDoesNotExist'
			);
			expect(res.status).toBe(400);
		});
	});
});
