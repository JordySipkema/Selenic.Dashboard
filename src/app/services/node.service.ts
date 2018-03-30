import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class NodeService {

  constructor(private http: Http) { }


  getData(): Observable<Node[]> {
    const apiurl = 'http://localhost:3000/api/nodes/';

    return this.http.get(apiurl)
        .map(res => {
          return res.json().result.map(item => {
            return new Node(
                item.data._id,
                item.data.hardware_id,
                item.data.name,
                item.data.sensors
            );
          });
        });
  }
}

export class Node {
  public static Empty(): Node {
    return new Node('', -1, '', null);
  }

  constructor(public id: string,
              public hardware_id: number,
              public name: string,
              public sensors: [Sensor] ) {}
}

export class Sensor {
  constructor(
      public id: string,
      public type: number,
      public config: SensorConfig
  ) {}
}

export class SensorConfig {
  constructor(
      public pin: number,
      public default_value: number,
  ) {}
}