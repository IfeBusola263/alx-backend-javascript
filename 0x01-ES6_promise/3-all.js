import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise]).then(([photoRes, userRes]) => {
    console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
  }).catch(() => { console.error('Signup system offline'); });
}
