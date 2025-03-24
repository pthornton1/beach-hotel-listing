import {Hotel, sortApplied} from '../types/types'

function sortHotels(hotelList: Hotel[], by:sortApplied = 'price'):Hotel[] {
    // To do: write sort function that sorts hotels and then calls setHotels
    const updatedHotels = [...hotelList]
    if (by==='price') {
        updatedHotels.sort((a,b) => {
            return b.bookingDetails.price.amount - a.bookingDetails.price.amount
        })
    }
    if (by==='rating') {
        updatedHotels.sort((a,b) => {
            return b.resort.starRating - a.resort.starRating 
        })
    }
    if (by==='alphabetically') {
        updatedHotels.sort((a,b) => {
            const nameA = a.resort.name.toLowerCase()
            const nameB = b.resort.name.toLowerCase()

            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0
        })
    }
    return updatedHotels;
};

export default sortHotels