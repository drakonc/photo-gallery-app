import { connect } from 'mongoose';

export async function startConeccion() {
    await connect('mongodb://localhost/photo-gallery-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('DB Conectada')
}