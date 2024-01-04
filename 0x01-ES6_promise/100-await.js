import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const picPromise = uploadPhoto();
    const userPromise = createUser();
    return { photo: await picPromise, user: await userPromise };
  } catch (error) {
    return { photo: null, user: null };
  }
}
