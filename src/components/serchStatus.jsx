import React from "react";
import MySpan from "./UI/span/MySpan";
import classes from "./UI/span/MySpan.module.css";


const serchStatus = ({usersCount}) => {

    const colorBadges = ['primary' , 'danger']

    const renderPharse = number => {
        return number === 1 || number > 4  ? 'человек тусанет' : 'человека тусанут'
    }

    const colorTopBage = usersCount === 0 ? colorBadges[1] : colorBadges[0]

    const textTopSpan = usersCount === 0  ? 'Никто не тусанет с тобой' : `${usersCount} ${renderPharse(usersCount)} с тобой сегодня`


    return (
        <>
            <MySpan
                myKey='informCountPeople'
                colorTopBage = {`${colorTopBage} ${classes.MySpan}`}
                textTopSpan = {textTopSpan}
            />
        </>
    )
}

export default serchStatus
