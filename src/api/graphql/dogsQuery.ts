export default `query Dogs {
  dogs {
    id
    name
    observations {
      behavior
      category
      created_at
    }
  }
}`