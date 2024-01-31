import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";

@Injectable()
export class UsersPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value, metadata);
        if (value.id == 1){
            return value;
        } else {
            throw new BadRequestException("Validation failed");
        }
    }
}
