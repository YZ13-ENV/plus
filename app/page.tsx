import Image from "next/image";

export default function Home() {
    return (
      <main className='w-full h-full flex items-center gap-4'>
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-96 p-5 gap-2 flex flex-col rounded-2xl bg-neutral-950 border border-neutral-800">
            <div className="w-full h-fit flex items-center gap-2">
              <Image src='/bum.svg' width={24} height={24} alt='bum-logo' />
              <span className="text-2xl font-semibold text-neutral-300">bum</span>
            </div>
            <div className="w-full h-full flex items-center gap-2 justify-start">
              <div className="h-full relative w-1/4 rounded-2xl flex gap-2 flex-col bg-neutral-900">
                <div className="p-3 z-10 backdrop-blur-sm rounded-2xl">
                  <span className="text-xl font-medium text-neutral-200">Ambient подсветка для работ</span>
                </div>
                <div className="absolute w-full h-full rounded-2xl overflow-hidden">
                  <Image src='/shot_preview.png' fill className="object-cover" alt='ambient-preview' />
                </div>
                {/* <span className="text-neutral-300">на bum</span> */}
              </div>
              <div className="h-full relative w-1/4 rounded-2xl flex gap-2 flex-col bg-neutral-900">
                <div className="p-3 z-10 backdrop-blur-sm rounded-2xl">
                  <span className="text-xl font-medium text-neutral-800">Реакции под комментариями</span>
                </div>
                <div className="absolute w-full h-full rounded-2xl overflow-hidden">
                  <video className="object-cover h-full" autoPlay loop src="/reactions.mp4" />
                </div>
              </div>
              <div className="h-full relative w-1/4 rounded-2xl flex gap-2 flex-col bg-neutral-900">
                <div className="p-3 z-10">
                  <span className="text-xl font-medium text-neutral-200">В два раза больше медиа блоков</span>
                </div>
                <div className="w-full h-full flex items-center justify-center"><span className="text-9xl font-bold">x2</span></div>
              </div>
              {/* <div className="h-full w-1/4 rounded-2xl flex flex-col p-3 bg-neutral-900"></div> */}
            </div>
          </div>
        </div>
      </main>
    )
}
