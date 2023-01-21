console.log('Hello Parcel')

const test=async()=>{
    const promise = Promise.resolve(123)
    console.log(await promise)
}
test()