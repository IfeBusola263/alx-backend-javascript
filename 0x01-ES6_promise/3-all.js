import { uploadPhoto, createUser } from './utils';

const photoPromise = uploadPhoto();
const userPromise = createUser();

export default function handleProfileSignup() {
  return Promise.all([photoPromise, userPromise]).then((success) => {
    console.log(`${success.body} ${success.firstName} ${success.lastName}`);
  }).catch(() => {
    console.error('Signup system offline');
  });
}
