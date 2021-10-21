



export const getGitHubUser = async() => {

    const url = 'https://api.github.com/users/santiagosegurado/repos'
    const resp = await fetch(url)
    const data = await resp.json()


    return data


}
