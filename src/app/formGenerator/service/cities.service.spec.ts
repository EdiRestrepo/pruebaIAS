import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(CitiesService);
  });




  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('CarService getDeparments()',(done:DoneFn)=>{
    service.getDeparments().subscribe(
      deparments => {
        expect(deparments.length).toBe(33),
        done()
      }
    )
  })
});
