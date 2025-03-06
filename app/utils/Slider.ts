export interface Event {
  id: number; 
  eventImage: string; 
  eventName: string; 
  eventDate: string; 
  eventDescription: string; 
  registrationLink: string; 
  workbookDownloadLink?: string; 
}

export const events: Event[] = [
{
  id: 1, 
  eventImage: "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845744/seminar5_newxnq.png",
  eventName: "Tech Conference 2023",
  eventDate: "2023-11-15",
  eventDescription: "Join us for the biggest tech conference of the year!",
  registrationLink: "https://example.com/register",
  workbookDownloadLink: "https://example.com/workbook",
},
{
  id: 2, 
  eventImage: "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845744/seminar7_x6cydo.png",
  eventName: "AI & Machine Learning Workshop",
  eventDate: "2023-12-01",
  eventDescription: "Learn the latest in AI and Machine Learning from industry experts.",
  registrationLink: "https://example.com/register",
  workbookDownloadLink: "https://example.com/workbook",
},
{
  id: 3, 
  eventImage: "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845743/seminar8_zt8q5g.png",
  eventName: "Web Development Bootcamp",
  eventDate: "2024-01-10",
  eventDescription: "A comprehensive bootcamp to master modern web development.",
  registrationLink: "https://example.com/register",
  workbookDownloadLink: "https://example.com/workbook",
},
{
  id: 4, 
  eventImage: "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845745/seminar6_qsguxs.png",
  eventName: "Tech Conference 2023",
  eventDate: "2023-11-15",
  eventDescription: "Join us for the biggest tech conference of the year!",
  registrationLink: "https://example.com/register",
  workbookDownloadLink: "https://example.com/workbook",
},
{
  id: 5, 
  eventImage: "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845744/seminar4_uluodz.png",
  eventName: "AI & Machine Learning Workshop",
  eventDate: "2023-12-01",
  eventDescription: "Learn the latest in AI and Machine Learning from industry experts.",
  registrationLink: "https://example.com/register",
  workbookDownloadLink: "https://example.com/workbook",
},
{
  id: 6, 
  eventImage: "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845742/seminar2_m2qr1j.png",
  eventName: "Web Development Bootcamp",
  eventDate: "2024-01-10",
  eventDescription: "A comprehensive bootcamp to master modern web development.",
  registrationLink: "https://example.com/register",
  workbookDownloadLink: "https://example.com/workbook",
},
{
  id: 7, 
  eventImage: "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845741/seminar3_hxpet9.jpg",
  eventName: "AI & Machine Learning Workshop",
  eventDate: "2023-12-01",
  eventDescription: "Learn the latest in AI and Machine Learning from industry experts.",
  registrationLink: "https://example.com/register",
  workbookDownloadLink: "https://example.com/workbook",
},
{
  id: 8,
  eventImage: "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845741/seminar1_aamt9y.jpg",
  eventName: "Web Development Bootcamp",
  eventDate: "2024-01-10",
  eventDescription: "A comprehensive bootcamp to master modern web development.",
  registrationLink: "https://example.com/register",
  workbookDownloadLink: "https://example.com/workbook",
},
];