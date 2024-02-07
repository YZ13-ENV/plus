import Header from "@/components/widgets/header";
import { table_data } from "@/const/plus-table-data";
import { BiCheck, BiX } from "react-icons/bi";
import { StarField } from "ui";

export default function Home() {
    return (
      <>
        <StarField />
        <Header />
        <main className='w-full max-w-7xl mx-auto h-full flex flex-col gap-4 px-6 my-12'>
          <span className='text-4xl font-bold my-12'>Что вам даст плюс?</span>
          <table>
            <thead>
              <tr className="text-muted-foreground">
                <td className="text-sm">Название</td>
                <td className="w-24 text-center text-sm">Без плюса</td>
                <td className="w-24 text-center text-sm">С плюсом</td>
              </tr>
            </thead>
            <tbody>
              {
                table_data.map(row =>
                  <tr key={row.key} className="h-12 border-b">
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
        </main>
      </>
    )
}
