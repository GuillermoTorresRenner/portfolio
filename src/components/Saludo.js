
const Saludo = ({children}) => {
  return (
  <div className='mb-6 border-l-4 border-r-4 h-1/6 lg:h-40 w-3/5 lg:w-1/3 py-auto mx-auto rounded-3xl border-green-500 flex items-center justify-center'>
    <h1 className='text-4xl text-center text-green-500 '>
       {children}
    </h1>
  </div>
  )
}

export default Saludo