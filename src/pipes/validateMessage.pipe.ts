import { Pipe, PipeTransform } from "@angular/core";
import { ValidationErrors } from "@angular/forms";
import {
  handlerControlError,
  isEmpty,
  isEmptyObject,
  stringFormatObject,
} from "src/utils/utils";

@Pipe({
  name: "validateMessage",
})
export class ValidateMessagePipe implements PipeTransform {
  constructor() {}

  transform(errorKeys: ValidationErrors, ...args: any[]) {
    let code = handlerControlError(errorKeys);
    console.log(args, "args");
    if (!isEmptyObject(args) && !isEmpty(code)) {
      args.forEach((m) => {
        code = stringFormatObject(code, m);
      });
    }
    return code ? code : "";
  }
}
