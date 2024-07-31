// Styles
import './user-card-stats.css';

export default function UserCardStats({ data }) {
    console.log(data)
    return (
        <section className='stats-container'>
            <div className='stat'>
                <h3 className='stat-title heading-3'>
                    Repos
                </h3>
                <p className='stat-number paragraph-4'>
                    {data?.repos}
                </p>
            </div>
            <div className='stat'>
                <h3 className='stat-title heading-3'>
                    Followers
                </h3>
                <p className='stat-number paragraph-4'>
                    {data?.followers}
                </p>
            </div>
            <div className='stat'>
                <h3 className='stat-title heading-3'>
                    Following
                </h3>
                <p className='stat-number paragraph-4'>
                    {data?.following}
                </p>
            </div>
        </section>
    )
}