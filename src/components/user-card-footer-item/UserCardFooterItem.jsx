// Styles
import './user-card-footer-item.css';

export default function UserCardFooterItem({ data, item }) {
    return (
        <div className='user-card-footer-item'>
            <div className={`icon paragraph-5 ${!data[item] && 'not-available'}`}>
                <img
                    src={`images/icon-${item}.svg`}
                    alt={item}
                />
            </div>
            <div>
                {
                    data && data[item] ?
                        item === 'location' || item === 'company' ?
                            <p className={`paragraph-5 ${!data[item] && 'not-available'}`}>
                                {data[item]}
                            </p>
                            :
                            item === 'twitter' ?
                                <a
                                    href={`http://www.twitter.com/${data[item]}`}
                                    className={`paragraph-5 link-2 ${!data[item] && 'not-available'}`}
                                >
                                    {data[item]}
                                </a>
                                :
                                <a
                                    href={data[item]}
                                    className={`paragraph-5 link-2 ${!data[item] && 'not-available'}`}
                                >
                                    {data[item]}
                                </a>
                        :
                        < p className={`paragraph-5 ${!data[item] && 'not-available'}`}>
                            Not Available
                        </p>
                }
            </div>
        </div >
    )
}