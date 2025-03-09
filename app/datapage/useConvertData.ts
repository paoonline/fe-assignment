import { useEffect, useState } from "react";
import { DepartmentSum, Person, User } from "./type";

const groupByDepartment = (data: User[]): Record<string, DepartmentSum> => {
    return data.reduce((acc: Record<string, DepartmentSum>, person: Person) => {
      const { department } = person.company;
      const { gender, age, hair, address, firstName, lastName } = person;
  
      if (!acc[department]) {
        acc[department] = {
          male: 0,
          female: 0,
          ageRange: "",
          hair: {},
          addressUser: {},
        };
      }

      if (!acc[department].ageRange) {
        acc[department].ageRange = `${age}-${age}`;
      } else {
        const [min, max] = acc[department].ageRange.split("-").map(Number);
        acc[department].ageRange = `${Math.min(min, age)}-${Math.max(max, age)}`;
      }
  
      if (gender === "male") {
        acc[department].male += 1;
      } else if (gender === "female") {
        acc[department].female += 1;
      }
  
     
      if (!acc[department].hair[hair.color]) {
        acc[department].hair[hair.color] = 1;
      } else {
        acc[department].hair[hair.color] += 1;
      }
  
      const addressKey = `${firstName}${lastName}`;
      acc[department].addressUser[addressKey] = address.postalCode;
  
      return acc;
    }, {} as Record<string, DepartmentSum>);
  };

const useConvertData = () => {
    const [data, setData] = useState<Record<string, DepartmentSum>>();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://dummyjson.com/users');
            const result = await response.json();
            setData(groupByDepartment(result.users));
             
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      return  {
        data,
        groupByDepartment
      }

}

export default useConvertData