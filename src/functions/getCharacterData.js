import { useQuery, useResult } from "@vue/apollo-composable";
import { getDataPerson } from  "../graphql/getCharacter.query.gql"

export  default function getCharacterData(id){
  
  //get Character Data with ID

  const { result, loading, error } = useQuery(getDataPerson, { personId:id });

  const person = useResult(result, null, data=>data.person)
  return {
    person,
    loading,
    error
  }




}
