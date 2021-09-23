import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { setData } from '../../../redux/sound/sound.actions';

const getData = [
  { data: 1, name: 'data1' },
  { data: 2, name: 'data2' },
  { data: 3, name: 'data3' },
  { data: 4, name: 'data4' },
  { data: 5, name: 'data5' }
]

const SideBar = () => {
  const dispatch = useDispatch()
  const { sideBarMenus } = useSelector(state => state.soundReducer)

  useEffect(() => {
    dispatch(setData(getData))
  }, [])

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  return (
    <div className='w-2'>
      <ul>
        {sideBarMenus.map(data => {
          return (
            <li id={data.data + 'id'} key={data.data} draggable="true" onDragStart={e => drag(e)} >{data.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBar