  const worker = new Worker(new URL('./worker', import.meta.url))
  console.log('worker start', worker)