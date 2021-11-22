import React, { useEffect, useState } from 'react';

import './Commit.scss';

const mockData = [
    {
        url: 'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
        sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
        node_id: 'MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==',
        html_url: 'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e',
        comments_url:
            'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments',
        commit: {
            url: 'https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
            author: {
                name: 'Monalisa Octocat',
                email: 'support@github.com',
                date: '2011-04-14T16:00:49Z'
            },
            committer: {
                name: 'Monalisa Octocat',
                email: 'support@github.com',
                date: '2011-04-14T16:00:49Z'
            },
            message: 'Fix all the bugs',
            tree: {
                url: 'https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e',
                sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e'
            },
            comment_count: 0,
            verification: {
                verified: false,
                reason: 'unsigned',
                signature: null,
                payload: null
            }
        },
        author: {
            login: 'octocat',
            id: 1,
            node_id: 'MDQ6VXNlcjE=',
            avatar_url: 'https://github.com/images/error/octocat_happy.gif',
            gravatar_id: '',
            url: 'https://api.github.com/users/octocat',
            html_url: 'https://github.com/octocat',
            followers_url: 'https://api.github.com/users/octocat/followers',
            following_url: 'https://api.github.com/users/octocat/following{/other_user}',
            gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
            organizations_url: 'https://api.github.com/users/octocat/orgs',
            repos_url: 'https://api.github.com/users/octocat/repos',
            events_url: 'https://api.github.com/users/octocat/events{/privacy}',
            received_events_url: 'https://api.github.com/users/octocat/received_events',
            type: 'User',
            site_admin: false
        },
        committer: {
            login: 'octocat',
            id: 1,
            node_id: 'MDQ6VXNlcjE=',
            avatar_url: 'https://github.com/images/error/octocat_happy.gif',
            gravatar_id: '',
            url: 'https://api.github.com/users/octocat',
            html_url: 'https://github.com/octocat',
            followers_url: 'https://api.github.com/users/octocat/followers',
            following_url: 'https://api.github.com/users/octocat/following{/other_user}',
            gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
            organizations_url: 'https://api.github.com/users/octocat/orgs',
            repos_url: 'https://api.github.com/users/octocat/repos',
            events_url: 'https://api.github.com/users/octocat/events{/privacy}',
            received_events_url: 'https://api.github.com/users/octocat/received_events',
            type: 'User',
            site_admin: false
        },
        parents: [
            {
                url: 'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
                sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e'
            }
        ]
    }
];

async function fetchData() {
    const response = await fetch('https://api.github.com/repos/angular/angular.js/commits');
    const data = await response.json();
    console.log(data);
    return data;
}

const Commits = () => {
    const [commits, setCommits] = useState([]);
    const [filteredCommits, setFilteredCommits] = useState(commits);
    const [checked, handleCheckbox] = useState(false);
    const [search, handleSearch] = useState('');

    useEffect(async () => {
        const data = await fetchData();

        if (data) setCommits(data);
    }, []);

    useEffect(() => {
        if (checked) {
            const filteredData = commits.filter((commit) => commit.commit.message.length !== 0);
            setFilteredCommits(filteredData);
        } else {
            setFilteredCommits([...commits]);
        }
    }, [checked, commits]);

    useEffect(() => {
        if (search) {
            const results = filteredCommits.filter((commit) => commit.commit.message.includes(search));

            setFilteredCommits(results);
        }
    }, [search]);

    if (!commits.length) return 'Loading';

    return (
        <div className="commits__container">
            <h1>Commits</h1>
            <div className="commits_search">
                <input name="search" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
                <input
                    type="checkbox"
                    label="show commits with comments"
                    onChange={(e) => handleCheckbox(e.target.checked)}
                />
            </div>
            <div className="commits__list">
                {filteredCommits.map(({ author, commit, sha }) => (
                    <div className="commit__container" key={sha}>
                        <div className="commit">
                            <div className="commit__info">
                                {author.login} <span>Committed on {commit.committer.date}</span>
                            </div>
                            <a href={commit.tree.url} target="_blank">
                                {commit.tree.sha}
                            </a>
                        </div>
                        <div className="commit__message">{commit.message}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Commits;
