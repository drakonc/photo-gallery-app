import { connect } from 'mongoose';

export async function startConeccion() {
    await connect('mongodb://localhost/photo-gallery-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('DB Conectada')
}