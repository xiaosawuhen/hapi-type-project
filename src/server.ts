import * as Hapi from '@hapi/hapi';
import * as DotEnv from 'dotenv';

export default class Server {
    private static _instance: Hapi.Server;

    public static async start(): Promise<Hapi.Server> {
        try {
            DotEnv.config({
                path: `${process.cwd()}/.env`,
            });

            Server._instance = new Hapi.Server({
                port: process.env.PORT,
            });

            await Server._instance.start();

            Server._instance.route([
                {
                    method: 'GET',
                    path: '/',
                    options: {
                        handler: (request, h) => {
                            return 'Hello Worldwerwer!';
                        },
                        description: 'Method that creates a new user.',
                        tags: ['api', 'users'],
                        auth: false,
                    },
                },
            ]);

            return Server._instance;
        } catch (error) {
            throw error;
        }
    }

    public static stop(): Promise<Error | void> {
        return Server._instance.stop();
    }
}
