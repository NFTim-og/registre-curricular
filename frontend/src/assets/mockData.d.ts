declare module '../../../../assets/mockData.json' {
  interface Competence {
    id: string;
    competencia: string;
    criteris: {
      id: string;
      description: string;
      indicateurs: string[];
    }[];
  }

  interface Saber {
    id: string;
    saber: string;
    sabers: {
      id: string;
      description: string;
    }[];
  }

  interface MockData {
    competences: Competence[];
    sabers: Saber[];
  }

  const value: MockData;
  export default value;
} 