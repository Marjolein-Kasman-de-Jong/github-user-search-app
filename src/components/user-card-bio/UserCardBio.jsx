// Styles
import './user-card-bio.css';

export default function UserCardBio({ data }) {
    return (
        <section className='bio paragraph-3'>
            {
                data?.bio ?
                    <p>
                        {data.bio}
                    </p>
                    :
                    <p>
                        This profile has no bio
                    </p>
            }
        </section>
    )
}