import React from 'react'

const MyTableThead = () => {
    return (
        <thead key="headTable12">
            <tr key="headTable1111">
                <th key="name" scope="col">
                    Имя
                </th>
                <th key="qualities" scope="col">
                    Качества
                </th>
                <th key="profession" scope="col">
                    Профессия
                </th>
                <th key="completedMeetings" scope="col">
                    Встретился, раз
                </th>
                <th key="rate" scope="col">
                    Оценка
                </th>
                <th key="favourites" scope="col">
                    Избранное
                </th>
                <th key="delete" scope="col"></th>
            </tr>
        </thead>
    )
}

export default MyTableThead
