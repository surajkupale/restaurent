export class RestaurentModel{
    name: string = '';
    email: string = '';
    mobile: string = '';
    restAddress: string = '';
    restServices: string = '';
}

interface RestaurentModelInterface{
    name: string;
    email: string;
    mobile: string;
    restAddress: string;
    restServices: string;
}


export class RestaurentModelResponce{
    restData: RestaurentModelInterface[] = [];
}