import { createContext, useState} from "react";

//1. Create context
export const FilterContext = createContext();

//2. Create provider, consumer and export
export function FilterProvider({ children }) {
	const [filters, setFilters] = useState({
		minPrice: 0,
		category: "all",
	});
	return (
		<FilterContext.Provider
			value={
				{
					filters,
					setFilters,
			}}>
			{children}
			
		</FilterContext.Provider>
	);
}
