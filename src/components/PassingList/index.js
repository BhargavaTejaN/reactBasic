import React,{useState} from 'react'
import EachItemInList from '../EachItemInList'

const initialUserDetailsList = [
    {
      uniqueNo: 1,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'Software Developer'
    },
    {
      uniqueNo: 2,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'Software Developer'
    },
    {
      uniqueNo: 3,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'Software Developer'
    },
    {
      uniqueNo: 4,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
      name: 'Devon Lane',
      role: 'Software Developer'
    }
  ]

const PassingList = () => {

  const [inputValue,setInputValue] = useState("");
  const [usersDetailsList,setUsersDetailsList] = useState(initialUserDetailsList);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

  const searchResults = usersDetailsList.filter((each) => each.name.toLowerCase().includes(inputValue.toLowerCase()));

  const deletePic = (id) => {
    //console.log("Delete Pic With Id : ",id);
    const filteredUsersData = usersDetailsList.filter((each) => each.uniqueNo !== id);
    //console.log("Filtered Data : ",filteredUsersData)
    setUsersDetailsList(filteredUsersData);
  }

  return (
    <div>
      <input type="search" value={inputValue} onChange={handleInput} />
        {searchResults.map((each) => (
            <EachItemInList deletePic={deletePic} details={each} key={each.uniqueNo} />
        ))}
    </div>
  )
}

export default PassingList