const host = 'localhost';
const port = '3000';
export class Address {
    static get() {
        return {
            baseUrl:`http://${host}:${port}/`
        };
    }
}
