import WebServer from './web_server'

describe('Started', () => {
    let webServer = null

    beforeAll(() => {
        webServer = new WebServer()
    })

    test('should start the server and trigger a callback', async () => {
        let promise = webServer.start()
        await expect(promise).resolves.toBeUndefined()
    })

    test('should stop the server and trigger a callback', async () => {
        let promise = webServer.stop()
        await expect(promise).resolves.toBeUndefined()
    })
})

