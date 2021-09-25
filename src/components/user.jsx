import React from 'react'
import MySpan from './UI/span/MySpan'
import PropTypes from 'prop-types'


const User = ({ item, handleDelete, handleBookmark }) => {
    const { _id, name, qualities, profession, completedMeetings, rate } = item
    return (
        <tbody key={_id + 'headTable22'}>
            <tr key={_id}>
                <td key={_id + 'name'}>{name}</td>
                <td key={_id + 'qualities'}>
                    {qualities.map((val, index) => (
                        <MySpan
                            key={index + val.name}
                            myKey={index + val.name}
                            colorTopBage={'p-2 m-2 badge bg-' + val.color}
                            textTopSpan={val.name}
                        />
                    ))}
                </td>
                <td key={_id + 'profession'}>{profession.name}</td>
                <td key={_id + 'completedMeetings'}>{completedMeetings}</td>
                <td key={_id + 'rate'}>{rate + '/5'}</td>
                <td key={_id + 'bookmark'}>
                    <button
                        key={_id + 'btn-bookmark'}
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                            handleBookmark(_id)
                        }}
                    >
                        <i
                            key={_id + 'i'}
                            className={`bi bi-bookmark${
                                item.bookmark ? '-fill' : ''
                            }`}
                        >
                            {' '}
                        </i>
                    </button>
                </td>
                <td key={_id + 'delete'}>
                    <button
                        key={_id + 'bt-button'}
                        onClick={() => {
                            handleDelete(_id)
                        }}
                        type="button"
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

User.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default User
