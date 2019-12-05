import { Injectable } from "@angular/core";

Injectable();
export class DataEntry {
  owners = [
    { id: 1, name: "ap. 1" },
    { id: 2, name: "ap. 2" },
    { id: 3, name: "ap. 3" },
    { id: 4, name: "ap. 4" },
    { id: 5, name: "ap. 5" },
    { id: 6, name: "ap. 6" },
    { id: 7, name: "ap. 7" },
    { id: 8, name: "ap. 8" },
    { id: 9, name: "ap. 9" },
    { id: 10, name: "ap. 10" },
    { id: 11, name: "ap. 11" },
    { id: 12, name: "parter" },
    { id: 13, name: "parking lot #3" },
    { id: 14, name: "parking lot #5" }
  ];
  flats = [
    { id: 1, name: "ap. 1", owner: 1, active: true },
    { id: 2, name: "ap. 2", owner: 2, active: true },
    { id: 3, name: "ap. 3", owner: 3, active: false },
    { id: 4, name: "ap. 4", owner: 4, active: true },
    { id: 5, name: "ap. 5", owner: 5, active: true },
    { id: 6, name: "ap. 6", owner: 6, active: true },
    { id: 7, name: "ap. 7", owner: 7, active: true },
    { id: 8, name: "ap. 8", owner: 8, active: true },
    { id: 9, name: "ap. 9", owner: 9, active: true },
    { id: 10, name: "ap. 10", owner: 10, active: true },
    { id: 11, name: "ap. 11", owner: 11, active: true },
    { id: 12, name: "parter", owner: 12, active: true }
  ];
  parkingLots = [
    {
      id: 1,
      name: "паркомясто 1",
      owner: 9,
      ownerName: "Караджов",
      active: true
    },
    { id: 2, name: "паркомясто 2", owner: 5, ownerName: "Тино", active: true },
    {
      id: 3,
      name: "паркомясто 3",
      owner: 13,
      ownerName: "Ел. кола",
      active: true
    },
    { id: 4, name: "паркомясто 4", owner: 6, ownerName: "Цанко", active: true },
    {
      id: 5,
      name: "паркомясто 5",
      owner: 14,
      ownerName: "Джипа",
      active: true
    },
    { id: 6, name: "паркомясто 6", owner: 1, ownerName: "Иван", active: true },
    { id: 7, name: "паркомясто 7", owner: 2, ownerName: "Денис", active: true },
    {
      id: 8,
      name: "паркомясто 8",
      owner: 9,
      ownerName: "Караджов",
      active: true
    }
  ];
}
