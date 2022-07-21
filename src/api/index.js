const filters = await import('./filters.json')
const users = await import('./users.json')
class Api {
    filters = {
        async getFilters() {
            return filters.allFilters
        },
    }
    users = {
        async getUsers(filters) {
            const getIsSuitable = (user) => {
                return filters.every(({ name, value }) => {
                    return value? user[name] === value : true
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