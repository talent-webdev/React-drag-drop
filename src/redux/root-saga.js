import { all, call } from 'redux-saga/effects';

// import { shopSagas } from './shop/shop.sagas';
// import { userSagas } from './user/user.sagas';
import { signSaga } from './sign/sign.sagas';

export default function* rootSaga() {
    yield all([
        // call(shopSagas),
        // call(userSagas),
        call(signSaga)
    ]);
}
