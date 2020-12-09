export const sortCategories = (categories: {
  id: string,
  title: string,
  parent: string | null
}[]) => {
  return categories.filter(entry => !entry.parent).map(parent => {
    const children = categories.filter(child => child.parent === parent.id);
    return {...parent, children};
  })
}
