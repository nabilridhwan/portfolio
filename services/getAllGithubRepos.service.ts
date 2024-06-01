export default async function getAllGithubRepos(username: string) {
    return fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        {
            method: 'GET',
        }
    )
        .then((res) => res.json())
        .then((json) => {
            return json;
        });
}
