import { Injectable } from '@angular/core'

@Injectable()
export class Configuration{
    public Server: string = 'https://wishlistcp.herokuapp.com';
    public AllBucketlistsUrl: string = '/bucketlists';
    public ServerBucketlistsUrl = this.Server + this.AllBucketlistsUrl;
}