import express, { Application, urlencoded } from 'express';
import IndexRoutes from './routes/index.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import morgan from 'morgan';

export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.documentation();
        this.middlewares();
        this.routes();
    }

    settings(): void {
        this.app.set('port', this.port || 3000);
    }
    
    routes(): void {
        this.app.use(IndexRoutes);
    }
    
    middlewares(): void {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(urlencoded({extended: false}))
    }

    documentation(): void {
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    async listen(): Promise<void>{
        await this.app.listen(this.app.get('port'));
        console.log(`Server running on port ${this.app.get('port')}`)
    }
}