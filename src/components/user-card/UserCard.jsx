// Components
import UserCardHeader from '../user-card-header/UserCardHeader';
import UserCardBio from '../user-card-bio/UserCardBio';
import UserCardStats from '../user-card-stats/UserCardStats';

// Styles
import './user-card.css';

export default function UserCard({ data }) {
    return (
        <article className='card'>
            <UserCardHeader data={data} />
            <UserCardBio data={data} />
            <UserCardStats data={data} />
            <footer className='card-footer'>
                <div className='url'>
                    <div className='icon paragraph-5'>
                        ic
                    </div>
                    <div>
                        {data?.location ? <p className='paragraph-5'>{data.location}</p> : <p className='paragraph-5'>Not available</p>}
                    </div>
                </div>
                <div className='url'>
                    <div className='icon paragraph-5'>
                        ic
                    </div>
                    <div>
                        {
                            data?.blog ?
                                <a href={data.blog} className='link-2'>
                                    {data.blog}
                                </a>
                                :
                                <p className='paragraph-5'>Not available</p>
                        }
                    </div>
                </div>
                <div className='url'>
                    <div className='icon paragraph-5'>
                        ic
                    </div>
                    <div>
                        {
                            data?.twitter ?
                                <a href={data.twitter} className='link-2'>
                                    {data.twitter}
                                </a>
                                :
                                <p className='paragraph-5'>Not available</p>
                        }
                    </div>
                </div>
                <div className='url'>
                    <div className='icon paragraph-5'>
                        ic
                    </div>
                    <div>
                        {
                            data?.company ?
                                <a href={data.company} className='link-2'>
                                    {data.company}
                                </a>
                                :
                                <p className='paragraph-5'>Not available</p>
                        }
                    </div>
                </div>
            </footer>
        </article>
    )
}
