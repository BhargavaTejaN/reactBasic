import React,{useState} from 'react'
import {Combobox} from '@headlessui/react'

const cars = [
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroen",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MINI",
    "Mitsubishi",
    "Nissan",
    "Porsche",
    "Ram",
    "Rolls-Royce",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
];

const SearchBar = () => {

    const [selectedPerson,setSelectedPerson] = useState('');
    const [query,SetQuery] = useState('');

    const filteredPeople = query === " "? (cars) : (cars.filter((eachCar) => {
        return eachCar.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    }))

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input onChange={(event) => SetQuery(event.target.value)} />
        <Combobox.Options>
            {filteredPeople.map((eachCar) => (
                <Combobox.Option key={eachCar} value={eachCar}>
                    {eachCar}
                </Combobox.Option>
            ))}
        </Combobox.Options>
    </Combobox>
  )
}

export default SearchBar