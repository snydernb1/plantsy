import { useEffect, useState } from "react";

export default function CartItemTile ({item, cartData}) {
    const [ranNum, setRanNum] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [minDate, setMinDate] = useState("")
    const [maxDate, setMaxDate] = useState("")

    const months = {
        'Jan': 31,
        'Feb': 28,
        'Mar': 31,
        'Apr': 30,
        'May': 31,
        'Jun': 30,
        'Jul': 31,
        'Aug': 31,
        'Sep': 30,
        'Oct': 31,
        'Nov': 30,
        'Dec': 31
    }

    const dateToday = new Date()
    const dateParts = dateToday.toDateString().split(' ')

    let month = dateParts[1]
    let prevMonthDays;
    const day = Number(dateParts[2])

    let minTempDays;
    let minTempMonth;
    let maxTempDays;
    let maxTempMonth;

    const minRanAdd = 7
    const maxRanAdd = Math.floor(Math.random() * 10) + 1

    if ((minRanAdd + day) > months[month]) {
        const keys = Object.keys(months)
        prevMonthDays = months[month]
        const i = keys.indexOf(month)
        minTempMonth = keys[i + 1]
        minTempDays = (day + minRanAdd) - prevMonthDays
    } else {
        minTempDays = day + minRanAdd
        minTempMonth = month
    }

    if ((maxRanAdd + minTempDays) > months[minTempMonth]) {
        const keys = Object.keys(months)
        prevMonthDays = months[month]
        const i = keys.indexOf(month)
        maxTempMonth = keys[i + 1]
        maxTempDays = (maxRanAdd + minTempDays) - prevMonthDays
    } else {
        maxTempDays = maxRanAdd + minTempDays
        maxTempMonth = minTempMonth
    }


    useEffect(()=> {
        setRanNum(Math.floor(Math.random() * 21))
        setShipping((Math.random() * 30).toFixed(2))
        setMinDate(`${minTempMonth} ${minTempDays}`)
        setMaxDate(`${maxTempMonth} ${maxTempDays}`)

    }, [item])

    let prevImage;

    const imgs = item.imgs

    for (let img of imgs) {
        if (img.preview === true) {
            prevImage = img.img_url
        }
    }








    return (
        <section>
            <div>

                <div>
                    <img src={prevImage}/>
                </div>

                <div>
                    <p>{item.name}</p>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <button>Remove</button>
                </div>


                <div>
                    <p>${item.price}</p>

                    {item.discount !== null ?
                        <p>${(Number(item.price) - (Number(item.discount) * Number(item.price))).toFixed(2)}</p>
                        :
                        null
                        }
                        {item.discount !== null ?
                        <p>({item.discount * 100}% off)</p>
                        :
                        null
                        }

                    <p>{ranNum} people have this item in their {ranNum > 1 ? 'carts' : 'cart'}</p>
                </div>

                <div>
                    <div>
                        <input type='checkbox'/>
                        <div>
                            <p>This order is a gift</p>
                            <p>Prices will not be shown on packing slip</p>
                        </div>
                    </div>

                    <div>
                        <h4>Shipping: ${shipping}</h4>
                        <p>Estimated delivery: {minDate} - {maxDate}</p>
                    </div>

                </div>


            </div>


        </section>
    );
};
