export const generic = () => {

  // 1. การใช้ Generic เบื้องต้น
  function identity<T>(arg: T): T {
    return arg
  }

  // T เป็น Generic Type Parameter ที่ใช้แทนประเภทของข้อมูลที่เราส่งเข้าไป
  //  เมื่อเรียกใช้ฟังก์ชัน identity<number>(10) → TypeScript เข้าใจว่า T = number

  //   console.log(identity<number>(10)) // 10
  //   console.log(identity<string>("Hello")) // 'Hello'

  // 2. ใช้ Generic กับ Arrays และ Objects
  function getFirstElement<T>(arr: T[]): T {
    return arr[0]
  }

  // T[] หมายถึง "Array ของประเภท T"

  //   console.log(getFirstElement<string>(['apple', 'banana', 'cherry'])) // 'apple'
  //   console.log(getFirstElement<number>([10, 20, 30])) // 10

  // 3. ใช้ Generic กับ Interface
  interface Box<T> {
    value: T
  }

  const numberBox: Box<number> = { value: 100 }
  const stringBox: Box<string> = { value: "TypeScript" }

  //   console.log(numberBox.value) // 100
  //   console.log(stringBox.value) // 'TypeScript'

  // 📌 เราสามารถกำหนด Generic Type ให้กับ Interface ได้

  // 4. ใช้ Generic กับ Class

  class DataStore<T> {
    private data: T[] = []

    addItem(item: T): void {
      this.data.push(item)
    }

    getItems(): T[] {
      return this.data
    }
  }

  // 📌 ใช้ Generic เพื่อให้ Class สามารถทำงานกับข้อมูลได้หลายประเภท

  const numberStore = new DataStore<number>()
  numberStore.addItem(5)
  numberStore.addItem(10)
  //   console.log(numberStore.getItems()) // [5, 10]

  const stringStore = new DataStore<string>()
  stringStore.addItem("TypeScript")
  //   console.log(stringStore.getItems()) // ['TypeScript']

  // 5. ใช้ Generic กับ Constraints
  // สามารถใช้ extends กำหนดให้ Generic รับเฉพาะประเภทที่ต้องการได้
  function printName<T extends { name: string }>(obj: T): void {
    console.log(`Hello, ${obj.name}`)
  }

  // 📌 T extends { name: string } บังคับให้ T ต้องมี property name

  //   printName({ name: 'John' }) // ✅ Hello, John
  //   printName({ name: 'Alice', age: 30 }) // ✅ Hello, Alice
  // printName({ age: 25 }) // ❌ Error: Property 'name' is missing

  // 6. ใช้ Generic กับ Multiple Types

  function combine<T, U>(a: T, b: U): [T, U] {
    return [a, b]
  }

  // 📌 สามารถใช้ มากกว่า 1 Generic Type Parameter ได้ เช่น <T, U>

  //   console.log(combine<string, number>('Hello', 100)) // ['Hello', 100]
  //   console.log(combine<boolean, string>(true, 'World')) // [true, 'World']

  //  7. ใช้ Generic กับ Default Type
  function createArray<T = string>(length: number, value: T): T[] {
    return new Array(length).fill(value)
  }

  // 📌 T = string หมายความว่า ถ้าไม่ได้กำหนดประเภทให้ T จะใช้ string เป็นค่า default

  //   console.log(createArray(3, 'Hello')) // ['Hello', 'Hello', 'Hello']
  //   console.log(createArray<number>(3, 5)) // [5, 5, 5]

  // 8. ใช้ Generic กับ Utility Types
  // TypeScript มี Utility Types หลายตัวที่ใช้ Generic เช่น:
  // Partial<T>: ทำให้ทุก property ใน T เป็น optional
  // Readonly<T>: ทำให้ทุก property ใน T เป็น readonly
  // Record<K, T>: ใช้สร้าง object ที่ key เป็น K และ value เป็น T

  interface User {
    id: number
    name: string
    email: string
  }

  // Partial ทำให้ทุก property เป็น optional
  const updateUser = (user: Partial<User>) => {
    console.log(user)
  }
  //   updateUser({ name: "John" }) // ✅ ทำงานได้แม้ไม่มี id หรือ email

  // Readonly ทำให้แก้ไขค่าไม่ได้
  const user: Readonly<User> = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  }
  // user.name = 'Bob' // ❌ Error

  // Record ใช้สร้าง object ที่มี key เป็น string และ value เป็น User
  const userMap: Record<string, User> = {
    user1: { id: 1, name: "John", email: "john@example.com" },
    user2: { id: 2, name: "Jane", email: "jane@example.com" },
  }

  //   console.log(userMap)

  // 9. ใช้ Generic กับ Function Overload
  function merge<T, U>(a: T, b: U): T & U {
    return { ...a, ...b }
  }

  // 📌 ใช้ T & U เพื่อรวม object สองตัวเข้าด้วยกัน

  const person = merge({ name: "John" }, { age: 30 })
  //   console.log(person) // { name: 'John', age: 30 }

  //   10. ใช้ Generic กับ React / Vue / Angular

  interface ButtonProps<T> {
    label: string
    action: (value: T) => void
  }

  // 📌 <T,> (มี , หลัง T) ช่วยป้องกันการสับสนกับ JSX

  //   const Button = <T>({ label, action }: ButtonProps<T>) => {
  //     return <button onClick={() => action({} as T)}>{label}</button>
  //   }

  // Vue: ใช้ Generic กับ Composition API
  // import { ref } from 'vue'

  // function useState<T>(initialValue: T) {
  //   const state = ref<T>(initialValue)
  //   return state
  // }

  // const count = useState<number>(0)

  // Angular: ใช้ Generic กับ Service
  // @Injectable({
  //     providedIn: 'root'
  //   })
  //   export class ApiService<T> {
  //     constructor(private http: HttpClient) {}

  //     getData(url: string): Observable<T> {
  //       return this.http.get<T>(url)
  //     }
  //   }

  // 📌 สรุป
  // ✅ Generic ทำให้โค้ด Reusable และ Type-Safe
  // ✅ ใช้ได้กับ Function, Interface, Class และ Utility Types
  // ✅ ใช้ extends เพื่อกำหนดข้อจำกัดของ Generic
  // ✅ ใช้ได้กับ Framework ต่าง ๆ เช่น React, Vue, Angular

  //   เปรียบเทียบ Generic (T) vs any vs unknown ใน TypeScript
  // 1️⃣ Generic (T) คืออะไร?
  // มี Type Safety → รู้ประเภทที่แท้จริงของข้อมูลตั้งแต่ต้น
  // ใช้ซ้ำได้ (Reusable) → ใช้กับหลายประเภทได้โดยไม่ต้องใช้ any
  // สามารถกำหนดข้อจำกัด (extends) ได้ เช่น กำหนดให้ T ต้องมี property บางอย่าง

  //   ✅ ตัวอย่าง Generic
  function identities<T>(arg: T): T {
    return arg
  }

  //   console.log(identities<number>(10)) // ✅ 10
  //   console.log(identities<string>("Hello")) // ✅ 'Hello'

  //   📌 ข้อดี:
  // T ทำให้รู้ว่า identity(10) → T = number และ identity('Hello') → T = string
  // ป้องกันข้อผิดพลาด เช่น identity<number>('test') ❌ จะ Error

  // 2️⃣ any คืออะไร?
  //     ไม่มี Type Safety → ใช้ค่าอะไรก็ได้โดยไม่แจ้งเตือน
  // ใช้งานสะดวก แต่มีความเสี่ยง → อาจทำให้เกิดข้อผิดพลาด Runtime

  // ❌ ตัวอย่าง any ที่ไม่ปลอดภัย
  let data: any

  data = "Hello"
  console.log(data.toUpperCase()) // ✅ 'HELLO'

  data = 100
  // console.log(data.toUpperCase()) // ❌ Runtime Error: data.toUpperCase is not a function

  // 📌 ข้อเสีย
  // data สามารถเปลี่ยนเป็น อะไรก็ได้ ทำให้โค้ดอาจพังขณะรันจริง

  //   3️⃣ unknown คืออะไร?
  // รับค่าได้ทุกประเภทเหมือน any
  // แต่ต้องตรวจสอบ (typeof หรือ Type Guard) ก่อนใช้งาน
  // ปลอดภัยกว่า any → ป้องกันข้อผิดพลาด Runtime

  // ✅ ตัวอย่าง unknown ที่ปลอดภัยกว่า any
  let info: unknown

  info = "Hello"
  if (typeof info === "string") {
    console.log(info.toUpperCase()) // ✅ 'HELLO'
  }

  info = 100
  if (typeof info === "number") {
    console.log(info.toFixed(2)) // ✅ '100.00'
  }

  // 📌 ข้อดี:
  // ป้องกันข้อผิดพลาด เช่น data.toUpperCase() จะไม่เกิดขึ้นหากไม่ได้ตรวจสอบ Type ก่อน

  // 📌 ข้อเสีย:
  // ต้องใช้ typeof หรือ Type Guard เพิ่มเติม ทำให้โค้ดยาวขึ้น
}
