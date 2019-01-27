export function determineIcon(amenity) {
  switch(amenity) {
      case 'Coffee':
          return  'fas fa-coffee';
      
      case 'Dryer':
          return 'fas fa-wind';

      case 'Elevator':
          return 'fas fa-level-up-alt';

      case 'Heating':
          return 'fab fa-squarespace';

      case 'Kitchen':
          return 'fas fa-utensils';

      case 'Laptop':
          return 'fas fa-laptop';

      case 'Shampoo':
          return 'fas fa-feather-alt';

      case 'Tv':
          return 'fas fa-tv';

      case 'Wifi':
          return 'fas fa-wifi';
  }
}