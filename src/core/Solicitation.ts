export default class Solicitation{
    #id: number
    #message: string
    #url: string
    #response: string
    #status: string

    constructor(message: string, url: string, response: string, status: string, id: number = null){
        this.#message = message
        this.#url = url
        this.#response = response
        this.#status = status
        this.#id = id
    }

    static toJSON(solicitation: Solicitation){
        return {
            id: solicitation.id,
            message: solicitation.message,
            url: solicitation.url,
            response: solicitation.response,
            status: solicitation.status
        }
    }
    
    static vazio(){
        return new Solicitation('', '', '', '')
    }

    get id(){
        return this.#id
    }

    get message(){
        return this.#message
    }

    get url(){
        return this.#url
    }

    get response(){
        return this.#response
    }

    get status(){
        return this.#status
    }
}