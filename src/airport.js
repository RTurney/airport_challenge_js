// Airport class
class Airport {

  constructor() {
    this.hangar = [];
  }

  land(plane) {
    this.hangar.push(plane);
  }

  takeOff(plane) {
    this.hangar = this.hangar.filter((planeInHangar) => {
      if(planeInHangar.name === plane.name){
        return false;
      }
    });
  }

}
