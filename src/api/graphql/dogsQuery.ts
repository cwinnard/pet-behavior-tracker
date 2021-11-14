export default `query Dogs {
  dogs {
    id
    name
    picture
    observations {
      behavior
      category
      created_at
    }
  }
}`