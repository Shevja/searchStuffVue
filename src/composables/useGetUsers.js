async function useGetUsers(tokens) {
    const fetchUrl = 'https://jsonplaceholder.typicode.com/users?'
    let idKeys = []
    let usernameKeys = []

    let usernameResponse = null
    let idResponse = null
    let usernameUsers = []
    let idUsers = []

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

            [usernameResponse, idResponse] = await Promise.all([
                fetch(fetchUrl + usernameKeys.join('&')),
                fetch(fetchUrl + idKeys.join('&'))
            ])

            usernameUsers = await usernameResponse.json()
            idUsers = await idResponse.json()

            const mergedResults = [...usernameUsers, ...idUsers]
            resultList = mergedResults.filter((obj, index, arr) => index === arr.findIndex(o => o.id === obj.id))

        } else if (usernameKeys.length) {

            usernameResponse = await fetch(fetchUrl + usernameKeys.join('&'))

            if (!usernameResponse.ok) throw new Error(`Server error: ${usernameResponse.status}`)

            resultList = await usernameResponse.json()

        } else if (idKeys.length) {

            idResponse = await fetch(fetchUrl + idKeys.join('&'));

            if (!idResponse.ok) throw new Error(`Fetch error code: ${idResponse.status}`)

            resultList = await idResponse.json()
            console.log(idResponse)

        }
    } catch (err) {
        console.log(err.message)
    }

    return resultList
} export default useGetUsers