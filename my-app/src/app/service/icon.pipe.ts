import { Pipe, PipeTransform } from "@angular/core";
import { EnumLearningMode } from "../models/course.model";

@Pipe({
    name:"IconPipe"
})
export class IconPipe implements PipeTransform{
    transform(value: any) {
        if(value==EnumLearningMode.Zoom)
            return "assets\\pictures\\Zoom-Logo.webp"
        if(value==EnumLearningMode.Frontaly)
            return "\\assets\\pictures\\man-standing-up.svg"
        return ""
    }
}