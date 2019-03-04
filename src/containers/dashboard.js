import React from 'react';

const Dashboard = () => (
    <div>
        <h1 className="text-white text-center mt-3">User Page</h1>
        <p className="text-white text-center">This page will eventually contain your favourite/bookmarked resources and various user options, if you logged in by authenticating with Discord</p>
        <a href="https://discordapp.com/api/oauth2/authorize?client_id=520955050793893891&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fuser%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify%20guilds" target="_blank" rel="noopener noreferrer">login</a>
    </div>
);

export default Dashboard;
