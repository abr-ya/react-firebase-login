import { FieldValue } from "firebase/firestore";

export interface IData {
  link: string;
  title?: string;
  createdAt?: FieldValue;
  desc?: string;
}

export interface IAddLinkRecord {
  data: IData;
  cb: any;
}
