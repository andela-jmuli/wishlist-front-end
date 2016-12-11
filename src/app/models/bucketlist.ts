export class Bucketlist {
    id: number;
    name: string;
    description: string;
    date_created: string;
    date_modified: string;
    items = new Array<Items>();
}


export class Items {
    id: number;
    item_name: string;
    date_created: string;
    date_modified: string;
    is_done: string;

}
