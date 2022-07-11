

class Api {

    filters = {
        async getFilters() {
            const filters = await import('./filters.json')
            return filters.allFilters
        },
    }
    users = {
        async getUsers(filters) {
            const users = await import('./users.json')
            const getIsSuitable = (user) => {
                return filters.every(({ name, value }) => {
                    return user[name] === value
                })
            }
            return !filters ? users.allUsers : users.allUsers.filter((user) => {
                return !user.avatar || getIsSuitable(user)
            })
        }
    }

}

const ApiInstance = new Api();

Object.freeze(ApiInstance);
export default ApiInstance