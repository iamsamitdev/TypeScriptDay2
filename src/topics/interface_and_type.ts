export const interfaceandtype = () => {

    // ตัวอย่างการสร้าง Interface ใน TypeScript
    interface User {
        name: string
        age: number
    }

    // Merge Interface
    interface User {
        gender: string
    }

    // สร้าง Object จาก Interface
    const user: User = {
        name: 'John',
        age: 30,
        gender: 'Male'
    }

    // การสืบทอด Interface
    interface Admin extends User {
        isAdmin: boolean
    }

    // console.log(user.name, user.gender, user.age)

    // สร้าง Object จาก Interface ที่สืบทอด
    const admin: Admin = {
        name: 'Jane',
        age: 25,
        gender: 'Female',
        isAdmin: true
    }

    // console.log(admin.name, admin.age, admin.gender, admin.isAdmin)

    // ตัวอย่างการสร้าง Type ใน TypeScript
    type Person = {
        name: string
        age: number
    }

    // Union Type
    type Role = Person & { isAdmin: boolean }

    // สร้าง Object จาก Type
    const person: Role = {
        name: 'John',
        age: 30,
        isAdmin: true
    }

    console.log(person.name, person.age, person.isAdmin)
}