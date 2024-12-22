interface InputProps {
    placeholder: string,
    reference?: any
    className?: string,
    type: string
}

export function Input({ placeholder, reference, className, type }: InputProps) {
    return <div>
        <input type={type} placeholder={placeholder} className={`${className} ? ${className} : " px-4 py-2 border rounded m-2"`} ref={reference}></input>
    </div >
}