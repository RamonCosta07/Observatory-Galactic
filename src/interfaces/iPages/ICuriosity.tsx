export interface IApodData {
  title: string;
  explanation: string;
  url: string;
  date: string;
}

export interface ICuriositiesProps {
  initialApodData: IApodData | null;
}
