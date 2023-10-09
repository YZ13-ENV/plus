
export default function Home() {
    return (
      <main className='w-full h-full flex items-center gap-4'>
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-96 p-5 gap-2 flex flex-col rounded-2xl bg-neutral-950 border border-neutral-800">
            <div className="w-full h-fit">
              <span className="text-2xl font-semibold text-neutral-300">bum</span>
            </div>
            <div className="w-full h-full flex items-center gap-2 justify-between">
              <div className="h-full w-1/4 rounded-2xl flex gap-2 flex-col p-3 bg-neutral-900">
                <span className="text-xl font-medium text-neutral-200">Ambient подсветка для работ</span>
                <div className="w-full h-full">
                  
                </div>
                {/* <span className="text-neutral-300">на bum</span> */}
              </div>
              <div className="h-full w-1/4 rounded-2xl flex flex-col p-3 bg-neutral-900"></div>
              <div className="h-full w-1/4 rounded-2xl flex flex-col p-3 bg-neutral-900"></div>
              <div className="h-full w-1/4 rounded-2xl flex flex-col p-3 bg-neutral-900"></div>
            </div>
          </div>
        </div>
      </main>
    )
}
