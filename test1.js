import { Go1 } from "@droneblocks/go1-js"

const Dog = new Go1()

Dog.setLedColor(0, 255, 0)
await Dog.wait(2000)
Dog.setLedColor(0, 0, 255)
await Dog.wait(2000)
Dog.setLedColor(255, 0, 0)

console.log("Done")
