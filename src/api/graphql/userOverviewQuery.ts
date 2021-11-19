export default `query UserOverviewQuery {
    users {
      id
      first_name
      dogs {
        id
        name
        picture
        observations(order_by: {created_at: desc}, limit: 10) {
          created_at
          behavior
          category
        }
      }
    }
  }
  `