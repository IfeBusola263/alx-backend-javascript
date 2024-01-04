import { uploadPhoto, createUser } from './utils';

const photoPromise = uploadPhoto();
const userPromise = createUser();

export default function handleProfileSignup() {
  return Promise.all([photoPromise, userPromise]).then(([photoRes, userRes]) => {
    console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
  }).catch(() => { console.error('Signup system offline'); });
}
