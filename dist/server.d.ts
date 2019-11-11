import * as Hapi from '@hapi/hapi';
export default class Server {
    private static _instance;
    static start(): Promise<Hapi.Server>;
    static stop(): Promise<Error | void>;
}
