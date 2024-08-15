export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function storeInSessionStorage(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error,"mintu error");
    console.error('Error storing data in session storage:', error);
  }
}

export function getFromSessionStorage(key) {
  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error retrieving data from session storage:', error);
    return null;
  }
}
