import React, {useState} from 'react'
import ButtonSideBar from '../ButtonSideBar/ButtonSideBar'
import "./SidebarButtonList.css"

function SidebarButtonList() {

  const [listButtonSelected , setListButtonSelected] = useState([
    {
      key: 1,
      selected: true
    },
    {
      key: 2,
      selected: false
    },
    {
      key: 3,
      selected: false
    },{
      key: 4,
      selected: false
    }
  ]);


 const changeSelectedButton = (key: number) => {
    const newList = listButtonSelected.map(v=> {
       if(key === v.key){
        v.selected = true
       }else{
        v.selected = false
       }
       return v
    })
    setListButtonSelected(newList)
 }

  return (
    <div>
        <ul className ='buttons'>
          {
            listButtonSelected.map( v => 
              <li key={v.key} onClick={()=>changeSelectedButton(v.key)}><ButtonSideBar selected={v.selected}  /></li>
             )
          }
        </ul>
    </div>
  )

}

export default SidebarButtonList