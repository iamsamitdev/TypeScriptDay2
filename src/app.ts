// -------- การ Import และ Export ของ Module ใน TypeScript --------

// การ import แบบปกติผ่านชืื่อ module ที่เราต้องการ
// import { message as msg, messageTH, hello, welcome as wel } from './topics/hello'

// การ import แบบมี default ผ่านชื่อ module ที่เราต้องการ
// import logMessage from './topics/logger'

// การ import สามารถเปลี่ยนชื่อเป็นอะไรก็ได้
// import logs from './topics/logger'
// import { default as logs } from './topics/logger'

// Import ทุกอย่างเป็น Object
// import * as hey from './topics/hello'

// เรียกใช้งานตัวแปรและฟังก์ชันที่ import มา
// console.log(message)
// console.log(messageTH)
// hello()
// welcome()
// console.log(msg)
// wel()

// เรียกใช้งานฟังก์ชันที่ import มา
// logMessage('Hello, world!')

// logs('Hello, world!')

// เรียกใช้งาน Object ที่ import มา
// console.log(hey.message)
// console.log(hey.messageTH)
// hey.hello()
// hey.welcome()

// ---------------------------------
// import { variabletype } from './topics/variable_type'

// variabletype()

// ---------------------------------

// import { interfaceandtype } from './topics/interface_and_type'

// interfaceandtype()

// ---------------------------------

// import { functiontype } from './topics/function'

// functiontype()

// ---------------------------------

// import { classObject } from './topics/class_object'

// classObject()

// ---------------------------------
import { generic } from './topics/generic'

generic()
