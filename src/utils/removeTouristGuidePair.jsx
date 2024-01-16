import axios from 'axios'
import { baseApi } from './baseApi';
import { toast } from 'react-toastify';


export const removeTouristGuidePair = async (guideId, touristId) => {

    try {
      await axios.delete(baseApi + `tourists/guides/${touristId}/${guideId}`);
            toast.warning('The guide has been removed from your "Watchlist".', {autoClose:2000});
    } catch (error) {
      console.error("Error deleting tourist-guide pair:", error.message);
      toast.error("The guide cannot be deleted.");
    }
  }