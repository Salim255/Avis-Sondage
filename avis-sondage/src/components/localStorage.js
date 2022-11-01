export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
export const removecreatedSondageIdFromLocalStorage = () => {
  localStorage.removeItem("createdSurveyId");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const addSondageIdToLocalStorage = (id) => {
  localStorage.setItem("createdSurveyId", JSON.stringify(id));
};
