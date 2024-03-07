import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

async function handleProfileSignup(firstName, lastName, fileName) {
  let results = [];

  try {
    const user = await signUpUser(firstName, lastName);
    results.push({ status: "fulfilled", value: user });
  } catch (error) {
    results.push({ status: "rejected", value: error.toString() });
  }

  try {
    const photo = await uploadPhoto(fileName);
    results.push({ status: "fulfilled", value: photo });
  } catch (error) {
    results.push({ status: "rejected", value: error.toString() });
  }

  return results;
}

export default handleProfileSignup;
