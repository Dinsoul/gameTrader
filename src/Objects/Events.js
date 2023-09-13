import {useState} from "react";

function Events(trace) {
    const [event] = useState(['Обычный день', 'Дождь', 'Ровная дорога', 'Телега сломалась',
        'Река', 'Встретил местного', 'Разбойники большой дороги', 'Придорожный трактир', 'Товар испортился']);
    let speed = 3;
    const [days, setDays] = useState(10);


    const getEvents = (totalDays) => {
        for (let trace in days) {
            while (trace >= 0) {
                let eventChoose = event.randElement();

                if (eventChoose === event[0]) {
                    // <div>Погода хорошая, без происшедтвия.</div>;
                    let remainder = trace - 4;
                    return speed++ && remainder;

                } else if (eventChoose === event[1]) {
                    // <div>Сегодня дождливо!</div>;
                    let remainder = trace - 1;
                    return speed - 2 && remainder;
                } else if (eventChoose === event[2]) {
                    // <div>Ровная дорога!</div>;
                    let remainder = trace - 5;
                    return speed + 2 && remainder;
                } else if (eventChoose === event[3]) {
                    // <div>Телега сломалась(</div>;
                    let remainder = trace - 3;
                    return speed && remainder;
                } else if (eventChoose === event[4]) {
                    // <div>Потратил целый день!</div>;
                    let remainder = trace - 2;
                    return speed - 1 && remainder;
                } else if (eventChoose === event[5]) {
                    // <div>Встретил местного, удалось срезать путь!</div>;
                    let remainder = trace - 6;
                    return speed + 3 && remainder;
                } else if (eventChoose === event[6]) {
                    // <div>Разбойники!</div>;
                    let remainder = trace - 3;
                    return speed && remainder;

                } else if (eventChoose === event[7]) {
                    // <div>Останавливаемся на гостиницу.</div>;
                    let remainder = trace - 3;
                    return speed && remainder
                } else if (eventChoose === event[8]) {
                    // <div>Товар испортился!</div>;
                    let remainder = trace - 3;
                    return speed && remainder;
                }
            }
        }
    }


    return (
        <>
            {event.map((days,trace) => {
                return (
                    <>
                        {getEvents(days)}
                        <div key={event[0]}>
                            <p>
                            <div>День</div>
                            <div>Погода хорошая, без происшествия.</div>
                            <div>Осталось ехать {trace} лиг</div>
                            </p>
                        </div>
                        <div key={event[1]}>
                            <p>
                            <div>День</div>
                            <div>Сегодня дождливо!</div>
                            <div>Осталось ехать {trace} лиг</div>
                            </p>
                        </div>
                        <div key={event[2]}>
                            <p>
                            <div>День</div>
                            <div>Ровная дорога!</div>
                            <div>Осталось ехать {trace} лиг</div>
                            </p>
                        </div>
                        <div key={event[3]}>
                            <p>
                            <div>День </div>
                            <div>Телега сломалась(</div>
                            <div>Осталось ехать {trace} лиг</div>
                            </p>
                        </div>
                        <div key={event[4]}>
                            <p>
                            <div>День </div>
                            <div>Потратил целый день!</div>
                            <div>Осталось ехать {trace} лиг</div>
                            </p>
                        </div>
                        <div key={event[5]}>
                            <p>
                            <div>День </div>
                            <div>Встретил местного, удалось срезать путь!</div>
                            <div>Осталось ехать {trace} лиг</div>
                            </p>
                        </div>
                        <div key={event[6]}>
                            <p>
                            <div>День </div>
                            <div>Разбойники!</div>
                            <div>Осталось ехать {trace} лиг</div>
                            </p>
                        </div>
                        <div key={event[7]}>
                            <p>
                            <div>День</div>
                            <div>Останавливаемся на гостиницу.</div>
                            <div>Осталось ехать {trace} лиг</div>
                            </p>
                        </div>
                        <div key={event[8]}>
                            <p>
                            <div>День </div>
                            <div>Товар испортился!</div>
                            <div>Осталось ехать {trace} лиг</div>
                            </p>
                        </div>
                    </>
                );
            })}
            <div>Приехали!</div>
            <div>Путь занял {days}</div>

        </>
    );
}
export default Events;