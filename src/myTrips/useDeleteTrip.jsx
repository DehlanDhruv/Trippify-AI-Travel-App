import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../service/firbaseConfig"; 
import { toast } from "sonner";

export const useDeleteTrip = async (tripId) => {
    if (!tripId) {
        console.error("❌ Trip ID is required for deletion.");
        return;
    }
    try {
        const tripRef = doc(db, "AITrips", tripId); 
        await deleteDoc(tripRef); 
        console.log(`✅ Trip with ID ${tripId} deleted successfully.`);
        toast("Trip deleted successfully."); 
    } catch (error) {
        console.error("❌ Error deleting trip:", error);
        toast("Error deleting trip.");
    }
};
