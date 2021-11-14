export default `mutation NewObservation($dog_id, $behavior, $category) {
    insert_observations_one(object: {dog_id: $dog_id, behavior: $behavior, category: $category}) {
      dog_id
      category
      behavior
    }
  }
`