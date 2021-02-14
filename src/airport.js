// Airport class
class Airport {

  constructor(hangarCapacity = 10) {
    this.hangar = [];
    this.hangarCapacity = hangarCapacity;
  }

  land(plane) {
    if (this.hangar.length === this.hangarCapacity) {
      return "Hangar is full!";
    }
    this.hangar.push(plane);
  }

  takeOff(plane) {
    this.hangar = this.hangar.filter((planeInHangar) => {
      if(planeInHangar.name === plane.name){
        return false;
      } else {
        return true;
      }
    });
  }

}
