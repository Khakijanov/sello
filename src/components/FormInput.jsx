

function FormInput({label, placeholder, name, type}) {
  return (


<label
  htmlFor="Username"
  className="relative block rounded-full border border-gray-200 shadow-sm focus-within:border-secondaryColor focus-within:ring-1 focus-within:ring-secondaryColor py-2 w-full text-textColor "
>
  <input
    type={type}
    name={name}
    className="peer border-none bg-transparent placeholder-transparent text-textColor focus:border-transparent focus:outline-none focus:ring-0 px-3 w-full "
    placeholder={placeholder}
  />

  <span
    className="pointer-events-none absolute start-2.5 -top-2 -translate-y-1/2 bg-transparent p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs"
  >
    {label}
  </span>
</label>
  )
}

export default FormInput