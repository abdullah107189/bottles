const getDat = () => {
    const loadData = localStorage.getItem('cart')
    if (loadData) {
        return JSON.parse(loadData);
    }
    return []
}

const setDataToArray = (id) => {
    const cart = getDat();
    cart.push(id)
    setLocalStore(cart)
}
const setLocalStore = (cart) => {
    const stringifyData = JSON.stringify(cart)
    localStorage.setItem('cart', stringifyData)
}
export { setDataToArray ,getDat,setLocalStore}