import rewire from "rewire"
const run = rewire("./run")
const cleanArgs = run.__get__("cleanArgs")
// @ponicode
describe("run.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            run.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("cleanArgs", () => {
    test("0", () => {
        let callFunction: any = () => {
            cleanArgs(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            cleanArgs(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            cleanArgs(["--ENV", "sales", "marketing", "--env", "SALES", "Software Engineer"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            cleanArgs(["--ENV", "SaLEs", "marketing", "Data Scientist", "sales", "Data Scientist"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            cleanArgs(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            cleanArgs(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("run.shutdownAppServer", () => {
    test("0", () => {
        let callFunction: any = () => {
            run.shutdownAppServer()
        }
    
        expect(callFunction).not.toThrow()
    })
})
