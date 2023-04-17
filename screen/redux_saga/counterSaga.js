import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';

function* increaseCounterAsync() {
  try {
    // yield delay(2000);
  
    yield put({ 
      type: 'TAMBAH_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
}

export function* watchIncreaseCounter() {

  yield takeLatest('TAMBAH', increaseCounterAsync);
}

function* decreaseCounter() {
  try {
    yield delay(2000);
  
    yield put({ 
      type: 'HAPUS_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
}

export function* watchDecreaseCounter() {

  yield takeLatest('HAPUS', decreaseCounter);
}