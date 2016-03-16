
import Firebase from 'Firebase'
const ref = new Firebase('https://scorching-heat-3548.firebaseio.com/items');

ref.push({
    name: "first-item",
    label: "First item",
    description: "Tatata",
    active: true
})
ref.push({
    name: "second-item",
    label: "Second item",
    description: "Tetetetet",
    active: false
})
ref.push({
    name: "third-item",
    label: "Thrid item",
    description: "Titititi",
    active: true
})

export ref