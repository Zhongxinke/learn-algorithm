class Dictionary {
    constructor () {
        this.items = {}
    }
    set (key, value) {

    }
    has (key) {
        return this.items.hasOwnProperty(key)
    }
    set (key, value) {
        items[key] = value
    }
    remove (key) {
        if (this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }
    get (key) {
        return this.has(key) ? items[key] : undefined
    }
    values () {
        return Object.values(this.items)
    }
    clear () {
        this.items = {}
    }
    size () {
        return Object.keys(this.items).length
    }
    getItems () {
        return this.items
    }
}