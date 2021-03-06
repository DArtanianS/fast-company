import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const MyTableBody = ({data, columns}) => {
    const renderContent = (column, item) => {
        if(columns[column].component) {
            const components = columns[column].component
            if(typeof components === 'function') {
                return components(item)
            }
            return components
        }
        return _.get(item, columns[column].path)
    }
    return (
        <tbody>
        {data.map((item) => <tr key={item._id}>
                {
                    Object.keys(columns).map(column => <td key={column}>
                        {renderContent(column, item)}
                    </td>
                    )
                }
            </tr>
            )}
        </tbody>
    )
}

MyTableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired,
}

export default MyTableBody
