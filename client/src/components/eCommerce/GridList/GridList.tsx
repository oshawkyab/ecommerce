
type GridListProps<T> = {
   records: T[];
   renderItem: (record: T) => React.ReactNode
}

const GridList = <T,>({ records, renderItem }: GridListProps<T>) => {

   const categoriesList = records.length > 0 ? (
      records.map((record) => {
         return (
            renderItem(record)
         )
      })
   ) : (
      // Empty Records
      <div className="col-span-full flex min-h-62.5 items-center justify-center">
         <p className="text-sm font-medium text-gray-400">
            There are no items to display in this section.
         </p>
      </div>
   )



   return (
      <div className="grid grid-cols-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
         {categoriesList}
      </div>
   )

}

export default GridList