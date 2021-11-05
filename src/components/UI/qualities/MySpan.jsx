import React from "react"
import PropTypes from 'prop-types'

/**
 * MySpan - для отображения значений количества, ярлыков или меток
 * @param customCss - дополнительные классы в формате string
 * @param color - цвет блока в формате элемента массива badgeColors
 * @param textColor - цвет текста по умолчанию белый при передаче 'dark' становится черным
 * @param roundedPill   - скругление углов. Для более большого параметра передвть в параметре: pill
 * @param children  - элемент отображаемый в badge
 * @returns {*}
 * @constructor
 */
const MySpan = ({customCss, color, textColor, roundedPill, children}) => {
    const classBadge = [
        'badge',
        customCss ? customCss : '',
        textColor === 'dark' && 'text-dark',
        roundedPill === 'pill' && 'rounded-pill',
        `bg-${color}`
    ].join(' ')

    return (
        <span
            className={classBadge}
        >
            {children}
      </span>
    )
}

const badgeColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

MySpan.defaultProps = {
    color: 'primary',
    textColor: '',
    roundedPill: ''
}

MySpan.propTypes = {
    customCss: PropTypes.string,
    color: PropTypes.oneOf(badgeColors),
    textColor: PropTypes.oneOf(['dark', '']),
    roundedPill: PropTypes.oneOf(['pill', '']),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

export default MySpan

