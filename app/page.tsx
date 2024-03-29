import Header from "@/components/widgets/header";
import { table_data } from "@/const/plus-table-data";
import { BiCheck, BiX } from "react-icons/bi";

export default async function Home() {
  const fetched_table_data = await table_data()
  return (
    <>
      {/* <StarField /> */}
      <Header />
      <main className='w-full max-w-7xl mx-auto h-full flex flex-col gap-4 px-6 my-12'>
        <span className='text-4xl font-bold my-12'>Что вам даст плюс?</span>
        <div className="w-full rounded-2xl bg-muted p-6">
          <table className="w-full">
            <thead>
              <tr className="text-muted-foreground">
                <td className="text-sm">Название</td>
                <td className="w-24 text-center text-sm">Без плюса</td>
                <td className="w-24 text-center text-sm">С плюсом</td>
              </tr>
            </thead>
            <tbody>
              {
                fetched_table_data &&
                fetched_table_data.map((row, i) =>
                  <tr key={row.key + '-' + i} className="h-12 border-b">
                    <td>{row.name}</td>
                    <td className="text-muted-foreground">
                      {
                        row.access.forDefault
                          ? <BiCheck className='mx-auto' size={24} />
                          : <BiX className='mx-auto' size={24} />
                      }
                    </td>
                    <td className="text-muted-foreground">
                      {
                        row.access.forSubscriber
                          ? <BiCheck className='mx-auto' size={24} />
                          : <BiX className='mx-auto' size={24} />
                      }
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

      </main>
    </>
  )
}
