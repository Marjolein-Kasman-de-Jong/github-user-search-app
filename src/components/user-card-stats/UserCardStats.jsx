// Components
import UserCardStat from '../user-card-stat/UserCardStat';

// Styles
import './user-card-stats.css';

export default function UserCardStats({ data }) {
    const stats = ['repos', 'followers', 'following'];

    return (
        <section className='stats-container'>
            {
                stats.map((stat) => {
                    return <UserCardStat key={stat} data={data} stat={stat} />
                })
            }
        </section>
    )
}