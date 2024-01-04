import { uploadPhoto, createUser } from './utils';

const photoPromise = uploadPhoto();
const userPromise = createUser();

export default function handleProfileSignup() {
  return Promise.all([photoPromise, userPromise]).then((Value) => {
    console.log(`${Value[0].body} ${Value[1].firstName} ${Value[1].lastName}`);
  }).catch(() => { console.error('Signup system offline'); });
}
