import { useId, forwardRef } from "react";

type InputProps = {
    label?: string;
    type: string;
    error?: string;
    className?: string;
    labelClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props: InputProps, ref){
    const { label, type, error, className, labelClassName, ...rest } = props;
    const inputId = useId();

    return (
        <>
            <div>
                {label && <label className={`block text-gray-500 pr-4 ${labelClassName}`} htmlFor={inputId}>{label}</label>}
            </div>
            <div>
                <input 
                    ref={ref}
                    id={inputId}
                    className={`border-gray-200 rounded ${className}`}
                    type={type || "text"}
                    {...rest}
                    />
                {error && <span className="absolute top-full text-red-400 text-sm">{error}</span>}
            </div>
        </>
    )
})