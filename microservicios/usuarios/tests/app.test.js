const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/db');

afterAll(async () => {
    await pool.end();
});

test('GET /health debe responder correctamente', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.servicio).toBe('usuarios');
});

test('POST /usuarios debe rechazar solicitudes sin nombre o email', async () => {
    const response = await request(app)
        .post('/usuarios')
        .send({ rol: 'Turista' }); // Enviamos datos incompletos a propósito
    
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Nombre y email son obligatorios');
});
