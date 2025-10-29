export interface IProcessedUserData {
  colourFrequency: IColourFrequency[];
  usersAges: IUsersAges[];
}

export interface IColourFrequency {
  colour: string;
  count: number;
}

export interface IUsersAges {
  firstName: string;
  lastName: string;
  currentAge: number;
  ageIn20Years: string;
}
