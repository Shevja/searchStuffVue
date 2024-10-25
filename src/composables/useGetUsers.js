async function mixedKeysFetch(url, usernameKeys, idKeys) {
    let usernameUsers = []
    let idUsers = []

    let usernameResponse = null
    let idResponse = null

    // fetch by username and id query
    [usernameResponse, idResponse] = await Promise.all([
        fetch(url + usernameKeys.join('&')),
        fetch(url + idKeys.join('&'))
    ])

    usernameUsers = await usernameResponse.json()
    idUsers = await idResponse.json()

    // get unique users
    const mergedResults = [...usernameUsers, ...idUsers]
    const uniqueResults = mergedResults.filter((obj, index, arr) => index === arr.findIndex(o => o.id === obj.id))

    return uniqueResults
}

async function sameKeysFetch(url, queryKeys) {
    const response = await fetch(url + queryKeys.join('&'))

    if (!response.ok) throw new Error(response.status)

    return await response.json()
}

async function useGetUsers(tokens) {
    const fetchUrl = 'https://jsonplaceholder.typicode.com/users?'
    let idKeys = []
    let usernameKeys = []
    let resultList = []

    tokens.forEach(token => {
        if (isNaN(token)) {
            usernameKeys.push(`username=${token}`)
        } else {
            idKeys.push(`id=${token}`)
        }
    })

    try {
        if (usernameKeys.length && idKeys.length) {

            resultList = await mixedKeysFetch(fetchUrl, usernameKeys, idKeys)

        } else if (usernameKeys.length) {

            resultList = await sameKeysFetch(fetchUrl, usernameKeys)

        } else if (idKeys.length) {

            resultList = await sameKeysFetch(fetchUrl, idKeys)

        }

        // check data
        if (
            !resultList.every(
                user =>
                    user.hasOwnProperty('id') &&
                    user.hasOwnProperty('name') &&
                    user.hasOwnProperty('username')
            )
        ) {
            throw new Error('invalid data')
        }

        // null - for fetch errors
        return [resultList, null]

    } catch (err) {
        switch (err.message) {
            case 'Failed to fetch':
                // 600
                return [null, 600]

            case '404':
                // 404
                return [null, 404]

            case 'invalid data':
                // 700
                return [null, 700]

            default:
                // 701
                return [null, 701]
        }
    }

} export default useGetUsers