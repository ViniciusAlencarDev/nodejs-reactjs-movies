import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import './database/connection';
import Routes from './routes';
import swaggerFile from './docs/swagger.json';
import Movie from './App/Models/Movie';
import baseURL from './modules/axios';
import cors from 'cors';

class Server {

    private app: Express;

    constructor() {
        this.app = express();
        this.bootstrap();
        this.routes();
        this.documentation();
    }

    async loadData() {
        try {
            await Movie.remove();

            const limit = 50;

            const { data } = await baseURL.get('/films');
            data.slice(0, limit).map(async (item: any) => {
                await Movie.create({
                    title: item.title,
                    description: item.description,
                    director: item.director,
                    producer: item.producer
                });
            })
        } catch (error) {
            console.log('Error', error);
        }
    }

    bootstrap() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(Routes);
    }

    documentation() {
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
    }

    getApp(): Express {
        return this.app;
    }

}

export default Server;
