export const formatTimeTo12Hour = (createdAt:Date) => {
    if (!createdAt) return ""; // Handle missing or invalid dates
  
    const date = new Date(createdAt);
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, "0"); // Add leading zero to minutes
  
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };