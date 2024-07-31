// Helpers
import formatDate from '../../helpers/formatDate';

// Styles
import './user-card-header.css';

export default function UserCardHeader({ data }) {
    return (
        <header className='card-header'>
            <div className='avatar'>
                <img 
                    src={data?.avatar} 
                    alt={data?.username} 
                />
            </div>
            <div className='account'>
                <hgroup>
                    <h2 className='username heading-2'>
                        {data?.username}
                    </h2>
                    <p className='handle'>
                        <a 
                            href={data?.profile} 
                            className='link-1'
                        >
                            {`@${data?.handle}`}
                        </a>
                    </p>
                </hgroup>
                <p className='joined paragraph-2'>
                    {`Joined ${formatDate(data?.joined)}`}
                </p>
            </div>
        </header>
    )
}