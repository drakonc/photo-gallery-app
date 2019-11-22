import { Aplication } from './app/app';

async function main() {
    const app = new Aplication(3000);
    await app.Run();
}

main()