import { Aplication } from './app/app';
import { startConeccion } from './app/Configurations/database';

async function main() {
    startConeccion();
    const app = new Aplication(3000);
    await app.Run();
}

main()