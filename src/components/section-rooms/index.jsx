import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionRoom from '@/components/section-room'
import { SectionRoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { list, itemWidth } = props
  return (
    <SectionRoomsWrapper> 
      {
        list?.slice(0, 8).map(item => {
          return <SectionRoom item={item} itemWidth={itemWidth} key={item.id} />
        })
      }
    </SectionRoomsWrapper>
  )
})
 SectionRooms.propTypes = {
  list: PropTypes.array,
  itemWidth: PropTypes.string
 }

export default SectionRooms