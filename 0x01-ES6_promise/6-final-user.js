import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

    return Promise.all([userPromise, photoPromise]).then((success) => {
	return [ { status: success.status,
		   value: success.status === 'fulfilled' ? success.value : success.reason,
		 }
	       ]
    }).catch(() => {});
}
