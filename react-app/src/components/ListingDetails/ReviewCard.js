

export default function ReviewCard ({rev}) {


    return (
        <section>
            <div>
                <i className="fas fa-leaf" />
                <p>{rev.rating.toFixed(1)}/5.0</p>
            </div>
            <p>{rev.review}</p>
            <p>{rev.user_name}</p>
        </section>
    )
}
