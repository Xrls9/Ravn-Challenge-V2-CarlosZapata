import { useQuery, useResult } from "@vue/apollo-composable";
import { getPeople } from "../graphql/allPeople.query.gql"

export default function getFivePeople( cursor = "" ){

  //get the next five characters, if the cursor is empty get the first five people
  const { result, loading, error } = useQuery(getPeople, { cursor: cursor })
  const hasNextPage = useResult(result, null, data => data.allPeople.pageInfo.hasNextPage)
  const dataPeople = useResult(result, null, data =>
    data.allPeople.edges  )

  return {
    loading,
    error,
    hasNextPage,
    dataPeople
  }

}
