export default `mutation NewObservation($dog_id: Int, $behavior: String, $category: String) {
    insert_observations_one(object: {dog_id: $dog_id, behavior: $behavior, category: $category}) {
      dog_id
      category
      behavior
    }
  }
`