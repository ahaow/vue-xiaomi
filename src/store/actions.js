export default {
    saveUserName(context,username) {
        context.commit('saveUserName',username)
    },
    saveCartCount(context,num) {
        context.commit('saveCartCount',num)
    }
}