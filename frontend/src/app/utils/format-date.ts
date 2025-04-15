export const formatDate = (date: Date, locale: string) => {
  return date.toLocaleDateString(locale);
};
