export default function App() {
  return (
    // grids in tailwind css 
    // <div className ='grid grid-cols-12'>
    //   <div className = 'bg-blue-300 col-span-4'>
    //       child1
    //   </div>
    //   <div className = 'bg-red-300 col-span-5'>
    //       child1
    //   </div>
    //   <div className = 'bg-black-300 col-span-3'>
    //       child1
    //   </div>
    // </div>
    //  responsiveness in websites 
    <div className =' grid grid-cols-12'>
      <div className = 'col-span-12 sm:col-span-4 bg-red-300'>
          child1
      </div>
      <div className = ' col-span-12 sm:col-span-5 bg-green-300'>
          child1
      </div>
      <div className = 'col-span-12  sm:col-span-3 bg-blue-300'>
          child1
      </div>
    </div>
  )
}