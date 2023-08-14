import React from 'react'
import TagMenuItem from './TagMenuItem'

const TagMenu = ({ items }) => {
    const mapedTagMenuItems = items.map((tagMenuItem) => {
        return <TagMenuItem key={tagMenuItem.id} {...tagMenuItem} />
    })

    return (
    <div className='section-center'>
        {mapedTagMenuItems}
    </div>
    )
}

export default TagMenu
