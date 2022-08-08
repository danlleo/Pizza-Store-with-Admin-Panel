import Employees from '../models/employees'

export async function signInController(req: any, res: any) {
    if (res.employee !== null) {
        res.json({
            message: 'Sign in successful',
            employee: res.employee
        })
    } else {
        res.json({
            message: 'Sign in failed'
        })
    }
}

export async function signUpController(req: any, res: any) {
    const { name, first, last, email, password, phone, home_address } = req.body
    const newEmployee = new Employees({ 
        name: name || {
            first: first,
            last: last
        },
        email: email, 
        password: password,
        phone: phone,
        home_address: home_address,
        created_at: Date.now(),
        updated_at: Date.now()
     })

     try {
        const employee = await newEmployee.save()
        res.status(201).json(employee)
     } catch (error) {
        res.status(500).json(error)
     }
}
