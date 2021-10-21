import React, { useEffect, useState } from 'react'
import { getGitHubUser } from './getGitHubUser';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import '/home/santiago/Desktop/proyectosReact/portfolio/src/components/github/githubScreen.scss';

export const GithubScreen = () => {
    
    const [gitHub, setGitHub] = useState([])

    useEffect(() => {
        
        getGitHubUser()
            .then(setGitHub)
        
    }, [])


    const repos = gitHub.map(g => {
        return { 
            reponame: g.name
        }
    })

    console.log(gitHub)
    
    return (
        <div id="github">
            <div className="github1">
                <h2>GitHub <GitHubIcon className="icon"/></h2>
            </div>

            <div className="card">
                <img className="card-img" src={ gitHub[0].owner.avatar_url } alt="" />
                <h3 className="card-title" > { gitHub[0].owner.login }</h3>
                <hr />
                <div className="card-body">

                    <p><BookmarksIcon/>{ gitHub.length } Repos </p>
                    
                    {
                        repos.map(r => {
                            return<><a target="_blank" key={r.reponame} href={`https://github.com/santiagosegurado/${r.reponame}`}> + { r.reponame } </a> <br /> </>
                        })
                    }
                </div>

            </div>
        </div>
    )
}
