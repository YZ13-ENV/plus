import AdviceCard from "@/components/shared/AdviceCard";
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
              <AdviceCard title={<span className="text-xl font-medium text-neutral-200">Ambient подсветка для работ</span>} 
              cover={<Image src='/shot_preview.png' fill className="object-cover" alt='ambient-preview' />} />
              <AdviceCard title={<span className="text-xl font-medium text-neutral-800">Реакции под комментариями</span>} cover={
                  <video className="object-cover h-full" autoPlay loop controls={false}>
                    <source src="/reactions.mp4" />
                  </video>
              } />
              <AdviceCard title={<span className="text-xl font-medium text-neutral-200">В два раза больше медиа блоков</span>} content={<span className="text-9xl font-bold">x2</span>} />
            </div>
          </div>
        </div>
      </main>
    )
}
