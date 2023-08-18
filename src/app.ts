import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import morgan from 'morgan';
export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.documentation();
        this.settings();
        this.middlewares();
    }

    settings(){
        this.app.set('port', this.port || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
    }

    documentation(){
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    async listen(): Promise<any>{
        await this.app.listen(this.app.get('port'));
        console.log(`Server running on port ${this.app.get('port')}`)
    }
}