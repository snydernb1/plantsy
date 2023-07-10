import './ReviewCard.css'

export default function ReviewCard ({rev}) {




    function starRating (num) {
        const props = {};

        return (
          <div key={num} className={`${rev.rating >= num ? "filled" : "empty"}`}
            {...props}
            >
              <i id="1" className="fas fa-leaf"></i>
            </div>
        )
      }

    return (
        <section className="reviewCardContainer">
            {/* <div>
                <i className="fas fa-leaf" />
                <p>{rev.rating.toFixed(1)}/5.0</p>
            </div> */}
            <div className='reviewRating'>
                {[1,2,3,4,5].map((num)=>starRating(num))}
            </div>
            <p className='reviewTextLarge'>{rev.review}</p>

            <div className='nameDate'>
              <p className='nameDateSmaller'>{rev.user_name}</p>
              <p className='nameDateSmaller'>{rev.date}</p>
            </div>
        </section>
    )
}
