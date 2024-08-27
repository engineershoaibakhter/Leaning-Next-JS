import React from 'react'

const InputForm = () => {
  return (
    <div>
        {/* Todo Form */}
        <form className='flex items-center gap-4 h-10 md:h-12'>
            <input type="text" className='flex-1 h-full border-[1px] border-gray-600
            bg-transparent pl-4 pr-6' />
            <button>Add todo</button>
        </form>
        {/* TodoList */}
    </div>
  )
}

export default InputForm