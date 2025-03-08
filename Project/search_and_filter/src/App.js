import Category from "./Category";


function App() {
  return (
    <>
        <div className='py-[40px]'>
                <div className=' max-w-[1320px] mx-auto'>
                  <h1 className="text-center text-[40px] font-bold mb-[30px]">Our Procucts</h1>
                    <div className='grid grid-cols-[30%_auto] gap-[20px]'>
                        <div className='bg-gray-200'>
                            <Category/>
                        </div>
                    </div>
                </div> 
        </div>
    </>
  );
}

export default App;
