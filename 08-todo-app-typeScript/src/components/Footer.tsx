export const Footer: React.FC<Props> => ({
   todos,
   onClearCompleted,
   onClearCompleted }) => {
   return (
      <footer className="footer">
         <span className="todo-count">
            <strong>{todos.length}</strong> tareas pendiendes
         </span>

         <Filters
            filterSelected={filterSelected}
            onFilterChange={onFilterChange} />

      </footer>
   )
}