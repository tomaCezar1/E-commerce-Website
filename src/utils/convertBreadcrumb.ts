export const convertBreadcrumb = (string: string) => {
  const breadcrumb = string[0].toUpperCase() + string.substring(1)

  return breadcrumb
    .replace(/-/g, ' ')
};