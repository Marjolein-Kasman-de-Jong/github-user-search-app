import axios from 'axios';

async function getData() {
    try {
        let response = await axios.get('https://api.github.com/users/octocat');
        response = response.data;
        
        const data = {
            avatar: response.avatar_url,
            username: response.name,
            handle: response.login,
            profile: response.html_url,
            joined: response.created_at,
            bio: response.bio,
            repos: response.public_repos,
            followers: response.followers,
            following: response.following,
            location: response.location,
            blog: response.blog,
            twitter: response.twitter_username,
            company: response.company
        }
        
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

export default getData;