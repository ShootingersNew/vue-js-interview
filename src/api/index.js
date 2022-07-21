
class Api {
    //В идеале код в настоящем приложении должен быть разбитым на модули, но это тз
    filters = {
        async getFilters() {
            //Тут должен был дергаться эндпоинт, но раз попросили имитировать асинхронную загрузку
            const filters = await import('./filters.json')
            return filters.allFilters
        },
    }
    users = {
        async getUsers(filters) {
            //Тут должен был дергаться эндпоинт, но раз попросили имитировать асинхронную загрузку
            const users = await import('./users.json')
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