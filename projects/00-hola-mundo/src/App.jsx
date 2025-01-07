import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'xVan24x',
        name: 'Ivan Martinez',
        isFollowing: true
    },
    {
        userName: 'Indie5051',
        name: 'Indie 505',
        isFollowing: false
    },
    {
        userName: 'EnMexicoMagico',
        name: 'Mexico Magico',
        isFollowing: false
    },
    {
        userName: 'Miguel Ángel Duran',
        name: 'midudev',
        isFollowing: true
    }
]

export function App(){

    return (
        <section className='App'>
            {
                users.map(({userName, name , isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                    />
                ))
            }
        </section>
    )
}