export interface Rental{
    rentalId:number;
    carId:number;
    customerId:number;
    brandName:string;
    companyName:string;
    rentDate:Date;
    returnDate?:Date;
}