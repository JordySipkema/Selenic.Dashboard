import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class EmonService {
  constructor(private http: Http) {
  }

  getData(): Observable<EmonData[]> {
    const apiurl = 'http://selenic-api.jordysipkema.nl/nodes/measurements/5/';

    return this.http.get(apiurl)
        .map(res => {
          return res.json().result.map(item => {
            return new EmonData(
                item.data.Time,
                item.data.Energy_1,
                item.data.Energy_2,
                item.data.Energy_total,
                item.data.DeviceID
            );
          });
        });
  }
}

export class EmonData {
  public static Empty(): EmonData {
    return new EmonData(new Date(1970, 1, 1), 0, 0, 0, '0');
  }

  constructor(public datetime: Date,
              public energy_1: number,
              public energy_2: number,
              public energy_total: number,
              public device_id: string ) {}
}
