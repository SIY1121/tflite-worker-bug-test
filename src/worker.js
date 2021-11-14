// Adds the CPU backend.
import '@tensorflow/tfjs-backend-cpu';
// Import @tensorflow/tfjs-core
import * as tf from '@tensorflow/tfjs-core';
// Import @tensorflow/tfjs-tflite.
import * as tflite from '@tensorflow/tfjs-tflite';

tflite.setWasmPath('/tflite/')

const url = 'https://storage.googleapis.com/magentadata/models/onsets_frames_transcription/tflite/onsets_frames_wavinput.tflite'

console.log('worker: loading tflite model...')

tflite
    .loadTFLiteModel(url)
    .then((model) => {
        console.log('worker: model loaded', model)
        return model
    }).then(model => {
        const input = tf.zeros([17920])
        const output = model.predict(input)
        console.log('worker: predict result', output)
    })