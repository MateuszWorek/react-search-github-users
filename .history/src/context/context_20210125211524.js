import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GitHubContext = React.createContext();
// Provider, Consumer - GithubContext.Provider
const GithubProvider = ({ children }) => {
    return <GitHubContext.Provider value={ 'hello' }>{ children }</GitHubContext.Provider>
};
export { GithubProvider, GitHubContext };