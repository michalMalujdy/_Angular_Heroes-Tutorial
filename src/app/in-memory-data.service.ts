import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: "Neptun" },
      { id: 2, name: "Zeus" },
      { id: 3, name: "Hera" },
      { id: 4, name: "Ronaldinho" },
      { id: 5, name: "Hercules" },
      { id: 6, name: "Mars" },
      { id: 7, name: "Magneto" },
      { id: 8, name: "Wolverine" },
    ];
    return {heroes};
  }
}
