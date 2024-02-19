import "react";
import { ReactElement } from "react";

declare module "react" {
  interface ExoticComponent<P = {}> {
    (props: P): ReactElement<any, any> | null;
  }
}
